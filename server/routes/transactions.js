const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.post('/', async (req, res) => {
  console.log('POST request body:', req.body); // log incoming data
  const transaction = new Transaction({
    description: req.body.description,
    amount: req.body.amount,
    category: req.body.category,
    type: req.body.type,
    date: req.body.date
  });

  try {
    const newTransaction = await transaction.save();
    console.log('Saved transaction:', newTransaction); // log what MongoDB returns
    res.status(201).json(newTransaction);
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(400).json({ message: error.message });
  }
});

// GET all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new transaction
router.post('/', async (req, res) => {
  const transaction = new Transaction({
    description: req.body.description,
    amount: req.body.amount,
    category: req.body.category,
    type: req.body.type,
    date: req.body.date
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a transaction
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
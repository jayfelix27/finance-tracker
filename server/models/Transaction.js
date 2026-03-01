const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Transportation', 'Entertainment', 'Bills', 'Shopping', 'Income', 'Other']
  },
  type: {
    type: String,
    required: true,
    enum: ['income', 'expense']
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);
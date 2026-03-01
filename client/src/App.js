import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Charts from './Charts';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
function App() {
  const[transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Food',
    type: 'expense',
    date: new Date().toISOString().split('T')[0]
});

//Fetch transactions from backend
useEffect(() => {
  fetchTransactions();
}, []);

const fetchTransactions = async () => {
  try{
    const response = await axios.get(`${API_URL}/api/transactions`);
    setTransactions (response.data);
  } catch (error){
    console.error('Error fetching transactions:', error)
  }
};

// Handle form input changes
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// Submit new transaction
const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    await axios.post(`${API_URL}/api/transactions`, {
      ...formData,
      amount: parseFloat(formData.amount)
    });
    setFormData({
      description: '',
      amount: '',
      category: 'Food',
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    });
    fetchTransactions();
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
};
//Delete transaction 
const handleDelete = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/transactions/${id}`);
    fetchTransactions();
  } catch (error) {
    console.error('Error with deleting transaction:', error);
  }
};
// Calculate balance
const balance = transactions.reduce((acc, transaction) => {
  return transaction.type === 'income' 
    ? acc + transaction.amount 
    : acc - transaction.amount;
}, 0);
return (
  <div className = "App">
    <header>
      <h1>Personal Finance Tracker</h1>
      <div className = "balance">
        <h2> Current Balance : ${balance.toFixed(2)}</h2>
      </div>
    </header>

    <div className = "container">
      {/* Add Transaction Form */}
      <div className = "form-section">
      <h3> Add Transaction </h3>
      <form onSubmit = {handleSubmit}>
        <input 
        type = "text"
        name = "description"
        placeholder = "Description"
        value = {formData.description}
        onChange = {handleChange}
        required
        />

      <input
        type = "number"
        name = "amount" 
        placeholder = 'Amount'
        step = "0.01"
        value = {formData.amount}
        onChange = {handleChange}
        required
      />

      <select name = "category" value = {formData.category} onChange = {handleChange}>
        <option value = "Food">Food</option>
        <option value = "Transportation">Transaction</option>
        <option value = "Entertainment">Entertainment</option>
        <option value = "Bills">Bills</option>
        <option value = "Shopping">Shopping</option>
        <option value = "Income">Income</option>
        <option value = "Other">Other</option>
      </select>

      <select name = "type" value = {formData.type} onChange = {handleChange}>
        <option value = "expense">Expense</option>
        <option value = "income">Income</option>
      </select>

      <input
        type = "date"
        name = "date"
        value = {formData.date}
        onChange = {handleChange}
        required
        />

      <button type = "submit">Add Transaction</button>
      </form>
      </div>

      {/* Transactions List */}
      <div className="transactions-section">
          <h3>Recent Transactions</h3>
          <div className="transactions-list">
            {transactions.length === 0 ? (
              <p>No transactions yet. Add your first one!</p>
            ) : (
              transactions.map((transaction) => (
                <div 
                  key={transaction._id} 
                  className={`transaction-item ${transaction.type}`}
                >
                  <div className="transaction-info">
                    <h4>{transaction.description}</h4>
                    <p>{transaction.category} • {new Date(transaction.date).toLocaleDateString()}</p>
                  </div>
                  <div className="transaction-amount">
                    <span className={transaction.type}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                    <button onClick={() => handleDelete(transaction._id)}>🗑️</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Charts transactions={transactions} />
    </div>
  );
}

export default App;
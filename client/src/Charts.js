import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import './Charts.css';

// Register Chart.js componets
ChartJS.register (ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function Charts({ transactions }){
    // Calculate spending by category 
    const getCategoryData = () => {
        const expenses = transactions.filter (t => t.type === 'expense');
        const categoryTotals = {};

        expenses.forEach(transaction => {
            if (categoryTotals[transaction.category]) {
                categoryTotals[transaction.category] += transaction.amount;
            } else {
                categoryTotals[transaction.category] = transaction.amount;
            }
        });

        return {
            labels: Object.keys(categoryTotals),
            datasets: [{
                label: 'Spending by Category',
                data: Object.values(categoryTotals),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#FF6384'   
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        };
    };

    // Calculate income vs expenses
    const getIncomeExpeseData = () => {
        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const expenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t ) => sum + t.amount, 0);
        return {
            labels: ['Income', 'Expenses'],
            datasets: [{
                label: 'Anount ($)',
                data: [income, expenses],
                backgroundColor: ['#4caf50', '#f44336'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        };
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRation: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };

    if (transactions.length === 0) {
        return (
            <div className = "charts-section">
                <h3> Analytics </h3>
                <p className = 'no data'> Add some transactions to see your spending analytics</p>
            </div>
        );
    }

    return (
        <div className = "charts-section">
            <h3> Analytics </h3>
            <div className = "charts-container">
                <div className = "chart">
                    <h4> Income vs Expense </h4>
                    <Bar data = {getIncomeExpeseData()} options = {chartOptions} />
                </div>
                <div className = "chart">
                <h4> Spending by category </h4>
                <Pie data = {getCategoryData()} options = {chartOptions} />
                </div>
            </div>
        </div>
    );
}

export default Charts;
Personal Finance Tracker

A full-stack web application for tracking income and expenses with real-time data visualization. Built using the MERN stack and deployed with Vercel and Render.

Live Demo:
https://finance-tracker-one-blond.vercel.app

Features
Transaction Management

Add, view, and delete income or expense transactions.

Real-Time Balance Tracking

Automatically calculates and updates the user's current balance.

Data Visualization

Interactive charts provide insights into spending patterns:

Income vs Expenses – Bar chart

Spending by Category – Pie chart

Category-Based Organization

Track spending across multiple categories such as:

Food

Transportation

Entertainment

Utilities

Other

Responsive Design

Modern dark-themed UI that works across desktop and mobile devices.

Persistent Data Storage

All transactions are securely stored using MongoDB Atlas.

Tech Stack
Frontend

React – UI framework

Chart.js + react-chartjs-2 – Data visualization

Axios – HTTP client for API requests

CSS3 – Custom modern dark theme styling

Backend

Node.js – Runtime environment

Express.js – Backend web framework

MongoDB – NoSQL database

Mongoose – MongoDB object modeling

CORS – Cross-origin resource sharing

Deployment

Vercel – Frontend hosting

Render – Backend hosting

MongoDB Atlas – Cloud database

Installation & Setup
Prerequisites

Make sure you have the following installed:

Node.js (v14 or higher)

Git

MongoDB Atlas account (free tier)

Clone the Repository
git clone https://github.com/jayfelix27/finance-tracker.git
cd finance-tracker
Backend Setup

Navigate to the server directory:

cd server
npm install

Create a .env file:

touch .env

Add the following environment variables:

MONGODB_URI=your_mongodb_connection_string
PORT=5001

Start the backend server:

npm run dev

Backend will run on:

http://localhost:5001
Frontend Setup

Navigate to the client directory:

cd ../client
npm install

Create a .env file:

touch .env

Add the following variable:

REACT_APP_API_URL=http://localhost:5001

Start the frontend:

npm start

Frontend will run on:

http://localhost:3000
Usage
Add a Transaction

Fill out the transaction form including:

Description

Amount

Category

Transaction type (income or expense)

Date

View Balance

Your current balance updates automatically at the top of the dashboard.

View Analytics

Scroll down to view charts showing:

Spending by category

Income vs expenses

Delete Transactions

Click the trash icon next to a transaction to remove it.

Design Features

Dark Theme – Easy on the eyes with a modern UI

Gradient Accents – Purple gradient highlights

Smooth Animations – Hover effects and transitions

Responsive Layout – Works across screen sizes

Clean Typography – Clear hierarchy and readability

Future Enhancements

User authentication and individual accounts

Date range filtering

Export transaction data to CSV

Monthly and yearly spending summaries

Budget tracking and alerts

Dark/light theme toggle

Recurring transactions
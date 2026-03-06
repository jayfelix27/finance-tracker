#Personal Finance Tracker

A full-stack web application for tracking income and expenses with real-time data visualization. Built using the MERN stack and deployed with Vercel and Render.

**Live Demo:** [finance-tracker-one-blond.vercel.app](https://finance-tracker-one-blond.vercel.app)

## Features

- Add, view, and delete income or expense transactions
- Automatically calculates and updates current balance in real time
- Interactive bar chart for Income vs Expenses
- Interactive pie chart for Spending by Category
- Category-based organization (Food, Transportation, Entertainment, Utilities, Other)
- Modern dark-themed UI, responsive across desktop and mobile
- All transactions securely stored using MongoDB Atlas

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) — Data visualization
- [Axios](https://axios-http.com/) — HTTP client for API requests
- [Node.js](https://nodejs.org/) — Runtime environment
- [Express.js](https://expressjs.com/) — Backend web framework
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) — Database and object modeling
- [Vercel](https://vercel.com/) — Frontend hosting
- [Render](https://render.com/) — Backend hosting
- [MongoDB Atlas](https://www.mongodb.com/atlas) — Cloud database

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jayfelix27/finance-tracker.git
cd finance-tracker
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
```

Start the backend server:

```bash
npm run dev
```

Backend will run on [http://localhost:5001](http://localhost:5001)

### 3. Set up the frontend

```bash
cd ../client
npm install
```

Create a `.env` file:

```
REACT_APP_API_URL=http://localhost:5001
```

Start the frontend:

```bash
npm start
```

Frontend will run on [http://localhost:3000](http://localhost:3000)

## Usage

- **Add a Transaction** — Fill out the form with a description, amount, category, type (income or expense), and date
- **View Balance** — Your current balance updates automatically at the top of the dashboard
- **View Analytics** — Charts show spending by category and income vs expenses
- **Delete Transactions** — Click the trash icon next to any transaction to remove it

## Future Enhancements

- User authentication and individual accounts
- Date range filtering
- Export transaction data to CSV
- Monthly and yearly spending summaries
- Budget tracking and alerts
- Dark/light theme toggle
- Recurring transactions

import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/expenseForm';
import ExpenseTable from './components/ExpenseTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file for styling

function App() {
    const [expenseEntries, setExpenseEntries] = useState([]);

    useEffect(() => {
        // Load initial data from local storage
        const storedEntries = JSON.parse(localStorage.getItem('expenseData'));
        if (Array.isArray(storedEntries)) {
            setExpenseEntries(storedEntries);
        }
    }, []);

    const handleReset = () => {
        // Clear local storage and update state
        localStorage.removeItem('expenseData');
        setExpenseEntries([]);
    };

    const addExpense = (expenseData) => {
        const updatedEntries = [...expenseEntries, expenseData];
        setExpenseEntries(updatedEntries);
        localStorage.setItem('expenseData', JSON.stringify(updatedEntries));
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        height: '500px' // Set the desired height for both components
    };

    const itemStyle = {
        flex: '1',
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%' // Make sure each component fills the available height
    };

    return (
        <div>
            <header className="app-header">
                <h1>Expense Tracking App</h1>
            </header>
            <div style={containerStyle}>
                <div style={{ ...itemStyle, marginRight: '20px' }}>
                    <ExpenseForm addExpense={addExpense} />
                </div>
                <div style={itemStyle}>
                    <ExpenseTable expenseEntries={expenseEntries} onReset={handleReset} />
                </div>
            </div>
        </div>
    );
}

export default App;

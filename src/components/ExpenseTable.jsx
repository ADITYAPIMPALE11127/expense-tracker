import React from 'react';
import ResetTableButton from './ResetTableButton';
import './ExpenseTable.css'; 

function ExpenseTable({ expenseEntries, onReset }) {
    const calculateTotalAmount = () => {
        return expenseEntries.reduce((total, entry) => total + (entry.amount || 0), 0);
    };

    return (
        <div className="expense-table-container">
            <div className="expense-table-header">
                <h2 style={{color:'#000'}}>Expense Table</h2>
                <ResetTableButton handleReset={onReset} />
            </div>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody style={{color:'#000'}}>
                    {expenseEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.amount}</td>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>{entry.category}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="total-row">
                            Total: {calculateTotalAmount()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;

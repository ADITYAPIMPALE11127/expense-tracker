import React, { useState } from 'react';
import ResetTableButton from './ResetTableButton';
import ConfirmationModal from './ConfirmationModal'; // Import the modal
import './ExpenseTable.css'; 

function ExpenseTable({ expenseEntries, onReset, onDelete }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [entryToDelete, setEntryToDelete] = useState(null);

    const calculateTotalAmount = () => {
        return expenseEntries.reduce((total, entry) => total + (entry.amount || 0), 0);
    };

    const handleDeleteClick = (index) => {
        setEntryToDelete(index);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (entryToDelete !== null) {
            onDelete(entryToDelete);
            setEntryToDelete(null);
        }
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setEntryToDelete(null);
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{color:'#000'}}>
                    {expenseEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.amount}</td>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>{entry.category}</td>
                            <td>
                                <button style={{borderRadius:30}} onClick={() => handleDeleteClick(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="total-row">
                            Total: {calculateTotalAmount()}
                        </td>
                    </tr>
                </tbody>
            </table>
            <ConfirmationModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onConfirm={handleConfirmDelete} 
            />
        </div>
    );
}

export default ExpenseTable;

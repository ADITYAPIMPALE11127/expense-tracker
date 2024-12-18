import React, { useState } from 'react';
import ResetTableButton from './ResetTableButton';
import ConfirmationModal from './ConfirmationModal';
import 'boxicons';
import './ExpenseTable.css';

function ExpenseTable({ expenseEntries, onReset, onDelete, onEdit }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDeleteClick = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedIndex !== null) {
            onDelete(selectedIndex);
            setSelectedIndex(null);
        }
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedIndex(null);
    };

  
    const totalAmount = expenseEntries.reduce((total, entry) => total + parseFloat(entry.amount), 0);

    return (
        <div className="expense-table-container">
            <div className="expense-table-header">
                <h2 style={{ color: '#000' }}>Expense Table</h2>
                <ResetTableButton handleReset={onReset} />
            </div>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th style={{ width: '0%',fontFamily:'cursive',letterSpacing:1 }}>Amount</th>
                        <th style={{ width: '5%' }}>Date</th>
                        <th style={{ width: '20%' }}>Description</th>
                        <th style={{ width: '25%' }}>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{ color: '#000' }}>
                    {expenseEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.amount}</td>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>{entry.category}</td>
                            <td style={{ width: '30%' }}>
                                <div className="button-container">
                                    <button
                                        onClick={() => handleDeleteClick(index)}
                                        style={{
                                            backgroundColor: 'red',
                                            border: 'none',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            borderRadius: '30px',
                                            userSelect: 'none',
                                        }}
                                        className="expense-button"
                                    >
                                        <box-icon className="expense-icon" name="trash"></box-icon>
                                    </button>
                                    <button
                                        onClick={() => onEdit(index)}
                                        style={{
                                            backgroundColor: 'green',
                                            border: 'none',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            borderRadius: '30px',
                                            userSelect: 'none',
                                        }}
                                        className="expense-button"
                                    >
                                        <box-icon className="expense-icon" name="edit" type="solid"></box-icon>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
            <div className="total-amount" style={{ marginTop: '20px', textAlign: 'right', fontSize: '1.2em', fontWeight: 'bold', color: '#000' }}>
                Total Amount: ₹{totalAmount.toFixed(2)}
            </div>

            
            <ConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
        </div>
    );
}

export default ExpenseTable;

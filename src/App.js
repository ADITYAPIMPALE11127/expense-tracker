import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/expenseForm';
import ExpenseTable from './components/ExpenseTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [expenseEntries, setExpenseEntries] = useState([]);
    const [entryToEdit, setEntryToEdit] = useState(null);

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem('expenseData'));
        if (Array.isArray(storedEntries)) {
            setExpenseEntries(storedEntries);
        }
    }, []);

    const handleReset = () => {
        localStorage.removeItem('expenseData');
        setExpenseEntries([]);
    };

    const addExpense = (expenseData) => {
        if (entryToEdit !== null) {
            const updatedEntries = expenseEntries.map((entry, index) =>
                index === entryToEdit ? expenseData : entry
            );
            setExpenseEntries(updatedEntries);
            localStorage.setItem('expenseData', JSON.stringify(updatedEntries));
            setEntryToEdit(null);
        } else {
            const updatedEntries = [...expenseEntries, expenseData];
            setExpenseEntries(updatedEntries);
            localStorage.setItem('expenseData', JSON.stringify(updatedEntries));
        }
    };

    const handleDeleteEntry = (indexToRemove) => {
        const updatedEntries = expenseEntries.filter((_, index) => index !== indexToRemove);
        setExpenseEntries(updatedEntries);
        localStorage.setItem('expenseData', JSON.stringify(updatedEntries));
    };

    const handleEditEntry = (indexToEdit) => {
        setEntryToEdit(indexToEdit);
    };

    const handleUpdate = (updatedEntries) => {
        setExpenseEntries(updatedEntries);
        localStorage.setItem('expenseData', JSON.stringify(updatedEntries));
    };

    return (
        <div>
            <header className="app-header">
                <h1>Expense Tracking App</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <ExpenseForm
                            addExpense={addExpense}
                            entryToEdit={entryToEdit !== null ? expenseEntries[entryToEdit] : null}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <ExpenseTable
                            expenseEntries={expenseEntries}
                            onReset={handleReset}
                            onDelete={handleDeleteEntry}
                            onEdit={handleEditEntry}
                        />
                    </div>
                </div>
            </div>
                        {/* AdSense ad at the bottom of the page */}
                        <ins
                className="adsbygoogle"
                style={{ display: "block", textAlign: "center", margin: "20px 0" }}
                data-ad-client="ca-pub-5156983263059285"
                data-ad-slot="9876543210" // Replace with another AdSense slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}

export default App;

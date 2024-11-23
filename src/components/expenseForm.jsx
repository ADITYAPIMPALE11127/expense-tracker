import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import { format } from 'date-fns'; 
import "react-datepicker/dist/react-datepicker.css";
import './ExpenseForm.css';

function ExpenseForm({ addExpense }) {
    const [amount, setAmount] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            amount: parseFloat(amount),
            date: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : null,
            description,
            category,
        };

        addExpense(expenseData);

        setAmount('');
        setSelectedDate(null);
        setDescription('');
        setCategory('');
        alert('Expense data saved successfully!');
    };

    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h2 style={{color:'#000'}}>Expense Form</h2>
                <Form.Group className='mb-3' controlId='Amount'>
                    <Form.Label>Amount spent :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter amount" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Enter the amount spent in the above box.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='Date'>
                    <Form.Label>Select Date:</Form.Label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleChange}
                        dateFormat="MMMM d, yyyy"
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='Description'>
                    <Form.Label>Description :</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Enter the description of expenditure.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='Category'>
                    <Form.Label>Select Category:</Form.Label>
                    <Form.Select 
                        aria-label="Default select example"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Household expenses">Household expenses</option>
                        <option value="Transport & petrol expenses">Transport & petrol expenses</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" style={{ marginTop: 10,borderRadius:20 }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ExpenseForm;

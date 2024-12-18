import React from 'react';
import './ConfirmationModal.css'; 

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Are you sure you want to delete this entry?</h3>
                <div className="modal-buttons">
                    <button onClick={onConfirm}>Yes, Delete</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;

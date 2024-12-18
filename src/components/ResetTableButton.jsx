import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ResetTableButton({ handleReset }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleConfirmReset = () => {
        handleReset(); 
        handleCloseModal();
    };

    return (
        <div>
            <Button variant="danger" onClick={handleShowModal} style={{ marginLeft: 10,borderRadius:20 }}>
                Reset Table
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Reset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to reset the expense table? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleConfirmReset}>
                        Yes, Reset
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ResetTableButton;

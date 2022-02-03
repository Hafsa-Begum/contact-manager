import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ViewModal = ({ item, show, handleClose }) => {

    const { name, email, phone } = item;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='text-center' closeButton>
                <Modal.Title style={{ color: '#6f42c1' }}>Contact Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <h4>Name: {name}</h4>
                <h6>Email: {email}</h6>
                <p>Phone No.: {phone}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ backgroundColor: '#6f42c1', color: '#fff' }} onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewModal;
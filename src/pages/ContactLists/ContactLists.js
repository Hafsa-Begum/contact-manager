import React, { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ViewModal from '../../components/ViewModal/ViewModal';
import { getContactsInitiate, deleteContactInitiate, getContactInitiate } from '../../redux/actions/contact_actions';
import AddEdit from '../AddEdit/AddEdit';
import './ContactLists.css';

const ContactLists = () => {
    const [editMode, setEditMode] = useState(false);

    //view model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();
    const { contacts, contact } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(getContactsInitiate())
    }, [])

    // useEffect(() => {
    //     if (contact) {
    //         dispatch(getContactInitiate())
    //     }
    // }, [contact])

    const handleDeleteContact = (id) => {
        if (window.confirm("Are you sure, you want to delete contact?")) {
            dispatch(deleteContactInitiate(id))
        }

    }

    const editContact = id => {
        setEditMode(true);
        dispatch(getContactInitiate(id))
    }

    return (
        <div style={{ height: '100vh' }} className=''>
            <div className='w-50 mx-auto my-5'>

                {
                    contacts ? <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {contacts && contacts?.map((item, index) => (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <i onClick={handleShow} title="View" className="fs-5 mx-3 fas fa-eye"></i>
                                            <ViewModal item={item} show={show} handleClose={handleClose} />
                                            <Link to={`/update/${item.id}`}>
                                                <i onClick={() => editContact(item.id)} title="Update" className="fs-5 mx-2 fas fa-user-edit" style={{ color: '#6f42c1' }}></i>
                                            </Link>
                                            <i onClick={() => handleDeleteContact(item.id)} title="Delete" className="fs-5 mx-3 fas fa-trash-alt text-danger"></i>
                                        </td>
                                    </tr>

                                ))
                                }
                            </tbody>
                        </Table>
                    </div> :
                        <Spinner animation="border" variant="info" />
                }
            </div>
        </div>
    );
};

export default ContactLists;
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ViewModal from '../../components/ViewModal/ViewModal';
import { getContactsInitiate, deleteContactInitiate, getContactInitiate } from '../../redux/actions/contact_actions';
import './ContactLists.css';

const ContactLists = () => {
    //view modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //redux
    const dispatch = useDispatch();
    const { contacts, contact } = useSelector((state) => state.data)

    //get all contacts
    useEffect(() => {
        dispatch(getContactsInitiate())
    }, [dispatch]);

    //delete a contact
    const handleDeleteContact = (id) => {
        if (window.confirm("Are you sure, you want to delete contact?")) {
            dispatch(deleteContactInitiate(id))
        }

    };

    //update contact
    const editContact = id => {
        dispatch(getContactInitiate(id));
    };

    //view contact detail
    const handleVeiwContact = id => {
        dispatch(getContactInitiate(id));
    };

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'linear-gradient( rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url("https://i.pinimg.com/736x/c4/53/9e/c4539eb1f1c22eb729d0fe532b0a19cc.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundSize: '100% 100% '
        }} className='pt-5'>
            <div className='w-50 mx-auto pt-5'>

                {
                    contacts?.length === 0 ?
                        <h2>No contacts added yet. Create one!</h2>
                        :
                        <div>
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
                                                <span onClick={() => handleVeiwContact(item.id)}>
                                                    <i onClick={handleShow} title="View" className="fs-5 mx-3 fas fa-eye"></i>
                                                    <ViewModal item={contact} show={show} handleClose={handleClose} />
                                                </span>

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
                        </div>
                }
            </div>
        </div>
    );
};

export default ContactLists;
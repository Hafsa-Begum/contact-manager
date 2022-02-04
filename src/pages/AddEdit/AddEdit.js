import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addContactInitiate, getContactInitiate, getContactsInitiate } from '../../redux/actions/contact_actions';

const initialState = {
    name: "",
    email: "",
    phone: ""
}

const AddEdit = () => {
    const { id } = useParams();
    const [state, setState] = useState(initialState);
    const { name, email, phone } = state;

    const dispatch = useDispatch();
    const { contact } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(getContactInitiate())
    }, [id])

    useEffect(() => {
        if (contact) {
            setState({ ...state })
        } else {
            setState({ ...initialState })
        }

        return () => {
            setState({ ...initialState })
        }
    }, [id, contact])

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContactInitiate(state));
        Swal.fire('Wow! New contact added successfully.');
    };

    return (
        <div className="container h-100">
            <div className='my-5 d-flex justify-content-center align-items-center'>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className='w-50 h-100 rounded-3 mt-3 d-flex justify-content-center align-items-center'>
                    <div className='w-75 my-5'>
                        <h2 style={{ color: '#6f42c1' }}>Add New Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                className='w-75 my-4 p-2 rounded-3'
                                placeholder='Name'
                                value={name || ""}
                                name='name'
                                type='text'
                                onChange={handleInputChange}
                            />
                            <input
                                className='w-75 mb-4 p-2 rounded-3'
                                placeholder='Email'
                                value={email || ""}
                                name='email'
                                type='email'
                                onChange={handleInputChange}
                            />
                            <input
                                className='w-75 mb-4 p-2 rounded-3'
                                placeholder='Phone No.'
                                type="number"
                                value={phone || ""}
                                name='phone'
                                onChange={handleInputChange}
                            /> <br />

                            <input style={{ backgroundColor: '#6f42c1', color: '#fff' }} className='w-25 rounded-3 mb-2 p-1' type="submit" />

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddEdit;
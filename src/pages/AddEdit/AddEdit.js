import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addContactInitiate, getContactInitiate, updateContactInitiate } from '../../redux/actions/contact_actions';



const AddEdit = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const { currentUser } = useSelector((state) => state.user);
    const initialState = {
        name: "",
        email: "",
        phone: "",
        userEmail: currentUser.email
    };
    const [state, setState] = useState(initialState);
    let { name, email, phone } = state;
    const { id } = useParams();


    const dispatch = useDispatch();
    const { contact } = useSelector((state) => state.data);




    useEffect(() => {
        dispatch(getContactInitiate(id))
    }, [id, dispatch])

    useEffect(() => {
        if (contact) {
            setState(contact)
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
        if (!name || !email || !phone) {
            setErrorMsg("Please fill out all input-fields");
        } else {
            if (!id) {
                dispatch(addContactInitiate(state));
                Swal.fire('Wow! New contact added successfully.');
                setState({ name: '', email: '', phone: '' });
                setErrorMsg("");
            } else {
                dispatch(updateContactInitiate(id, state))
                Swal.fire('Contact updated successfully!');
                setState({ name: '', email: '', phone: '' });
                setErrorMsg("");
            }
        }
    };

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'linear-gradient( rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url("https://i.pinimg.com/736x/c4/53/9e/c4539eb1f1c22eb729d0fe532b0a19cc.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundSize: '100% 100% '
        }}>
            <div className='py-5 d-flex justify-content-center align-items-center'>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className='w-50 h-100 rounded-3 mt-3 d-flex justify-content-center align-items-center'>
                    <div className='w-75 my-5'>
                        <h2 style={{ color: '#6f42c1' }}>{id ? 'Update Contact' : 'Add New Contact'}</h2>
                        {errorMsg && <p className='text-danger'>{errorMsg}</p>}
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

                            <input style={{ backgroundColor: '#6f42c1', color: '#fff' }} className='w-25 rounded-3 mb-2 p-1' type="submit" placeholder={id ? "Update" : "submit"} />

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddEdit;
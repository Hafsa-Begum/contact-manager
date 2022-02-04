import React from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { registerInitiate } from '../../redux/actions/auth_actions';
import './Signup.css';
//https://i.ibb.co/Jqs4T7K/5163953-ai.png

const Signup = () => {
    const { register, reset, handleSubmit } = useForm();

    const { currentUser } = useSelector((state) => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/contactList")
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            return;
        };
        dispatch(registerInitiate(data.email, data.password, data.fullName));
        reset();
    };

    return (
        <div className="container h-100">

            <div className="row mt-5">
                <div className="signin-image col-md-6 col-12">
                    <img src="https://i.ibb.co/Jqs4T7K/5163953-ai.png" alt="" />
                </div>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className='w-75 h-100 rounded-3 mt-3 d-flex justify-content-center align-items-center'>
                        <div>
                            <h2 style={{ color: '#6f42c1' }}>Sign up page</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='w-75 my-4 p-2 rounded-3' placeholder='Enter your full-name' {...register("fullName", { required: true })} />
                                <input className='w-75 mb-4 p-2 rounded-3' placeholder='Enter your email' {...register("email", { required: true })} />
                                <input className='w-75 mb-4 p-2 rounded-3' placeholder='Enter password' type="password" {...register("password", { required: true })} />
                                <input className='w-75 mb-4 p-2 rounded-3' placeholder='Confirm password' type="password" {...register("confirmPassword", { required: true })} /> <br />
                                <input style={{ backgroundColor: '#6f42c1', color: '#fff' }} className='w-25 rounded-3 mb-2 p-1' type="submit" />

                                <div>
                                    <p>Already have an account? <NavLink style={{ color: '#6f42c1' }} to='/signin'>Sign-In</NavLink></p>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
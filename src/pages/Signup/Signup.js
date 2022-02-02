import React from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerInitiate } from '../../redux/actions/auth_actions';
import './Signup.css';
//https://i.ibb.co/Jqs4T7K/5163953-ai.png

const Signup = () => {
    const { register, handleSubmit } = useForm();

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
        dispatch(registerInitiate(data.email, data.password, data.fullName))
    };

    return (
        <div className="container">
            <h2>Sign up page</h2>
            <div className="row">
                <div className="signin-image col-md-6 col-12"></div>
                <div className='col-md-6 col-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Enter your full-name' {...register("fullName", { required: true })} />
                        <input placeholder='Enter your email' {...register("email", { required: true })} />
                        <input placeholder='Enter password' type="password" {...register("password", { required: true })} />
                        <input placeholder='Confirm password' type="password" {...register("confirmPassword", { required: true })} />
                        <input type="submit" />

                        <div>
                            <p>Already have an account? <Link to='/signin'>Sign-In</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
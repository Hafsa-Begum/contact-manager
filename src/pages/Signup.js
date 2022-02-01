import React from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerInitiate } from '../redux/actions';

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
        <div>
            <h2>Sign up page</h2>
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
    );
};

export default Signup;
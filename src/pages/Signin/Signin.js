import React from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginInitiate } from '../../redux/actions/auth_actions';
import './Signin.css';
//https://i.ibb.co/Jqs4T7K/5163953-ai.png

const Signin = () => {
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
        if (!data.email || !data.password) {
            return;
        }
        dispatch(loginInitiate(data.email, data.password))

    };

    return (
        <div>
            <h2>Signin Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Enter your email' {...register("email", { required: true })} />
                <input placeholder='Enter password' type="password" {...register("password", { required: true })} />

                <input type="submit" />

                <div>
                    <p>Don't have an account? <Link to='/signup'>Sign-Up</Link></p>

                </div>
            </form>
        </div>
    );
};

export default Signin;
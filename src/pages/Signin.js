import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
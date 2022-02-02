import React from 'react';
import { useForm } from "react-hook-form";

const AddEdit = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="container h-100">
            <div className='my-5 d-flex justify-content-center align-items-center'>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className='w-50 h-100 rounded-3 mt-3 d-flex justify-content-center align-items-center'>
                    <div className='w-75 my-5'>
                        <h2 style={{ color: '#6f42c1' }}>Add New Contact</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-75 my-4 p-2 rounded-3' placeholder='Name' {...register("name", { required: true })} />
                            <input className='w-75 mb-4 p-2 rounded-3' placeholder='Email' {...register("email", { required: true })} />
                            <input className='w-75 mb-4 p-2 rounded-3' placeholder='Phone No.' type="password" {...register("phone", { required: true })} /> <br />

                            <input style={{ backgroundColor: '#6f42c1', color: '#fff' }} className='w-25 rounded-3 mb-2 p-1' type="submit" />

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddEdit;
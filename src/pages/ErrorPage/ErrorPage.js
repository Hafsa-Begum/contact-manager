import React from 'react';
import './ErrorPage.css';
//https://i.ibb.co/k2zm7Cq/error-404.png

const ErrorPage = () => {
    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'linear-gradient( rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url("https://i.pinimg.com/736x/c4/53/9e/c4539eb1f1c22eb729d0fe532b0a19cc.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundSize: '100% 100% '
        }}
            className='d-flex justify-content-center align-items-center'
        >
            <div>
                <img src="https://i.ibb.co/k2zm7Cq/error-404.png" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;
import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'linear-gradient( rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url("https://i.pinimg.com/736x/c4/53/9e/c4539eb1f1c22eb729d0fe532b0a19cc.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundSize: '100% 100% '
        }}
            className='d-flex justify-content-center align-items-center pb-5'
        >
            <div className="row">
                <div>
                    <h1 className='text-dark col-md-12 col-12'>Welcome to Smart contact management app</h1>
                    <p>No need to overload your phone, you can store all of your contacts into this smart contact app!</p>
                </div>
                <div className="col-md-12 col-12"></div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'url("https://i.pinimg.com/originals/b2/b5/7d/b2b57d79b56c02b0a2c08dfdb07c520c.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundSize: '100% 100% '
        }}
            className='d-flex justify-content-center align-items-center pb-5'
        >
            <div className="row">
                <div>
                    <h1 className='text-dark col-md-12 col-12'>Welcome to Smart contact management app</h1>
                </div>
                <div className="col-md-12 col-12"></div>
            </div>
        </div>
    );
};

export default Home;
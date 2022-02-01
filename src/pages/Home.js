import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions';

const Home = () => {
    // const navigate = useNavigate();
    // const { currentUser } = useSelector((state) => state.user);
    // const dispatch = useDispatch();

    // const handleLogout = () => {
    //     if (currentUser) {
    //         dispatch(logoutInitiate());
    //         navigate("/")
    //     }
    // }

    return (
        <div>
            <h2 className='text-success'>this is a contact management app</h2>
            {/* <button onClick={handleLogout} className='btn btn-danger'>Logout</button> */}
        </div>
    );
};

export default Home;
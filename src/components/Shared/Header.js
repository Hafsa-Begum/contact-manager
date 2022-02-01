import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../../redux/actions';

const Header = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);

    // console.log(currentUser.displayName)
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (currentUser) {
            dispatch(logoutInitiate());
            navigate("/")
        }
    }

    return (
        <div>
            <h2>This is header</h2>
            {
                currentUser?.displayName && <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
            }
        </div>
    );
};

export default Header;
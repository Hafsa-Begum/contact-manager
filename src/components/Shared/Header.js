import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../../redux/actions/auth_actions';

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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><img src="https://i.ibb.co/02mVbb3/logo-1.png" alt="" /> <span className='fst-italic'>Smart <sub>Contact Manager</sub> </span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='nav-link' to="/home"><i className="fs-5 fas fa-home"></i> Home</NavLink>
                        {
                            currentUser?.displayName ? <>
                                <NavLink className='nav-link' to="/contactList"><i className="fs-5 fas fa-address-book"></i> Contact List</NavLink>
                                <button onClick={handleLogout} className="btn btn-danger">Logout <i className="fs-5 fas fa-sign-out-alt"></i></button>
                            </>
                                :
                                <NavLink className='nav-link' to="/signin"><i className="fs-5 fas fa-sign-in-alt"></i> Signin</NavLink>
                        }
                        {currentUser?.displayName &&
                            <Navbar.Text>
                                <h5 className='ms-4 text-white'>Hi, {currentUser?.displayName}</h5>
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
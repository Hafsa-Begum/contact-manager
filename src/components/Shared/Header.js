import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../../redux/actions/auth_actions';
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home")
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        if (currentUser) {
            dispatch(logoutInitiate());
            navigate("/")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?name=${search}`);
        setSearch("");
    }

    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#6f42c1', color: '#fff' }}>
                <Container className=''>
                    <Navbar.Brand href="/home"><img className='rounded-circle' src="https://i.ibb.co/84rHZw9/image-2.png" alt="" /> <span className='text-white'> Contact Manager </span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="nav justify-content-end">
                        <NavLink onClick={() => setActiveTab("Home")} style={{ color: '#fff' }} className={`${activeTab === "Home" ? "active nav-link" : "nav-link"}`} to="/home"><i className="fs-5 fas fa-home"></i> Home</NavLink>

                        {
                            currentUser?.displayName ? <>
                                <NavLink onClick={() => setActiveTab("Contact List")} style={{ color: '#fff' }} className={`${activeTab === "Contact List" ? "active nav-link" : "nav-link"}`} to="/contactList"><i className="fs-5 fas fa-address-book"></i> Contact List</NavLink>
                                <NavLink onClick={() => setActiveTab("Add Contact")} style={{ color: '#fff' }} className={`${activeTab === "Add Contact" ? "active nav-link" : "nav-link"}`} to="/addContact"><i class="fs-5 fas fa-user-plus"></i> Add Contact</NavLink>
                                <button onClick={handleLogout} className="btn btn-dark">Logout <i className="fs-5 fas fa-sign-out-alt"></i></button>
                            </>
                                :
                                <NavLink onClick={() => setActiveTab("Signin")} style={{ color: '#fff' }} className={`${activeTab === "Signin" ? "active nav-link" : "nav-link"}`} to="/signin"><i className="fs-5 fas fa-sign-in-alt"></i> Signin</NavLink>
                        }

                        <Form className="d-flex ms-5" onSubmit={handleSubmit}>
                            <FormControl
                                type="search"
                                placeholder="Search By Name"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            {/* <Button variant='dark' type="submit">Search</Button> */}
                        </Form>
                        {
                            currentUser?.displayName &&
                            <Navbar.Text>
                                <h3 className='p-2 ms-4 text-white bg-dark rounded-circle'>
                                    {currentUser?.displayName?.slice(0, 1)}{currentUser?.displayName?.split(' ')[1]?.slice(0, 1)}</h3>
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
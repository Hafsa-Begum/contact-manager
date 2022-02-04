import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useSelector((state) => state.user);
    let location = useLocation();
    if (loading) {
        return <Spinner animation="border" variant="info" />
    }
    if (currentUser?.email) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} />;

};

export default PrivateRoute;
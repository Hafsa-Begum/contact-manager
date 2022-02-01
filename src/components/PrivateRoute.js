import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LoadingToRedirect from './LoadingToRedirect';

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Route {...rest} /> : <LoadingToRedirect />

};

export default PrivateRoute;
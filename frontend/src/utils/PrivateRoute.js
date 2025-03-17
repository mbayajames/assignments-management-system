import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, getRole } from './auth';

const PrivateRoute = ({ role }) => {
    const isAuth = isAuthenticated();
    const userRole = getRole();

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    if (role && userRole !== role) {
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
};

export default PrivateRoute;

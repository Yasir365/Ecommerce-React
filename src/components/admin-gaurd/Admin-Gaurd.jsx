// src/components/AdminGuard.js

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { verifyAdminToken } from '../../store/adminAuthSlice';
import Loader from '../loader/Loader';

const AdminGuard = ({ children }) => {
    const { isAuthorized, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (isAuthorized === null) {
            dispatch(verifyAdminToken());
        }
    }, [dispatch, isAuthorized]);

    if (loading) {
        return <Loader />;
    }

    if (!loading && isAuthorized === false) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminGuard;

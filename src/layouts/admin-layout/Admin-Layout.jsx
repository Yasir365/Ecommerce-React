import './admin-layout.scss';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import AdminHeader from '../../components/admin-header/Admin-Header';
import Sidebar from '../../components/admin-sidebar/Admin-Sidebar';
import apiService from '../../services/api-service';

const AdminLayout = () => {
    const location = useLocation();
    const [isAuthorized, setIsAuthorized] = useState(null); // null indicates loading state

    useEffect(() => {
        const verifyAdmin = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsAuthorized(false);
                return;
            }

            try {
                const response = await apiService.verifyToken(token);
                if (response.data.success && response.data.role === 'admin') {
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                setIsAuthorized(false);
            }
        };

        verifyAdmin();
    }, [location]);

    // Show loading state while checking authorization
    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    // Redirect to login if not authorized
    if (!isAuthorized) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Render the admin layout if authorized
    return (
        <>
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="outlet-container">
                <AdminHeader />
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;

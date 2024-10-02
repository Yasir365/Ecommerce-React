import './admin-layout.scss';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import AdminHeader from '../../components/admin-header/Admin-Header';
import Sidebar from '../../components/admin-sidebar/Admin-Sidebar';
import apiService from '../../services/api-service';

const AdminLayout = () => {
    const location = useLocation();
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        verifyAdmin();
    }, [location]);

    const verifyAdmin = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsAuthorized(false);
            return;
        }

        try {
            const response = await apiService.verifyToken();
            if (response.data.success && response.data.role === 'admin') {
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    if (isAuthorized === null) {
        return <div className="loader-conatiner">
            <div className="spinner-border text-primary" role="status">
            </div>
        </div>;
    }

    if (!isAuthorized) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Render the admin layout if authorized
    return (
        <div className="admin-layout">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="outlet-container">
                <AdminHeader />
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;

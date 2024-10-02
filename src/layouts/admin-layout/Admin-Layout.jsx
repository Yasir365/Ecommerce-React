import './admin-layout.scss';
import Sidebar from '../../components/admin-sidebar/Admin-Sidebar';
import AdminHeader from '../../components/admin-header/Admin-Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
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

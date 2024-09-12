
import AdminHeader from '../../components/admin-header/Admin-Header';
import Sidebar from '../../components/admin-sidebar/Admin-Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <Sidebar />
            <Outlet />
        </>
    );
};

export default AdminLayout;
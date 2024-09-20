
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import userImage from '../../assets/member/1.jpg';
import './admin-sidebar.scss';



const AdminSidebar = () => {
    const closeSidebar = () => {
        const sidebar = document.querySelector('body');
        sidebar.classList.add('close-sidebar');
    }

    const logout = () => {
        localStorage.removeItem('token');
    };

    return (
        <div className="sidebar">
            <nav className="navbar pe-4 pb-3">
                <Link to="/admin" className="navbar-brand mx-4 mb-3 ">
                    <img src={logo} alt="Logo" />
                    <div className="close-btn" onClick={closeSidebar}><i className="fa-solid fa-xmark"></i></div>
                </Link>
                <div className="user-profile d-flex align-items-center ms-4 mb-4">
                    <img className="rounded-circle" src={userImage} alt="" style={{ width: 40, height: 40 }} />
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/dashboard">
                        <i className="fa fa-tachometer-alt me-2" />
                        Dashboard
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/manage-products">
                        <i className="fa fa-th me-2" />
                        Manage Products
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/manage-users">
                        <i className="fa fa-users me-2" />
                        Manage Users
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/manage-orders">
                        <i className="fa-solid fa-cart-shopping me-2"></i>
                        Manage Orders
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/manage-queries">
                        <i className="fa-solid fa-comments me-2"></i>
                        Manage Queries
                    </NavLink>

                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
                            <i className="fa-solid fa-gear me-2"></i>
                            Settings
                        </a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a className="dropdown-item">
                                Profile Settings
                            </a>
                            <Link to="/login" className="dropdown-item" onClick={logout}>
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default AdminSidebar;
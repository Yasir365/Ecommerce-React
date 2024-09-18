
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import userImage from '../../assets/member/1.jpg';
import './admin-sidebar.scss';



const AdminSidebar = () => {
    return (
        <>
            <div className="sidebar">
                <nav className="navbar pe-4 pb-3">
                    <Link to="/admin" className="navbar-brand mx-4 mb-3">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img
                                className="rounded-circle"
                                src={userImage}
                                alt=""
                                style={{ width: 40, height: 40 }}
                            />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
                        </div>
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
                            Products
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/users">
                            <i className="fa fa-users me-2" />
                            Users
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/orders">
                            <i className="fa-solid fa-cart-shopping me-2"></i>
                            Orders
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/admin/messages">
                            <i className="fa-solid fa-comments me-2"></i>
                            Messages
                        </NavLink>

                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
                                <i class="fa-solid fa-gear me-2"></i>
                                Settings
                            </a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a className="dropdown-item">
                                    Profile Settings
                                </a>
                                <a className="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    );
};

export default AdminSidebar;
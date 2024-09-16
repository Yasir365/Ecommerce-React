
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import userImage from '../../assets/member/1.jpg';
import './admin-sidebar.scss';



const AdminSidebar = () => {
    return (
        <>
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-light navbar-light">
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
                        <a className="nav-item nav-link active">
                            <i className="fa fa-tachometer-alt me-2" />
                            Dashboard
                        </a>
                        <a className="nav-item nav-link">
                            <i className="fa fa-th me-2" />
                            Widgets
                        </a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
                                <i className="far fa-file-alt me-2" />
                                Pages
                            </a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a className="dropdown-item">
                                    Sign In
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
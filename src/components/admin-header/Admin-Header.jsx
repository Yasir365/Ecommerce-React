import './admin-header.scss';
import userImage from '../../assets/member/1.jpg';
import { useState, useEffect } from "react";



const AdminHeader = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const toggleSidebar = () => {
        const sidebar = document.querySelector('body');
        if (sidebar.classList.contains('close-sidebar')) {
            sidebar.classList.remove('close-sidebar');
        } else {
            sidebar.classList.add('close-sidebar');
        }
    }
    return (
        <header>
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0" >
                <button className="sidebar-toggler btn flex-shrink-0" onClick={toggleSidebar}>
                    <i className="fa fa-bars" />
                </button>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item">
                        <button onClick={toggleTheme} className="nav-link">
                            {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
                        </button>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
                            <i className="fa fa-envelope me-lg-2" />
                            <span className="d-none d-lg-inline-flex"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img
                                        className="rounded-circle"
                                        src="img/user.jpg"
                                        alt=""
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img
                                        className="rounded-circle"
                                        src="img/user.jpg"
                                        alt=""
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item text-center">
                                See all message
                            </a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
                            <i className="fa fa-bell me-lg-2" />
                            <span className="d-none d-lg-inline-flex"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item text-center">
                                See all notifications
                            </a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
                            <img className="rounded-circle me-lg-2" src={userImage} alt="" style={{ width: 40, height: 40 }} />
                            <span className="d-none d-lg-inline-flex">Yasir</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a className="dropdown-item"> My Profile </a>
                            <a className="dropdown-item"> Settings </a>
                            <a className="dropdown-item"> Log Out </a>
                        </div>
                    </div>
                </div>
            </nav >

        </header>
    );
};

export default AdminHeader;
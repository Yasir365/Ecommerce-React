import './header.scss';

import NavLogo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import apiService from '../../services/api-service';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        verifyToken();
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLogin(false);
        } else {
            const response = await apiService.verifyToken()
            if (response.data.success) {
                if (response.data.role === 'admin') {
                    navigate('/admin');
                }
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLogin(false);
    };

    return (
        <header className='user-header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={NavLogo} alt="Nav Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" >
                        <i className="navbar-toggler-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/"> Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/products"> Products </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/about"> About </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/cart"> <i className="fa-solid fa-cart-shopping"></i> </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item mode">
                                <button onClick={toggleTheme} className="nav-link">
                                    {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
                                </button>
                            </li>
                            <li className="nav-item login">
                                {!isLogin && <NavLink className="nav-link" aria-current="page" to="/login"> Login </NavLink>}
                                {isLogin && <NavLink className="nav-link" aria-current="page" to="/login" onClick={logout}> Logout </NavLink>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
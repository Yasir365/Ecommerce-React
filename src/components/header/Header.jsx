import './header.scss';

import NavLogo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";



const Header = () => {
    // Theme state: 'light' or 'dark'
    const [theme, setTheme] = useState("light");

    // Effect to add the theme class to the body element
    useEffect(() => {
        document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    }, [theme]);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <header>
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
                                <NavLink className="nav-link" aria-current="page" to="/login"> Login </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>

        </header>
    );
};

export default Header;
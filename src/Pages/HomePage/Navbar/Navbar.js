import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-xl">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="130px" />
                </Link>
                <button className="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#nava">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse text-center navbar-collapse" id="nava">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#works">Our Portfolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#contact">Contact Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/login" className="nav-link btn btn-dark text-white px-3">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
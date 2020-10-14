import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/logo.png';

const Navbar = () => {
    const [user] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    // check for admin
    useEffect(() => {
        if(user.signed) {
            fetch(`https://immense-wildwood-27777.herokuapp.com/checkAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
            })
        }
    }, [user.signed, user.email])

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
                        {
                            !user.signed &&
                            <Link to="/login" className="nav-link btn btn-dark text-white px-3">Login</Link>
                        }  
                        {
                            user.signed && admin &&
                            <Link to="/dashboard/admin" className="nav-link btn btn-dark text-white px-3">Dashboard</Link>
                        }  
                        {
                            user.signed && !admin &&
                            <h5 className="nav-link"><b>{user.name}</b></h5>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
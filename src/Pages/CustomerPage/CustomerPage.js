import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/logo.png';
import './CustomerPage.css';
import Order from './Order/Order';
import Sidebar from './Sidebar';

const CustomerPage = () => {
    const [user] = useContext(UserContext);
    const [display, setDisplay] = useState(<Order />)

    return (
        <section id="customer">
            <div className="navbar d-flex justify-content-between py-3 px-0 px-sm-5">
                <Link to="/">
                    <img src={logo} width="120px" alt=""/>
                </Link>
                <span className="h4">{user.name}</span>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar setDisplay={setDisplay} />
                </div>
                <div className="col-md-9 right bg-light">
                    {display}
                </div>
            </div>
        </section>
    );
};

export default CustomerPage;
import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/logo.png';
import AllOrders from './AllOrders/AllOrders'
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [display, setDisplay] = useState(null);

    // check for admin
    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data);
            data ? setDisplay(<AllOrders />) : setDisplay(<Order />)
        })
    }, [user.email])

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
                    <Sidebar isAdmin={isAdmin} setDisplay={setDisplay} />
                </div>
                <div className="col-md-9 right bg-light">
                    {display}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
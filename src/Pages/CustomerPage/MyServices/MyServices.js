import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import service1 from '../../../Images/service1.png';

const MyServices = () => {
    const [user] = useContext(UserContext);
    const [myOrders, setMyOrders] = useState([]);

    // loading user's services
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user.email])

    return (
        <section id="myServices" className="p-4">
            <div className="container">
                <h3>My Services</h3>
                <div className="row mt-4">
                    {
                        myOrders.map(order => 
                        <div key={order._id} className="col-md-5 my-3">
                            <div className="bg-white h-100 rounded p-3">
                                <div className="d-flex mb-3 justify-content-between">
                                        <img src={service1} alt="" width="60px" />
                                        <h5 className="text-primary mt-3">{order.status}</h5>
                                </div>
                                <h4><b>{order.name}</b></h4>
                                <p>{order.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyServices;
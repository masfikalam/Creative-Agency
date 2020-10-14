import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const MyServices = () => {
    const [user] = useContext(UserContext);
    const [myOrders, setMyOrders] = useState([]);

    // loading user's orders
    useEffect(() => {
        fetch(`https://immense-wildwood-27777.herokuapp.com/allOrders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user.email])

    return (
        <section id="myServices" className="p-4">
            <div className="container">
                <h3>My Services</h3>

                {
                    myOrders.length === 0 &&
                    <h4 className="my-4 text-center text-danger">Loading Your Orders....</h4>
                }

                <div className="row mt-4">
                    {
                        myOrders.map(order => 
                        <div key={order._id} className="col-md-5 my-3">
                            <div className="bg-white h-100 rounded p-3">
                                <div className="d-flex mb-3 justify-content-between">
                                    <h4 className="text-danger">{order.service}</h4>
                                    <h5 className="text-primary">{order.status}</h5>
                                </div>
                                <h5>Ordered By: <b>{order.name}</b></h5>
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
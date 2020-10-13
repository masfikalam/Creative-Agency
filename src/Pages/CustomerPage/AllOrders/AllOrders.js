import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';

const AllOrders = () => {
    const [user] = useContext(UserContext);
    const [allOrders, setAllOrders] = useState([]);
    
    // adding new order
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    }, [user.email])

    return (
        <section id="allOrder" className="p-4">
            <div className="container">
                <h3>All Orders From Customers</h3>
                <table className="table bg-white mt-4 text-center rounded table-borderless">
                    <thead className="bg-light">
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Details</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(order => 
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.service}</td>
                                <td className="text-left">{order.description}</td>
                                <td>{order.status}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllOrders;
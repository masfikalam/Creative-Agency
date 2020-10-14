import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';

const AllOrders = () => {
    const [user] = useContext(UserContext);
    const [allOrders, setAllOrders] = useState([]);
    const statuses = ['Pending', 'Processing', 'Done']
    
    // adding new order
    useEffect(() => {
        fetch('https://immense-wildwood-27777.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    }, [user.email])

    // handling status change
    function statusChange(id, e) {
        const modifiedOrder = {status : e.target.value};
        document.getElementById('update').innerText = 'Updateding Changes';
        
        // updating status
        fetch(`https://immense-wildwood-27777.herokuapp.com/edit/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(modifiedOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                document.getElementById('update').innerText = 'Changes Updated Successfully!'
            }
        })
    }

    return (
        <section id="allOrder" className="p-4">
            <div className="container">
                <h3>All Orders From Customers</h3>
                <h5 className="text-center text-success" id="update">.</h5>

                {
                    allOrders.length === 0 &&
                    <h4 className="my-4 text-center text-danger">Loading Orders....</h4>
                }

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
                                <td className="text-left" width="300px">{order.description}</td>
                                <td>
                                    <select className="form-control" onChange={(e) => statusChange(order._id, e)} name="status">
                                        {
                                            statuses.map(option => 
                                            <option key={option} value={option} selected={option === order.status}>{option}</option>)
                                        }
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllOrders;
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Order = () => {
    const {selectedService} = useParams();
    const [user] = useContext(UserContext);
    const [newOrder, setNewOrder] = useState({});

    // handling blur
    function handleBlur(e) {
        const optOrder = {...newOrder};
        optOrder[e.target.name] = e.target.value;
        optOrder.service = selectedService;
        optOrder.email = user.email;
        optOrder.status = 'Pending';
        setNewOrder(optOrder)
    }
    
    // adding new order
    function addOrder(e) {
        e.preventDefault();
        
        fetch('https://immense-wildwood-27777.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                document.getElementById('orderForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Order Placed Successfully</b></h3>';
            }
        })
    }

    return (
        <section id="order" className="p-4">
            <div className="container">
                <h3>Order</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form id="orderForm" onSubmit={addOrder}>
                            <input onBlur={handleBlur} type="text" name="name" placeholder="Your name / company's name" className="form-control my-3" required />
                            <input type="email" name="email" placeholder="Your email" className="form-control bg-white my-3" value={user.email} readOnly />
                            <input type="text" name="service" value={selectedService} className="form-control bg-white my-3" readOnly />
                            <textarea onBlur={handleBlur} name="description" placeholder="Project description" className="form-control my-3" cols="30" rows="10" required></textarea>
                            <div className="row my-3">
                                <div className="col-6">
                                    <input onBlur={handleBlur} type="number" name="price" placeholder="Your budget ($)" className="form-control" required />
                                </div>
                                <div className="col-6">
                                    <input type="file" name="photo" />
                                </div>
                            </div>
                            <button className="btn btn-dark px-4">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
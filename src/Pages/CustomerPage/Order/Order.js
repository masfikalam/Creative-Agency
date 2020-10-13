import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [user] = useContext(UserContext);

    return (
        <section id="order" className="p-4">
            <div className="container">
                <h3>Order</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form action="">
                            <input type="text" name="name" placeholder="Your name / company's name" className="form-control my-3" required />
                            <input type="email" name="email" placeholder="Your email" className="form-control my-3" defaultValue={user.email} required />
                            <input type="text" name="service" value="Graphic Design" className="form-control bg-white my-3" readOnly />
                            <textarea name="description" placeholder="Project description" className="form-control my-3" cols="30" rows="10" required></textarea>
                            <div className="row my-3">
                                <div className="col-6">
                                    <input type="number" name="price" placeholder="Your budget ($)" className="form-control" required />
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
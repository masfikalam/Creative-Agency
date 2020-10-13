import React from 'react';
import MyServices from './MyServices/MyServices';
import Order from './Order/Order';
import cartImg from '../../Images/cart.png';
import serviceImg from '../../Images/service.png';
import reviewImg from '../../Images/review.png';
import MyReview from './MyReview/MyReview';

const Sidebar = ({setDisplay}) => {
    const order = <Order />
    const services = <MyServices />
    const review = <MyReview />

    return (
        <aside>
            <div className="d-flex flex-md-column py-5 pl-2 pl-sm-4 pl-lg-5 align-items-start">
                <button onClick={() => setDisplay(order)} className="my-3 btn d-md-block">
                    <img src={cartImg} width="30px" className="mb-1" alt=""/>
                    <span className="h5 ml-2">Order</span>
                </button>
                <button onClick={() => setDisplay(services)}  className="my-3 btn d-md-block">
                    <img src={serviceImg} width="30px" className="mb-1" alt=""/>
                    <span className="h5 ml-2">Services</span>
                </button>
                <button onClick={() => setDisplay(review)} className="my-3 btn d-md-block">
                    <img src={reviewImg} width="30px" className="mb-1" alt=""/>
                    <span className="h5 ml-2">Review</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
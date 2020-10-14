import React from 'react';
import MyServices from '../MyServices/MyServices';
import Order from '../Order/Order';
import MyReview from '../MyReview/MyReview';
import AllOrders from '../AllOrders/AllOrders';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import CustomBar from './CustomBar';

const Sidebar = ({isAdmin, setDisplay}) => {
    
    // for customer
    const order = [<Order />, 'Order']
    const services = [<MyServices />, 'Services']
    const review = [<MyReview />, 'Review']

    // for admin
    const allOrder = [<AllOrders />, 'All Orders']
    const addService = [<AddService />, 'Add Service']
    const makeAdmin = [<MakeAdmin />, 'Make Admin']

    return (
        <aside>
            {
                isAdmin ? 
                <CustomBar setDisplay={setDisplay} features={[allOrder, addService, makeAdmin]} /> : 
                <CustomBar setDisplay={setDisplay} features={[order, services, review]} />
            }
        </aside>
    );
};

export default Sidebar;
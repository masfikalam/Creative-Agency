import React from 'react';
import './OurServices.css'
import service1 from '../../../Images/service1.png';
import { Link } from 'react-router-dom';

const OurServices = () => {
    return (
        <section id="services">
            <div className="container py-5 mt-md-5 text-center">
                <h2>We Provide Awesome <b style={{color: '#7ab259'}}>Services</b></h2>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4 my-3">
                        <Link to="/customer/WebDesign" style={{textDecoration: 'none'}}>
                        <div className="p-3 serviceCard">
                            <img className="icon" src={service1} alt="" width="70px" />
                            <h4 className="my-3 text-dark"><b>Web / Mobile Design</b></h4>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
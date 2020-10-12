import React from 'react';
import './OurServices.css'
import service1 from '../../../Images/service1.png';
import service2 from '../../../Images/service2.png';
import service3 from '../../../Images/service3.png';

const OurServices = () => {
    return (
        <section id="services">
            <div className="container py-5 mt-md-5 text-center">
                <h2>We Provide Awesome <b style={{color: '#7ab259'}}>Services</b></h2>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4 my-3">
                        <div className="p-3 serviceCard">
                            <img className="icon" src={service1} alt="" width="70px" />
                            <h4 className="my-3"><b>Web & Mobile Design</b></h4>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-3">
                        <div className="p-3 serviceCard">
                            <img className="icon" src={service2} alt="" width="70px" />
                            <h4 className="my-3"><b>Web & Mobile Design</b></h4>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-3">
                        <div className="p-3 serviceCard">
                            <img className="icon" src={service3} alt="" width="70px" />
                            <h4 className="my-3"><b>Web & Mobile Design</b></h4>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
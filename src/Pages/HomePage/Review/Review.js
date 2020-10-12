import React from 'react';
import client1 from '../../../Images/customer-1.png';
import client2 from '../../../Images/customer-2.png';
import client3 from '../../../Images/customer-3.png';

const Review = () => {
    return (
        <section id="services">
            <div className="container py-5 my-md-5 text-center">
                <h2>Our Client's <b style={{color: '#7ab259'}}>Feedback</b></h2>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4 my-3">
                        <div className="py-3 px-4 border rounded">
                            <div className="row text-left">
                                <div className="col-4">
                                    <img src={client1} alt="" width="70px" />
                                </div>
                                <div className="col-8">
                                    <h4>Scarlet Mansion</h4>
                                    <p>CEO, JOHN LTD</p>
                                </div>
                            </div>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-3">
                        <div className="py-3 px-4 border rounded">
                            <div className="row text-left">
                                <div className="col-4">
                                    <img src={client2} alt="" width="70px" />
                                </div>
                                <div className="col-8">
                                    <h4>Scarlet Mansion</h4>
                                    <p>CEO, JOHN LTD</p>
                                </div>
                            </div>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-3">
                        <div className="py-3 px-4 border rounded">
                            <div className="row text-left">
                                <div className="col-4">
                                    <img src={client3} alt="" width="70px" />
                                </div>
                                <div className="col-8">
                                    <h4>Scarlet Mansion</h4>
                                    <p>CEO, JOHN LTD</p>
                                </div>
                            </div>
                            <p className="text-justify text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, atque. Non voluptates libero possimus esse impedit aperiam quas delectus eligendi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
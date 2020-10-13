import React from 'react';
import service1 from '../../../Images/service1.png';

const MyServices = () => {
    return (
        <section id="myServices" className="p-4">
            <div className="container">
                <h3>My Services</h3>
                <div className="row mt-4">
                    <div className="col-md-5">
                        <div className="bg-white rounded p-3">
                            <div className="d-flex mb-3 justify-content-between">
                                    <img src={service1} alt="" width="60px" />
                                    <h5 className="text-primary mt-3">Pending</h5>
                            </div>
                            <h4><b>Web and Mobile Design</b></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consequatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyServices;
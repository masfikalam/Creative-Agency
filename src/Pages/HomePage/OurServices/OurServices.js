import React, { useEffect, useState } from 'react';
import './OurServices.css'
import { Link } from 'react-router-dom';

const OurServices = () => {
    const [allServices, setAllServices] = useState([]);

    // loading services
    useEffect(() => {
        fetch('https://immense-wildwood-27777.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])

    return (
        <section id="services">
            <div className="container py-5 mt-md-5 text-center">
                <h2>We Provide Awesome <b style={{color: '#7ab259'}}>Services</b></h2>

                {
                    allServices.length === 0 &&
                    <h4 className="my-4 text-center text-danger">Loading Services....</h4>
                }
                
                <div className="row mt-5">
                    {
                        allServices.map(service => 
                        <div key={service._id} className="col-md-6 col-lg-4 my-3">
                            <Link to={`/dashboard/${service.name}`} style={{textDecoration: 'none'}}>
                            <div className="p-3 serviceCard h-100">
                                <img className="icon" src={`data:image/png;base64,${service.image.img}`} alt="" width="70px" />
                                <h4 className="my-3 text-dark"><b>{service.name}</b></h4>
                                <p className="text-justify text-secondary">{service.desc}</p>
                            </div>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurServices;
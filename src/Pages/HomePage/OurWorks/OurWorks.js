import React from 'react';
import './OurWorks.css'
import image1 from '../../../Images/carousel-1.png';
import image2 from '../../../Images/carousel-2.png';
import image4 from '../../../Images/carousel-4.png';
import image5 from '../../../Images/carousel-5.png';

const OurWorks = () => {
    return (
        <section id="works" className="py-5 mt-md-5">
            <h3 className="text-center text-white">Here are some of our <b style={{color:'#7ab259'}}>Works</b></h3>
            <div className="container py-5">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={image4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={image5} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="btn btn-primary" aria-hidden="true">Previous</span>
                    </a>
                    <a href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="btn btn-primary float-right" aria-hidden="true">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;
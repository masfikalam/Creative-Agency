import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import workers from '../../../Images/workers.png';

const Header = () => {
    return (
        <header className="pt-1">
            <Navbar />
            <div className="container mt-4">
                <div className="row align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <h1><b>Let's Grow Your Brand To The Next Level</b></h1>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas cum odio accusamus vitae quo, magni eligendi inventore at ipsa enim corporis.</p>
                        <a href="#services" className="btn btn-dark px-5">Hire us</a>
                    </div>
                    <div className="col-md-7">
                        <img src={workers} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
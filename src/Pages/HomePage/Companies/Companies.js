import React from 'react';
import './Companies.css';
import google from '../../../Images/google.png';
import airbnb from '../../../Images/airbnb.png';
import netflix from '../../../Images/netflix.png';
import slack from '../../../Images/slack.png';
import uber from '../../../Images/uber.png';

const Companies = () => {
    return (
        <section id="companies">
            <div className="container pb-5 d-flex justify-content-around flex-wrap">
                <img src={slack} alt="" className="my-2 mx-4" width="130px" height="50px" />
                <img src={uber} alt="" className="my-2 mx-4" width="130px" height="50px" />
                <img src={google} alt="" className="my-2 mx-4" width="130px" height="50px" />
                <img src={netflix} alt="" className="my-2 mx-4" width="130px" height="50px" />
                <img src={airbnb} alt="" className="my-2 mx-4" width="130px" height="50px" />
            </div>
        </section>
    );
};

export default Companies;
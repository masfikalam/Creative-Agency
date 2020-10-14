import React from 'react';
import './Companies.css';
import google from '../../../Images/google.png';
import airbnb from '../../../Images/airbnb.png';
import netflix from '../../../Images/netflix.png';
import slack from '../../../Images/slack.png';
import uber from '../../../Images/uber.png';

const Companies = () => {
    const companies = [slack, uber, google, netflix, airbnb];

    return (
        <section id="companies">
            <div className="container pb-5 d-flex justify-content-around flex-wrap">
                {
                    companies.map(comp => <img key={comp} src={comp} alt="" className="my-2 mx-4" width="130px" height="50px" />)
                }
            </div>
        </section>
    );
};

export default Companies;
import React from 'react';
import cartImg from '../../../Images/cart.png';
import serviceImg from '../../../Images/service.png';
import reviewImg from '../../../Images/review.png';

const CustomBar = (props) => {
    const {setDisplay, features} = props;

    return (
        <div className="d-flex flex-md-column py-5 pl-2 pl-sm-4 pl-lg-5 align-items-start">
            <button onClick={() => setDisplay(features[0][0])} className="my-3 btn d-md-block">
                <img src={cartImg} width="30px" className="mb-1" alt=""/>
                <span className="h5 ml-2">{features[0][1]}</span>
            </button>
            <button onClick={() => setDisplay(features[1][0])}  className="my-3 btn d-md-block">
                <img src={serviceImg} width="30px" className="mb-1" alt=""/>
                <span className="h5 ml-2">{features[1][1]}</span>
            </button>
            <button onClick={() => setDisplay(features[2][0])} className="my-3 btn d-md-block">
                <img src={reviewImg} width="30px" className="mb-1" alt=""/>
                <span className="h5 ml-2">{features[2][1]}</span>
            </button>
        </div>
    );
};

export default CustomBar;
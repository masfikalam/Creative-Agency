import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Review = () => {
    const [allReviews, setAllReviews] = useState([]);

    // loading all reviews
    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    },[])

    return (
        <section id="services">
            <div className="container py-5 my-md-5 text-center">
                <h2>Our Client's <b style={{color: '#7ab259'}}>Feedback</b></h2>
                <div className="row mt-5">
                    {
                        allReviews.map(review => 
                        <div key={review._id} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={review.photo} alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{review.name}</b></h4>
                                        <p>{review.company}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{review.text}</p>
                            </div>
                        </div>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Review;
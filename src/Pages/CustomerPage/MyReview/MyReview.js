import React from 'react';

const MyReview = () => {
    return (
        <section id="myReview" className="p-4">
            <div className="container">
                <h3>Review</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form action="">
                            <input type="text" name="name" placeholder="Your name" className="form-control my-3" required />
                            <input type="text" name="company" placeholder="Company's name" className="form-control bg-white my-3" required />
                            <textarea name="review" placeholder="Your review" className="form-control my-3" cols="30" rows="10" required></textarea>
                            <button className="btn btn-dark px-4">Send Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyReview;
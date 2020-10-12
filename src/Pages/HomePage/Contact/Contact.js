import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-5 mb-4">
                        <h2 className="my-3"><b>Let us handle your project, Professionaly</b></h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis officia numquam labore tempora et cupiditate facilis, delectus tenetur eos.</p>
                    </div>
                    <div className="offset-md-1 col-md-6">
                        <input type="email" name="email" placeholder="Your Email" className="form-control form-control-lg my-3" />
                        <input type="text" name="name" placeholder="Your Name / Company's Name" className="form-control form-control-lg my-3" />
                        <textarea name="message" placeholder="Your Message" className="form-control form-control-lg my-3" cols="30" rows="10"></textarea>
                        <button className="btn btn-lg btn-dark px-5">Send</button>
                    </div>
                </div>
                <h6 className="text-center mt-5 pb-3 mb-0">Copyright &copy; 2020</h6>
            </div>
        </section>
    );
};

export default Contact;
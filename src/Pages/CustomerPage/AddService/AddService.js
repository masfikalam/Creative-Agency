import React, {useState} from 'react';

const AddService = () => {
    const [newService, setNewService] = useState({});

    // handling blur
    function handleBlur(e) {
        const optService = {...newService};
        optService[e.target.name] = e.target.value;
        setNewService(optService)
    }
    
    // adding new service
    function addService(e) {
        e.preventDefault();
        
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                document.getElementById('serviceForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Service Added Successfully</b></h3>';
            }
        })
    }

    return (
        <section id="service" className="p-4">
            <div className="container">
                <h3>Add New Service</h3>
                <form id="serviceForm" onSubmit={addService}>
                    <input onBlur={handleBlur} type="text" name="name" placeholder="Service name" className="form-control my-3" required />
                    <textarea onBlur={handleBlur} name="description" placeholder="Service description" className="form-control my-3" cols="10" rows="5" required></textarea>
                    <label className="mr-3">Service Icon :</label>
                    <input type="file" name="photo" required />
                    <button className="btn btn-dark d-block mt-4 px-4">Add Service</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;
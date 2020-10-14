import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState({});

     // handling blur
     function handleBlur(e) {
        const optAdmin = {...newAdmin};
        optAdmin[e.target.name] = e.target.value;
        setNewAdmin(optAdmin)
    }
    
    // adding new service
    function makeAdmin(e) {
        e.preventDefault();
        
        fetch('https://immense-wildwood-27777.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                document.getElementById('newAdminForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>New Admin Added Successfully</b></h3>';
            }
        })
    }

    return (
        <section id="makeAdmin" className="p-4">
            <div className="container">
                <h3>Add New Admin</h3>
                <form id="newAdminForm" onSubmit={makeAdmin}>
                    <input onBlur={handleBlur} type="text" name="name" placeholder="Admin Name" className="form-control my-3" required />
                    <input onBlur={handleBlur} type="email" name="email" placeholder="Admin Email" className="form-control my-3" required />
                    <button className="btn btn-dark d-block mt-4 px-4">Make Admin</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;
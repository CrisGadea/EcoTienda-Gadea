import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const BuyerForm = ({checkProductos}) => {

    const [redirection, setRedirection] = useState(false);

   

    const handleSubmit = e => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        checkProductos(name, email, phone);
        
        setRedirection(true);
    }

    return redirection ? (
        <Redirect to="/" />
      ) : (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" id="name" required/>
                </label>
                <label>
                    Phone:
                    <input type="number" id="phone" required/>
                </label>
                <label>
                    Email:
                    <input type="email" id="email" required/>
                </label>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default BuyerForm;

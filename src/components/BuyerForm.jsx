import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { CartContext } from "../services/Context";

const BuyerForm = () => {

    const { buyer, setBuyer } = useContext(CartContext);
    const [redirection, setRedirection] = useState(false); 

    useEffect(() => {
        setBuyer()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        console.log("se hizo handle Submit, el nombre es: "+ name)

        setBuyer({
            name: name,
            phone: phone,
            email: email
        });

        console.log("El bayer es: " + buyer);

        setRedirection(true);
    }

    return redirection ? (
        <Redirect to="/order" />
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
                <input type="submit" value="Send" onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}

export default BuyerForm;

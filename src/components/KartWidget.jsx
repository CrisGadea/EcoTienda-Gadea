import React, { useState, useContext, useEffect } from "react";
import '../App.css';
import { CartContext } from "../services/Context";
import image from '../assets/carrito.jpg';
import { Nav } from 'react-bootstrap';


const KartWidget = () => {

    const { cartQuantity, cart, setQuantity } = useContext(CartContext);

    const [kart, setKart] = useState(cart);
    const [quantity, setQuantity2] = useState(cartQuantity);

    useEffect(() => {
        
        setKart()
        setQuantity()
        calculateQuantity()

    }, [])

    
    const calculateQuantity = () => {
        let aux = 0;
        kart.map( item => (
            aux += parseInt(item.quantity)
         ) );

        setQuantity(aux);

    }

        return(
            <Nav.Link href="#home">
                <a href="#home">{quantity}</a>
                <img src={image} width="40px" height="30px" alt="Kart"/>
            </Nav.Link>
        );
    
}

export default KartWidget;
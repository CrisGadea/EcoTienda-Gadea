import React, { useContext } from "react";
import '../../App.css';
import { Context } from "../../services/Context";
import image from '../../assets/carrito.jpg';
import { Link } from 'react-router-dom';


const KartWidget = () => {

    const { cartQuantity } = useContext(Context);

        return(
            <Link to="/cart">
                <p id="cartQ">{cartQuantity}</p>
                <img src={image} width="40px" height="30px" alt="Kart"/>
            </Link>
        );
    
}

export default KartWidget;
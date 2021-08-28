import React, { useContext } from "react";
import '../../App.css';
import { Context } from "../../services/Context";
import image from '../../assets/carrito.jpg';


const KartWidget = () => {

    const { conteo } = useContext(Context);

        return(
            <>
                <p id="cartQ">{conteo}</p>
                <img src={image} width="40px" height="30px" alt="Kart"/>
            </>
        );
    
}

export default KartWidget;
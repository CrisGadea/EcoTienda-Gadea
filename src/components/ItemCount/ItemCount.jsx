import React, { useState, useEffect } from "react";
import '../../App.css';

const ItemCount = ({setCount, stock}) => {
    const [cont, setCont] = useState(0);

    useEffect(() => {
        setCount(cont)
        // eslint-disable-next-line  
    }, [cont])

    const handleButtonp = () => {
        (cont<stock ? setCont(cont+1) : alert("No hay stock suficiente.\nActualmente hay " + stock + " disponibles."))
    };
    
    const handleButtonl = () => {
        (cont>0?setCont(cont-1) : alert("Por favor, seleccione una cantidad valida de productos."))
    };

    return(
        <div>
             <h2 type="number" id="count">{cont}</h2>
             <button onClick={handleButtonp}>+</button>
             <button onClick={handleButtonl}>-</button>
             
         </div> 
     );
};

export default ItemCount;
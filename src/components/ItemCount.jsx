import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../services/Context";
import '../App.css';

const ItemCount = ({inicial, stock, count, item}) => {

    const [stocks, setStocks] = useState(stock);
    const [cont, setCont] = useState(inicial);
    const [total, setTotal] = useState(0);
    const { addToCart, cart } = useContext(CartContext);

    //console.log(cart);

    useEffect(() => {
        //console.log(cart);
    }, [cart]);



    const addOn = () => {
        let button= document.getElementById("finishBuy");
        let navCount= document.getElementById("navCount");
        const cantidad = parseInt(document.getElementById("count").value);
        if (stocks >= cantidad){
            button.style.display="flex";
            navCount.style.display="none";
            setTotal(cont);
            addToCart({...item, quantity: cantidad});     
            alert("Producto/s agregado/s");
        }
    };
    const incrementar=()=>{
        let input = document.getElementById("count");
        let contador=cont;
        if (cont<stocks){
            setCont(++contador);
            input.value=cont;
        }
    };
    const decrementar=()=>{
        let input = document.getElementById("count");
        if (cont>1){
        setCont(cont -1 );    
        }
        input.value=cont;
        
    };

    return(
        <div>
             <input type="number" id="count" defaultValue={cont}></input>
             <button onClick={incrementar}>+</button>
             <button onClick={decrementar}>-</button>
             <button onClick={addOn}>Add to cart</button>
         </div> 
     );
};

export default ItemCount;
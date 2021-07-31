import React, { useState, Component} from "react";
import '../App.css';

const ItemCount = ({inicial, stock}) => {

    const [stocks, setStocks] = useState(stock);
    const [count, setCount] = useState(inicial);
    const [total, setTotal] = useState(0);



    const addOn = () => {
        let button= document.getElementById("finishBuy");
        let navCount= document.getElementById("navCount");
        const cantidad = parseInt(document.getElementById("count").value);
        if (stocks >= cantidad){
            button.style.display="flex";
            navCount.style.display="none";
            setTotal(count);          
            alert("Producto/s agregado/s");     
        }
    }
    const incrementar=()=>{
        console.log("pasa por el incrementar antes , el ini es " + count);
        let input = document.getElementById("count");
        let contador=count;
        if (count<stocks){
            // eslint-disable-next-line react/no-direct-mutation-state
            // eslint-disable-next-line no-const-assign
            setCount(++contador);
            input.value=count;
        }
    }
    const decrementar=()=>{
        let input = document.getElementById("count");
        if (count>1){
        // eslint-disable-next-line react/no-direct-mutation-state
        setCount(count -1 );    
        }
        input.value=count;
        console.log("pasa por el decermentar despues, el ini es " + count);
        
    }

    return(
        <div>
             <input type="number" id="count" defaultValue={count}></input>
             <button onClick={incrementar}>+</button>
             <button onClick={decrementar}>-</button>
             <button onClick={addOn}>Add to cart</button>
         </div> 
     );
}

export default ItemCount;
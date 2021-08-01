import React, { useState, useEffect} from "react";
import '../App.css';

const ItemCount = ({inicial, stock, setCount}) => {

    const [stocks, setStocks] = useState(stock);
    const [cont, setCont] = useState();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCount(cont)
    }, [cont])



    const addOn = () => {
        let button= document.getElementById("finishBuy");
        let navCount= document.getElementById("navCount");
        const cantidad = parseInt(document.getElementById("count").value);
        if (stocks >= cantidad){
            button.style.display="flex";
            navCount.style.display="none";
            setTotal(cont);          
            alert("Producto/s agregado/s");     
        }
    }
    const incrementar=()=>{
        console.log("pasa por el incrementar antes , el ini es " + cont);
        let input = document.getElementById("count");
        let contador=cont;
        if (cont<stocks){
            // eslint-disable-next-line react/no-direct-mutation-state
            // eslint-disable-next-line no-const-assign
            setCont(++contador);
            input.value=cont;
        }
    }
    const decrementar=()=>{
        let input = document.getElementById("count");
        if (cont>1){
        // eslint-disable-next-line react/no-direct-mutation-state
        setCont(cont -1 );    
        }
        input.value=cont;
        console.log("pasa por el decermentar despues, el ini es " + cont);
        
    }

    return(
        <div>
             <input type="number" id="count" defaultValue={cont}></input>
             <button onClick={incrementar}>+</button>
             <button onClick={decrementar}>-</button>
             <button onClick={addOn}>Add to cart</button>
         </div> 
     );
}

export default ItemCount;
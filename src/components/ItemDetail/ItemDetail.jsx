import React, { useState, useContext } from "react";
import '../../App.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { Context } from "../../services/Context";


const ItemDetail = ({item}) => {

    const [count, setCount] = useState();
    const { addToCart } = useContext(Context);

    const handleSend = () =>{
        addToCart({...item, quantity: count});
    }


    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.img} alt="carrito" className="Carrito" width="250px" height="250px"/>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <div id="navCount">
                <ItemCount stock={item.stock} setCount={setCount}/>
                <Link  to="/cart">
                    <button onClick={() => handleSend()}>Add to cart</button>
                </Link>
            </div>
            <Link to="/cart"><button className="hidden" id="finishBuy">Finish buy</button></Link> 
        </div>
    );
}

export default ItemDetail;
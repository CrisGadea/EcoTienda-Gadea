import '../App.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import {useContext, useState} from 'react';
import { Context } from '../services/Context';


const ItemDetail = ({item}) => {

    const {addToCart, removeFromCart, cart} = useContext(Context);
    const [count, setCount] = useState();

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt="carrito" className="Carrito"/>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <div id="navCount">
            <ItemCount stock={5} inicial={1} count={setCount}/>
            </div>
            <Link to="/cart"><button className="hidden" id="finishBuy">Finish buy</button></Link> 
        </div>
    );
}

export default ItemDetail;
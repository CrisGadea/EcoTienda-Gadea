import '../App.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';


const ItemDetail = ({item}) => {

    const [count, setCount] = useState();

    useEffect(() => {
        setCount()
    }, [])

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.img} alt="carrito" className="Carrito" width="250px" height="250px"/>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <div id="navCount">
                <ItemCount stock={5} inicial={1} count={setCount} item={item}/>
            </div>
            <Link to="/cart"><button className="hidden" id="finishBuy">Finish buy</button></Link> 
        </div>
    );
}

export default ItemDetail;
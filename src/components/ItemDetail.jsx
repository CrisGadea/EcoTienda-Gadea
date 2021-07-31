import '../App.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    // const onAdd = (quantity) => {

    // }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt="carrito" className="Carrito"/>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <div id="navCount">
            <ItemCount stock={5} inicial={1}/>
            </div>
            <Link to="/cart"><button className="hidden" id="finishBuy">Finish buy</button></Link>
            
        </div>
    );
}

export default ItemDetail;
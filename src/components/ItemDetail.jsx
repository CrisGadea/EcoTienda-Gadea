import '../App.css';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt="carrito" className="Carrito"/>
            <p>{item.category}</p>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            <ItemCount stock={5} inicial={1}/>
        </div>
    );
}

export default ItemDetail;
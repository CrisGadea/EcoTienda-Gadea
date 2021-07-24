import '../App.css';

const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt="carrito" className="Carrito"/>
            <h2>${item.price}</h2>
        </div>
    );
}

export default ItemDetail;
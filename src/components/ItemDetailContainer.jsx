import { useState } from "react";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({items}) => {

    const [itemsList, setItemList] = useState([]);

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                   resolve(items) 
                },3000
            )})
    }
    getItems()
    .then( (resolve) => setItemList(resolve));

    return (
        <div>
            <ul>
                {itemsList.map(item => (
                    <ItemDetail item={item}/>
                ))}
            </ul>
        </div>
    );

}

export default ItemDetailContainer;
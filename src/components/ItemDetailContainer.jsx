import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({items}) => {

    const [itemsList, setItemList] = useState([]);

    const { id } = useParams();

    let it={};

    console.log("el id del parametro es = " + id);

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

    itemsList.map(function(item) {
        if (item.id===id){
            it=item;
        }
        return it;
    });

   

    return (
        <div>
            <ItemDetail key={it.id} item={it}/>            
        </div>
    );

}

export default ItemDetailContainer;
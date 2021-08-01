import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import {db} from '../firebase/firebase';


const ItemDetailContainer = ({items}) => {

    const [itemsList, setItemList] = useState([]);

    const { id } = useParams();

    let it={};

    useEffect(() => {
        obtenerProductos()
    }, []);

    console.log("el id del parametro es = " + id);

    const obtenerProductos = () => {
        const products = db
            .collection("Products");
        products.get().then(((query) =>
            setItemList(
                query.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        ))
    }

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
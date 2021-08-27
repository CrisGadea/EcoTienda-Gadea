import '../../App.css';
import {Item} from '../Item/Item';
import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router';
import {db} from '../../firebase/firebase';

export function ItemList () {
    // eslint-disable-next-line
  const {id: idParams} = useParams();
  // eslint-disable-next-line
  const [itemsList, setItemList] = useState([]);

  useEffect(() => {
    obtenerProductos()
    // eslint-disable-next-line
  }, [idParams])

  const obtenerProductos = () => {
      let products;
    if (idParams !== undefined) {
        products = db
        .collection("Products")
        .where("categoryId", '==', idParams)
    } else{
        products = db
            .collection("Products");
    }
    products.get().then(((query) =>
        setItemList(
            query.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        )
    ));
}
  

    return (
        <div>
            <ul>
                {itemsList.map(item => (
                    <Item key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
}
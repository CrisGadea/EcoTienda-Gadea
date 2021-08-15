import { ItemList } from './ItemList';
import React, {useState, useEffect} from "react";
import {db} from '../firebase/firebase';
import '../App.css';



function ItemListContainer({saludo}) {

const [itemsList, setItemList] = useState([]);

useEffect(() => {
  obtenerProductos()
}, [])

const obtenerProductos = () => {
  const products = db
      .collection("Products");
  products.get().then(((query) =>
      setItemList(
          query.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
          })
      )
  ));
}

    return(
        <div>
            <h1>{saludo}</h1>
            {itemsList.length ? (
                <ItemList items={itemsList} />
                ) : (
                <h2>Cargando...</h2>
            )}
        </div>
    );
}

export default ItemListContainer;
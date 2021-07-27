import '../App.css';
import {Item} from './Item';
import React, { useState }  from 'react';

export function ItemList ({items}) {
  const [itemsList, setItemsList] = useState([]);
  const getItems = () => { return new Promise((resolve, reject) => {
    setTimeout(
        () => {
           resolve(items) 
        },2000
    )})};
  getItems()
  .then( (resolve) => setItemsList(resolve)
  )

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
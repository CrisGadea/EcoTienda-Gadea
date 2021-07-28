import '../App.css';
import {Item} from './Item';
import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router';

export function ItemList ({items}) {
  const [itemsList, setItemsList] = useState([]);
  const {id: idParams} = useParams();
  console.log(idParams);
  const getItems = () => { return new Promise((resolve, reject) => {
    setTimeout(
        () => {
           resolve(idParams ? items.filter(item => item.categoryId === idParams) : items) 
        },2000
    )})};

    useEffect(() => {
        getItems().then((resolve) => setItemsList(resolve))
    }, [idParams])
  

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
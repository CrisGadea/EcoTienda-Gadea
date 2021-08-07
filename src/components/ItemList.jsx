import '../App.css';
import {Item} from './Item';
import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router';

export function ItemList ({items}) {
  const [itemsList, setItemsList] = useState(items);
  const {id: idParams} = useParams();
  const getItems = () => { return idParams ? items.filter(item => item.categoryId === idParams) : items };

    useEffect(() => {
        getItems()
    }, [idParams]);
  

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
import React, {createContext, useState} from 'react';
export const Context = createContext();

export const DataProvider = ({children}) =>{
    const [cart, setCart] = useState([]);//va a ser un array de objetos

    const isntInCart = (receivedItem) => cart.filter(item => item.id === receivedItem.id).length === 0;
    const addToCart = (receivedItem) =>{
        if (isntInCart(receivedItem)){
            setCart([...cart, receivedItem])
        }else{
            alert("Ya se encuentra este producto en el carrito.")
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clear = () => setCart([]);

    return <Context.Provider value = {{cart, setCart, addToCart, removeFromCart, clear}}>
        {children}
    </Context.Provider>
}

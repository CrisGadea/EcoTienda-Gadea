import React, {createContext, useState, useEffect} from 'react';
export const Context = createContext();

export const DataProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal();
        // eslint-disable-next-line
    }, [cart, total]);

    const isntInCart = (receivedItem) => cart.filter(item => item.id === receivedItem.id).length === 0;
    const addToCart = (receivedItem) =>{
        console.log(receivedItem.quantity, cartQuantity);
        
        if (isntInCart(receivedItem)){
            setCart([...cart, receivedItem]);
            setCartQuantity(cartQuantity + receivedItem.quantity);
            
        }else{
            alert("Ya se encuentra este producto en el carrito.")
        }
    };

    const calculateTotal = () => {
        let acumulador=0
        cart.map(item => (
            acumulador += (parseInt(item.price) * parseInt(item.quantity))
        ));
        setTotal(acumulador);
    }

    const removeFromCart = (id) => {
        let cant = cart.find(prod => prod.id === id).quantity;
        setCart(cart.filter(prod => prod.id !== id));
        setCartQuantity(cartQuantity - cant);
    }

    const clear = () => {
        setCart([]);
        setCartQuantity(0);
    };

    return <Context.Provider value = {{cart, cartQuantity, total, setTotal, setCartQuantity, setCart, addToCart, removeFromCart, clear}}>
                {children}
           </Context.Provider>
}

export default Context;

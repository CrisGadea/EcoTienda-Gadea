import React, {createContext, useState, useEffect} from 'react';
export const Context = createContext();

export const DataProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [conteo, setConteo] = useState(0);

    useEffect(() => {
        calculateTotal();
        // eslint-disable-next-line
    }, [cart]);

    const isntInCart = (receivedItem) => cart.filter(item => item.id === receivedItem.id).length === 0;
    const addToCart = (receivedItem) =>{
        
        if (isntInCart(receivedItem)){
            let counti = conteo + receivedItem.quantity;
            setConteo(counti);
            setCart([...cart, receivedItem]);
            console.log(receivedItem.quantity, conteo);
            
        }else{
            alert("Ya se encuentra este producto en el carrito.")
        }
    };

    const calculateTotal = () => {
        let acumulador=0;
        cart.map(item => (
            acumulador += (parseInt(item.price) * parseInt(item.quantity))
        ));
        setTotal(acumulador);
    }

    const removeFromCart = (id) => {
        let cant = cart.find(prod => prod.id === id).quantity;
        setCart(cart.filter(prod => prod.id !== id));
        setConteo(conteo - cant);
    }

    const clear = () => {
        setCart([]);
        setConteo(0);
    };

    return <Context.Provider value = {{cart, conteo, total, setTotal, setCart, addToCart, removeFromCart, clear}}>
                {children}
           </Context.Provider>
}

export default Context;

import React, {createContext, useState, useEffect} from 'react';
export const CartContext = createContext();

export const DataProvider = ({children}) =>{
    const [cart, setCart] = useState([]);//va a ser un array de objetos
    const [cartQuantity, setQuantity] = useState(0);
    const [buyer, setBuyer] = useState({});

    useEffect(() => {
        setQuantity()
    }, [cart])

    const isntInCart = (receivedItem) => cart.filter(item => item.id === receivedItem.id).length === 0;
    const addToCart = (receivedItem) =>{
        console.log("el item es : " + receivedItem.name + "y la cantidad es " + receivedItem.quantity);
        let vari=0
        if (isntInCart(receivedItem)){
            setCart([...cart, receivedItem]);
            vari += parseInt(receivedItem.quantity);
            setQuantity(vari);
            
        }else{
            alert("Ya se encuentra este producto en el carrito.")
        }
    };

    const calculateQuantity = () => {
        let aux = 0;
        cart.map( item => (
            aux += parseInt(item.quantity)
         ) );

        setQuantity(aux);

    };

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clear = () => setCart([]);

    return <CartContext.Provider value = {{cart, cartQuantity, buyer, setBuyer, calculateQuantity, setQuantity, setCart, addToCart, removeFromCart, clear}}>
                {children}
           </CartContext.Provider>
}

export default CartContext;

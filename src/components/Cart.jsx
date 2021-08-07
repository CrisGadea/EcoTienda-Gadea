import React, {useContext, useState, useEffect} from 'react';
import CartContext from '../services/Context';

const Cart = () => {

    const { cart, removeFromCart, clear, setQuantity, cartQuantity } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [messagge, setMessagge] = useState("No hay productos agregados.")

    useEffect(() => {
        setTotal()
        calculateTotal();
    }, [total]);

    useEffect(() => {
        setQuantity(cartQuantity)
        calculateQuantity();
    }, [cartQuantity]);

    useEffect(() => {
        isEmpty()
    }, [])

    const isEmpty = () => {
        let oculto = document.querySelector(".oculto");
        if (cart.lenght > 0) {
            oculto.className = "hidden";
        } 
    }

    const calculateTotal = () => {
        let acumulador=0
        cart.map(item => (
            acumulador += (parseInt(item.price) * parseInt(item.quantity))
        ));
        setTotal(acumulador);
    }

    const calculateQuantity = () => {
        let aux = 0;
        cart.map( item => (
            aux += parseInt(item.quantity)
         ) );

        setQuantity(aux);
    }

    return (
        <div>
            <h1 className="oculto">{messagge}</h1>
            <ul>
            {cart.map(item => (
                <div classtype="mb-3">
                    <div classtype="pt-4 wish-list">
                        <div classtype="row mb-4">
                        <div classtype="col-md-5 col-lg-3 col-xl-3">
                            <div classtype="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                <img classtype="img-fluid w-100" src={item.img} alt="Sample"/>
                                
                            </div>
                        </div>
                        <div classtype="col-md-7 col-lg-9 col-xl-9">
                            <div>
                                <div classtype="d-flex justify-content-between">
                                    <div>
                                        <h5>{ item.name }</h5>
                                        <p classtype="mb-3 text-muted text-uppercase small">{ item.description }</p>
                                        <p classtype="mb-3 text-muted text-uppercase small">Cantidad: { item.quantity }</p>
                                    </div>        
                                </div>
                                <div classtype="d-flex justify-content-between align-items-center">
                                    <div>
                                        <button type="button" classtype="btn btn-primary btn-block" onClick={() => {removeFromCart(item.id)}}>Remove Item</button>
                                    </div>
                                    <p classtype="mb-0"><span><strong id="summary">${ item.price }</strong></span></p>
                                </div>
                            </div>
                        </div>
                        </div>
                
                        <hr classtype="mb-4"/>
                        
                    </div>
                </div>
            ))}
            </ul>
            <br/><br/>
            <p>Total: ${total}</p>
            <button type="button" classtype="btn btn-primary btn-block">Comprar</button>
            <br/>
            <button type="button" classtype="btn btn-primary btn-block" onClick={clear}>Vaciar Carrito</button>
        </div>
    );
}

export default Cart;

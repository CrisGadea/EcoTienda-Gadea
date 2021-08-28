import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import Context from '../../services/Context';

const Cart = () => {

    const { cart, removeFromCart, clear, total} = useContext(Context);

    return (
        <div>
            <ul>
            {cart.map(item => (
                <div classtype="mb-3" key={item.id}>
                    <div classtype="pt-4 wish-list">
                        <div classtype="row mb-4">
                        <div classtype="col-md-5 col-lg-3 col-xl-3">
                            <div classtype="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                <img classtype="img-fluid w-100" src={item.img} alt="Sample" height="250px" width="250px"/>
                                
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
                                        <button classtype="btn btn-primary btn-block" onClick={() => {removeFromCart(item.id)}}>Remove Item</button>
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
            <Link to="/form">
                <button type="button" classtype="btn btn-primary btn-block">Comprar</button>
            </Link>
            <br/><br/>
            <button type="button" classtype="btn btn-primary btn-block" onClick={clear}>Vaciar Carrito</button>
        </div>
    );
}

export default Cart;

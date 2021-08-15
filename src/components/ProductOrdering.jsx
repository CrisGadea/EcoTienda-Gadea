import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../services/Context";
import { db } from '../firebase/firebase';
import firebase from 'firebase/app';
import '@firebase/firestore';

const ProductOrdering = () => {

    const { cart } = useContext(CartContext);
    const { buyer } = useContext(CartContext);
    const [order, setOrder] = useState({});
    const [orderId, setOrderId] = useState("");
    const { name, phone, email } = buyer;
    const orders = db.collection("Orders");

    const generateOrder = () => {
        setOrder({
            buyer: { name, phone, email },
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cart.total
        });
        saveOrder();
    }

    const saveOrder = () => {
        orders.add(order).then(({id}) => {
            setOrderId(id);
        }).catch( err => {
            console.log(err);
        });
    }

    useEffect(() => {
        generateOrder();
    }, []);

    return (
        <div>
            <h1>Order has been created succesfully with ID: { orderId }</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default ProductOrdering;
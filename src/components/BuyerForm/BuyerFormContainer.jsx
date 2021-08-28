import React, {useContext} from 'react'
import {db} from '../../firebase/firebase'
import  BuyerForm  from './BuyerForm';
import { Context } from '../../services/Context';
import firebase from "firebase/app";

export const BuyerFormContainer = () => {
    const {total, cart, clear} = useContext(Context);

    const checkProductos = (nombre, email, celular) => {
        let productos = db.collection("Products").where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            cart.map((item) => item.id)
        );
        productos.get().then( (query) =>{
            const batch = db.batch();
            const sinStock = [];
            query.docs.forEach((doc) => {
                let comparar =  cart.find((element) => element.id === doc.id)
                if(doc.data().stock >= comparar.quantity){
                    batch.update(doc.ref, {
                        stock: doc.data().stock - comparar.quantity
                    });
                    
                }else{
                    sinStock.push(doc.data().nombre)
                }
            })
            
            if (!sinStock.length){
                crearOrder(nombre, email, celular);
                batch.commit().then(()=>{
                    clear();
                    //setConteo(0);
                })
            }else{
                alert("Sin stock!! \n Revisar la consola para mas detalle.")
            }
        })
        };

        const crearOrder = (nombre, email, celular) =>{
            const orderNueva= {
                nombre: nombre,
                email: email,
                celular: celular,
                ttl: total,
                productos: cart,
                fecha: new Date().toString(),
            }
        const ordersNuevas = db.collection('Orders')
        ordersNuevas
            .add(orderNueva)
            .then((res) => alert("Orden generada con exito! \n ID:  " + res.id))
            .catch((err) => console.log(err))
        }
    
    return (
        <section>
            <BuyerForm checkProductos={checkProductos}/>
        </section>
    )
}
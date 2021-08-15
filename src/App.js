import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {db} from './firebase/firebase';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from "./services/Context";
import BuyerForm from "./components/BuyerForm";
import ProductOrdering from "./components/ProductOrdering";

function App() {

  const [itemsList, setItemList] = useState([]);

  useEffect(() => {
    obtenerProductos()
  }, [])

  const obtenerProductos = () => {
    const products = db
        .collection("Products");
    products.get().then(((query) =>
        setItemList(
            query.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        )
    ));
}
  
  return (
  <DataProvider>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
            <ItemListContainer saludo="Home"/>
        </Route>
        <Route path="/category/:id">
            <ItemListContainer saludo="Categories"/>
        </Route>
        <Route path="/items/:id">         
            <ItemDetailContainer/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/form">
          <BuyerForm/>
        </Route>
        <Route exact path="/order">
          <ProductOrdering/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  </DataProvider>
  );
}

export default App;

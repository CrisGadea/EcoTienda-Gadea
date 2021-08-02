import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {db} from './firebase/firebase';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer saludo="Home" items={itemsList}/>
        </Route>
        <Route path="/category/:id">
          <ItemListContainer saludo="Categories" items={itemsList}/>
        </Route>
        <Route path="/items/:id">
          <ItemDetailContainer items={itemsList}/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

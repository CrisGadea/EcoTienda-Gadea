import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from "./services/Context";
import {BuyerFormContainer} from "./components/BuyerForm/BuyerFormContainer";

function App() {

  
  return (
  <DataProvider>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
            <ItemListContainer saludo="Home"/>
        </Route>
        <Route exact path="/category/:id">
            <ItemListContainer saludo="Categories"/>
        </Route>
        <Route exact path="/items/:id">         
            <ItemDetailContainer/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/form">
          <BuyerFormContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
      <Footer/>
  </DataProvider>
  );
}

export default App;

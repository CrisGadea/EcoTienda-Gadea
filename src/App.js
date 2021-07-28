import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './assets/kart.png';
import Notebook from './assets/notebook.jpg';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items] = useState(
    [
      {
        id: "1",
        name: "Cart",
        price: 14.54,
        imageUrl: Cart,
        description: "Description 1",
        categoryId: "1"
      },
      {
        id: "2",
        name: "Notebook",
        price: 24.54,
        imageUrl: Notebook,
        description: "Description 2",
        categoryId: "4"
      }
    ]
  );
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer saludo="Home" items={items}/>
        </Route>
        <Route path="/category/:id">
          <ItemListContainer saludo="Categories" items={items}/>
        </Route>
        <Route path="/items/:id">
          <ItemDetailContainer items={items}/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

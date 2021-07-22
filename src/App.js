import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Cart from './assets/kart.png';

function App() {
  const [items] = useState(
    [
      {
        id: "123",
        name: "title",
        price: 14.54,
        imageUrl: Cart
      },
      {
        id: "1234",
        name: "title2",
        price: 24.54,
        imageUrl: Cart
      }
    ]
  )
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Hello" items={items}/>
      <ItemCount stock={5} inicial={1}/>
    </div>
  );
}

export default App;

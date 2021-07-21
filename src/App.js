import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Hello"/>
      <ItemCount stock={5} inicial={1}/>
    </div>
  );
}

export default App;

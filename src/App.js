import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer saludo="Hello"/>
    </div>
  );
}

export default App;

import { ItemList } from './ItemList';
import '../App.css';

function ItemListContainer({saludo,items}) {
    return(
        <div>
            <h1>{saludo}</h1>
            <ItemList items={ items }/>
        </div>
    );
}

export default ItemListContainer;
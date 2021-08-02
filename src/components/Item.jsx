import '../App.css';
import { NavLink } from 'react-router-dom';

export function Item({ item }) {
    return (
        <div>
            <div className="card">
                <div className="px-2 pt-2 position-relative">
                    <NavLink to={`/items/${item.id}`}>
                        <img alt="imagen" src={item.img} className="card" height="225 rem"/>
                    </NavLink>
                </div>
                <div className="card-body">
                    <h3 className="text-base text-muted font-semibold mb-3">{item.name}</h3>
                    <span className="d-block h3 mb-0">{item.price}</span>
                </div>
            </div>
        </div>
    );
}

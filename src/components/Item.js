import '../App.css';

export function Item({ item }) {
    return (
        <div>
            <div className="card">
                <div className="px-2 pt-2 position-relative">
                    <img alt="carro" src={item.imageUrl} className="card-img" height="100px"/>
                    <button className="btn btn-square btn-white rounded-circle position-absolute top-6 end-6 transform scale-105-hover">
                        <i className="bi bi-basket"/>
                    </button>
                </div>
                <div className="card-body">
                    <h3 className="text-base text-muted font-semibold mb-3">{item.name}</h3>
                    <span className="d-block h3 mb-0">{item.price}</span>
                </div>
            </div>
        </div>
    );
}

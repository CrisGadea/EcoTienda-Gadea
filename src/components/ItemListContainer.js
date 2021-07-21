import React, { Component } from "react";
import '../App.css';
//import { Navbar,  NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

class ItemListContainer extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.saludo}</h1>
            </div>
        );
    }
}

export default ItemListContainer;
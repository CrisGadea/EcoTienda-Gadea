import React, { Component } from "react";
import '../App.css';
import { Nav } from 'react-bootstrap';


class KartWidget extends Component {
    render() {
        return(
            <Nav.Link href="#home">
                <img src={this.props.img} width="40px" height="30px" alt="Kart"/>
            </Nav.Link>
        );
    }
}

export default KartWidget;
import React, { Component } from "react";
import '../App.css';
import KartWidget from './KartWidget';
import image from '../assets/carrito.jpg';
import { Link } from "react-router-dom";
import { Navbar,  NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavBarC extends Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
            <Link to="/">
                <Navbar.Brand href="#home">EcoHouse</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Products</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Foods</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Drinks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Clothes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Technology</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.5">House</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Favorities</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.6">Info</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.7">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    <KartWidget img={image}/>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
      </Navbar>
      );
    }
  }
  
  export default NavBarC;
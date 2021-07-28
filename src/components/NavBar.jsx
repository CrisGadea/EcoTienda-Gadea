import React, { Component } from "react";
import '../App.css';
import KartWidget from './KartWidget';
import image from '../assets/carrito.jpg';
import Eco from '../assets/ecohouse.jpg';
import { Link } from "react-router-dom";
import { Navbar,  NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavBarC extends Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
            <Link to="/">
                <Navbar.Brand href="/"><img src={Eco} alt="eco" width="100px"/></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        
                        <Link to="/category/1">Foods</Link>
                        <Link to="/category/2">Drinks</Link>
                        <Link to="/category/3">Clothes</Link>
                        <Link to="/category/4">Technology</Link>
                        <NavDropdown.Divider />
                        <Link to="/category/5">House</Link>
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
import { DataProvider } from "../services/Context";
import '../App.css';
import KartWidget from './KartWidget';
import Eco from '../assets/ecohouse.jpg';
import { Link } from "react-router-dom";
import { Navbar,  NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

const NavBarC = () => {
    
      return (
        <DataProvider>
            <Navbar bg="light" expand="lg">
                <Link to="/">
                    <Navbar.Brand href="/"><img src={Eco} alt="eco" width="100px"/></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/category/1">Foods</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/2">Drinks</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/3">Clothes</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/4">Technology</Link></NavDropdown.Item>                        
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/category/5">House</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Favorities</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1">Info</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/2">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/cart">
                            <KartWidget/>
                        </Link>                   
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
        </Navbar>
      </DataProvider>
      );
    }
  
  export default NavBarC;
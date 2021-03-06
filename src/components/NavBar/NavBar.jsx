import '../../App.css';
import KartWidget from '../Cart/KartWidget';
import Eco from '../../assets/ecohouse.jpg';
import { Link } from "react-router-dom";
import { Navbar,  NavDropdown, Nav, Form} from 'react-bootstrap';

const NavBarC = () => {
    
      return (
        
            <Navbar bg="light" expand="lg">
                <Link to="/">
                    <Navbar.Brand><img src={Eco} alt="eco" width="100px"/></Navbar.Brand>
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
                        <Nav.Link>Favorities</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item>Info</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    <Form inline>
                        <Link to="/cart">
                            <KartWidget/>
                        </Link>  
                    </Form>
                </Navbar.Collapse>
        </Navbar>
      
      );
    }
  
  export default NavBarC;
import React,{useState} from "react";
import './Header.css';
import Logo from '../../logo.svg';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,Container,Button} from 'reactstrap';


    import {Link } from "react-router-dom";
    // import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
    // import LanguageIcon from '@material-ui/icons/Language';

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
          <Navbar light expand="md" className="navbar-fixed-top">
          <Container fluid>
            <div className="d-flex justify-content align-center ft-size">
              <Link to="/home"><img src={Logo} className='logo' alt="Logo" /></Link>
              
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <div className="right">
              <NavItem>
                <Link to="/pricing" className="nav-link white book">Pricing</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link white book">Contact</Link>
              </NavItem>
              <NavItem>
                <Link to="/training" className="nav-link white book">Training</Link>
              </NavItem>
              {/* <NavItem>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Resources
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
              </NavItem> */}
              <NavItem>
                <Link to="/" className="nav-link white book">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup" className="nav-link white book">Signup</Link>
              </NavItem>
              <NavItem>
                <Button className="btn-blue">Get Started</Button>
              </NavItem>
              </div>
                
              </Nav>
            </Collapse>
            </div>
            </Container>
          </Navbar>
        </div>
      );
    }

export default Header;
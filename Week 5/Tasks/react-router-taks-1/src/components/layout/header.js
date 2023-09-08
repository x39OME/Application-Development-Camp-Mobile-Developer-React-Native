import { NavLink } from 'react-router-dom';
import './header.css'; 
import {Nav , Navbar , Container} from 'react-bootstrap'

function MainHeader(){
    return(
        <>
    <Navbar expand="md" bg="black" data-bs-theme="black">
      <Container>
        <Navbar.Brand href="#home">React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" style={({isActive})=>{ 
              return {backgroundColor:(isActive)?"white":""}
            }}> Home </NavLink>
            <NavLink to="/about" className="nav-link" style={({isActive})=>{ 
              return {backgroundColor:(isActive)?"white":""}
            }}> About Us </NavLink>
              <NavLink to="/contact" className="nav-link" style={({isActive})=>{ 
              return {backgroundColor:(isActive)?"white":""}
            }}> Contact Us </NavLink>
            <NavLink to="/soon" className="nav-link" style={({isActive})=>{ 
              return {backgroundColor:(isActive)?"white":""}
            }}> Soon </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default MainHeader;
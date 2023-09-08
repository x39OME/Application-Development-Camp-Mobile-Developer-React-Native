import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useSelector } from 'react-redux';

export default function MainNavBar() {
   const l1= useSelector((state)=>state.lang.lang);
  return (
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className="nav-tap" style={({isActive})=>{
            return {color:isActive?"black":"gray"}
          }} to="/">Home</NavLink>
          <NavLink className="nav-tap" style={({isActive})=>{
            return {color:isActive?"black":"gray"}
          }} to="/about">About</NavLink>
          <NavLink className="nav-tap" style={({isActive})=>{
            return {color:isActive?"black":"gray"}
          }} to="/contact">Contact</NavLink>
          <Nav.Link> Lang </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

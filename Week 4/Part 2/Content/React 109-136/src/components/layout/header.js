import './header.css';
import Home from '../home/home';
import Link from './../links/links'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
function MainHeader(props){
  console.log(props);
  return (
    <>
    <header className='main-header'>
      <div className='main-logo'>{props.number}</div>
      <nav className='main-nav'>
        <Link name='Home'/>
        <Link name='Profile'/>
        <Link name='About'/>
        <Link name='Setting'/>
      </nav>

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
  );
}

export default MainHeader;
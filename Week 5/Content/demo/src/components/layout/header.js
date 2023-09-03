import './header.css'; 
import {Nav , Navbar , Container} from 'react-bootstrap'

function MainHeader(props){
    console.log(props);
    return(
        <>
     <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    );
}

export default MainHeader;
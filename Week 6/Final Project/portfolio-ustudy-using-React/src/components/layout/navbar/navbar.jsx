import './navbar.css'; 
import {Nav , Navbar , Container, Image} from 'react-bootstrap'

function MainNavbar(){
  return <>
        <header className="l-header">
            <Navbar expand="lg" className="navbar bg-body-tertiary">
                <Container className='d-flex align-items-center justify-content-between'>
                    <Navbar.Brand href="#home" className='d-flex align-items-center gap-3'>
                        <Image src="imgs/code-slash.svg" className='logo' fluid />
                        <h2>Essam</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#work">Gallery</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
  </>
}

export default MainNavbar;
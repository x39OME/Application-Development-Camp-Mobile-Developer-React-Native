import './home.css';
import { Nav, Image, Button } from 'react-bootstrap';

function Home() {
  return <>
        <div className="l-div">
            <div className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi, I'am <span className="home__title-color">Essam</span> Full Stack Web</h1>
                    <Button style={{backgroundColor:'#c7a17a', border:'none'}} className='button text-light'>Contact</Button>
                    <div className="home__social">
                        <Nav.Link href="#" className="home__social-icon">
                            <Image style={{width:"25px",height:"25px"}} src="imgs/github.svg" fluid />
                        </Nav.Link>
                        <Nav.Link href="#" className="home__social-icon">
                            <Image style={{width:"25px",height:"25px"}} src="imgs/linkedin.svg" fluid />
                        </Nav.Link>
                        <Nav.Link href="#" className="home__social-icon">
                            <Image style={{width:"25px",height:"25px"}} src="imgs/file-code.svg" fluid />
                        </Nav.Link>
                    </div>
                </div>
                <div className="home__img">
                    <Image src="imgs/perfil.png" fluid />
                </div>
            </div>

        </div>
  </>
}

export default Home;
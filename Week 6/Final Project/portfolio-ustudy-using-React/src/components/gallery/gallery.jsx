import './gallery.css';
import { Nav, Image } from 'react-bootstrap';

function Gallery() {
  return <>
      <div className="work div" id="work">
        <div className="title">
          <p>Gallery</p>
          <h1 className="special">My Works</h1>
        </div>
          <div className="work__container bd-grid">
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work1.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work2.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work3.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work4.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work5.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work6.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work1.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work2.jpg" fluid />
              </Nav.Link>
              <Nav.Link href="#" className="work__img">
                <Image src="imgs/work3.jpg" fluid />
              </Nav.Link>
          </div>
      </div>
  </>
}



export default Gallery;
import './projects.css';
import { Nav, Image } from 'react-bootstrap';

function Projects() {
  return <>
    <div id="projects" className="projects">
      <div className="container opacity">
        <div className="title">
          <p>Frontend & Backend</p>
          <h1 className="special">My Projects</h1>
        </div>
        <div className="my-project">
          <div className="box">
            <Image src="imgs/work7.avif" fluid />
            <div className="content">
              <h3>Lorem</h3>
              <p>Practical application to vanilla Javascript</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla Javascript</li>
                <li>Responsive</li>
                <li>React Js</li>
              </ul>
            </div>
            <div className="info">
            <Nav.Link href="https://x39ome.github.io/" className="work__img">
              <Image style={{width:22, height:22}} src="imgs/github.svg" fluid /> Live Demo
            </Nav.Link>
            </div>
          </div>
          <div className="box">
            <Image src="imgs/work8.avif" fluid />
            <div className="content">
              <h3>Lorem</h3>
              <p>Practical application to vanilla Javascript</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla Javascript</li>
                <li>Responsive</li>
                <li>React Js</li>
              </ul>
            </div>
            <div className="info">
            <Nav.Link href="https://x39ome.github.io/" className="work__img">
              <Image style={{width:22, height:22}} src="imgs/github.svg" fluid /> Live Demo
            </Nav.Link>
            </div>
          </div>
          <div className="box">
            <Image src="imgs/work10.avif" fluid />
            <div className="content">
              <h3>Lorem</h3>
              <p>Practical application to vanilla Javascript</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla Javascript</li>
                <li>Responsive</li>
                <li>React Js</li>
              </ul>
            </div>
            <div className="info">
            <Nav.Link href="https://x39ome.github.io/" className="work__img">
              <Image style={{width:22, height:22}} src="imgs/github.svg" fluid /> Live Demo
            </Nav.Link>
            </div>
          </div>
          <div className="box">
            <Image src="imgs/work10.avif" fluid />
            <div className="content">
              <h3>Lorem</h3>
              <p>Practical application to vanilla Javascript</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla Javascript</li>
                <li>Responsive</li>
                <li>React Js</li>
              </ul>
            </div>
            <div className="info">
            <Nav.Link href="https://x39ome.github.io/" className="work__img">
              <Image style={{width:22, height:22}} src="imgs/github.svg" fluid /> Live Demo
            </Nav.Link>
            </div>
          </div>
          <div className="box">
            <Image src="imgs/work11.avif" fluid />
            <div className="content">
              <h3>Lorem</h3>
              <p>Practical application to vanilla Javascript</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla Javascript</li>
                <li>Responsive</li>
                <li>React Js</li>
              </ul>
            </div>
            <div className="info">
            <Nav.Link href="https://x39ome.github.io/" className="work__img">
              <Image style={{width:22, height:22}} src="imgs/github.svg" fluid /> Live Demo
            </Nav.Link>
            </div>
          </div>
          <div className="box">
            <Image src="imgs/work12.avif" fluid />
            <div className="content">
              <h3>Lorem</h3>
              <p>Practical application to vanilla Javascript</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla Javascript</li>
                <li>Responsive</li>
                <li>React Js</li>
              </ul>
            </div>
            <div className="info">
            <Nav.Link href="https://x39ome.github.io/" className="work__img">
              <Image style={{width:22, height:22}} src="imgs/github.svg" fluid /> Live Demo
            </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}


export default Projects;
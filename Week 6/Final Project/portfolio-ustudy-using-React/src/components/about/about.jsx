import './about.css';
import { Image, Button } from 'react-bootstrap';

function About() {
  return <>
    <div className="about" id="about">
      <div className="container">
        <div className="title">
          <p>Intro</p>
          <h1 className="special">About Me</h1>
        </div>
        <div className="about-me">
        <Image src="imgs/index.png" fluid />
          <div className="about_info">
            <div className="about_boxes">
              <div className="about_box">
                <Image src="imgs/completed.png" style={{width:24, height:24}} fluid />
                <div className="text">Completed</div>
                <span className="subtitle">+ 10 Projects</span>
              </div>
              <div className="about_box">
                <Image src="imgs/experiment.png" style={{width:24, height:24}} fluid />
                <div className="text">Experience</div>
                <span className="subtitle">2 Years</span>
              </div>
              <div className="about_box">
                <Image src="imgs/diploma.png" style={{width:24, height:24}} fluid />
                <div className="text">Certificates</div>
                <span className="subtitle"><a href="https://github.com/x39OME/My-Certificates">+ 20</a></span>
              </div>
            </div>
            <div className="about-des">
              My name is Essam, i'm from Jeddah
              I have good experience in Programming,
              i'm Full Stack Web Developer (Laravel) & Mobile Applications Developer (React Native)
              I created more than + 10 Projects
              
            </div>
            <div className="button d-flex gap-2">
              <Button style={{backgroundColor:'#c7a17a', border:'none'}} className='button text-light'>Contact Me</Button>
              <Button style={{backgroundColor:'#c7a17a', border:'none'}} className='button text-light'>My Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </>
}



export default About;
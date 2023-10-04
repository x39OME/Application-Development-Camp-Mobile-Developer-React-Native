import './skills.css';
import { Image } from 'react-bootstrap';

function Skills() {
  return <>
            <div className="skills div" id="skills">
                <div className="title">
                    <p>My Abilities</p>
                    <h1 className="special">My Skills</h1>
                </div>
                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <Image src="imgs/frontend.png" style={{width:24, height:24}} fluid />
                                <span className="skills__name">Front-End</span>
                            </div>
                            <div className="skills__bar skills__front">

                            </div>
                            <div>
                                <span className="skills__percentage">97%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <Image src="imgs/backend.png" style={{width:24, height:24}} fluid />
                                <span className="skills__name">Back-End</span>
                            </div>
                            <div className="skills__bar skills__back">
                            </div>
                            <div>
                                <span className="skills__percentage">83%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <Image src="imgs/smartphone.png" style={{width:24, height:24}} fluid />
                                <span className="skills__name">Mobile</span>
                            </div>
                            <div className="skills__bar skills__mobile">
                            </div>
                            <div>
                                <span className="skills__percentage">71%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <Image src="imgs/developer.png" style={{width:24, height:24}} fluid />
                                <span className="skills__name">Server</span>
                            </div>
                            <div className="skills__bar skills__github">
                            </div>
                            <div>
                                <span className="skills__percentage">88%</span>
                            </div>
                        </div>
                    </div>
                    <div>              
                    <Image src="imgs/work1.jpg" fluid />
                    </div>
                </div>
            </div>
  </>
}



export default Skills;
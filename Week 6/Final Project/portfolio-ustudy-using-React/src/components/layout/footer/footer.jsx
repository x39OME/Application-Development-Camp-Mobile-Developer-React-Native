import './footer.css';
import { Form, Button, Image, Nav } from 'react-bootstrap';

function MainFooter(){
  return <>
    <div className="footer">
      <div className="container">
        <div className="opening">
          <h3>Opening Hours</h3>
          <div className="day">
            <span> Saturday *</span>
            <span className="line-span"></span>
            <span className="time varColor"> Closed </span>
          </div>
          <div className="day">
            <span>Sunday</span>
            <span className="line-span"></span>
            <span className="time"> 9:00 - 22:00 </span>
          </div>
          <div className="day">
            <span>Monday</span>
            <span className="line-span"></span>
            <span className="time"> 9:00 - 22:00 </span>
          </div>
          <div className="day">
            <span> Tuesday </span>
            <span className="line-span"></span>
            <span className="time"> 9:00 - 22:00 </span>
          </div>
          <div className="day">
            <span> Wednes</span>
            <span className="line-span"></span>
            <span className="time"> 12:00 - 01:00 </span>
          </div>
          <div className="day">
            <span> Thurs</span>
            <span className="line-span"></span>
            <span className="time"> 12:00 - 01:00 </span>
          </div>
          <div className="day">
            <span> Friday  *</span>
            <span className="line-span"></span>
            <span className="time"> 9:00 - 1:00 </span>
          </div>
        </div>
        <div className="posts">
          <h3>Latest posts</h3>
          <div className="post">
            <div className="title-post">Expand Your Mind, Change Everything</div>
            <span className="date">19.07.2023</span>
          </div>
          <div className="post">
            <div className="title-post">Places to get lost</div>
            <span className="date">06.03.2023</span>
          </div>
          <div className="post">
            <div className="title-post">Lewis Howes</div>
            <span className="date">23.09.2023</span>
          </div>
          <div className="post">
            <div className="title-post">Elevate Your Expectations</div>
            <span className="date">31.12.2022</span>
          </div>
        </div>
        <div className="contact">
          <h3>Contact My Team</h3>
          <div className="contact-us">
            <a href="mailto:Essam@qodeinteractive.com" className="email">Essam@qodeinteractive.com</a>
            <a href="tel:+9660000000">+966 000 0000</a>
            <div>Mecca, Jeddah 25276</div>
            <div>Riyadh</div>
          </div>
          <div className="last-post">
            <h3>The Last Standard Post</h3>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='input-footer' type="email" placeholder="Your E-mail" />
            </Form.Group>
            <Button style={{backgroundColor:'#c7a17a', border:'none', position:'absolute', top:50, right:0, borderRadius:0}}
            type="submit" className='button text-light'>➤</Button>
          </div>
        </div>
        <div className="other-locations">
          <div className="other">
            <h3>other locations</h3>
            <h5>barista coffee shop</h5>
            <p>2542 Riyadh</p>
            <p>2524 Jeddah</p>
          </div>
          <div className="other-2">
            <h5>barista cafe</h5>
            <p>2511 Riyadh</p>
            <p>2524 Jeddah</p>
          </div>
        </div>
      </div>
    </div>
    <div className="social">
      <div className="container">
        <div className="made"> Made by <span>x39OME</span> with <span>♥</span> Udstudy </div>
        <div className="icons">
            <Nav.Link href="#" className="home__social-icon">
              <Image  className='icon-social' src="imgs/instagram.png" fluid />
            </Nav.Link>
            <Nav.Link href="#" className="home__social-icon">
              <Image  className='icon-social' src="imgs/twitterx.png" fluid />
            </Nav.Link>
            <Nav.Link href="#" className="home__social-icon">
              <Image  className='icon-social' src="imgs/tiktok.png" fluid />
            </Nav.Link>
            <Nav.Link href="#" className="home__social-icon">
              <Image  className='icon-social' src="imgs/snapchat.png" fluid />
            </Nav.Link>
            <Nav.Link href="#" className="home__social-icon">
              <Image  className='icon-social' src="imgs/s-linkedin.png" fluid />
            </Nav.Link>
        </div>
        <div className="copyright"><span>2023</span> All Rights Reserved.</div>
      </div>
    </div>
  </>
}

export default MainFooter;

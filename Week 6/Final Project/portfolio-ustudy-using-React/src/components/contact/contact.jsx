import './contact.css';
import { Image, Form, Nav } from 'react-bootstrap';

function Contact() {
  return <>
    <div className="contact" id="contact">
      <div className="container">
        <div className="title">
          <p>Message</p>
          <h1 className="special">Contact Me</h1>
        </div>
        <div className="contact-me">
          <div className="talk-me">
            <h3>Talk To Me</h3>
            <div className="contact-info">
              <div className="email">
                <Image src="imgs/mail-svgrepo-com.svg" fluid />
                <p>Email</p>
                <span>Essamabdullah@outlook.sa</span>
                <Nav.Link href="mailto:essamabdullah@outlook.sa">Send Me</Nav.Link>
              </div>
              <div className="whatsapp">
                <Image src="imgs/whatsapp-svgrepo-com.svg" fluid />
                <p>Whatsapp</p>
                <span>+966-50-525-7849</span>
                <Nav.Link href="http://wa.me/+966505257849">Send Me</Nav.Link>
              </div>
              <div className="linkedin">
                <Image src="imgs/linkedin-svgrepo-com.svg" fluid />
                <p>Linkedin</p>
                <span>@essam</span>
                <Nav.Link href="https://www.linkedin.com/in/essam-abdullah-962259253/">Send Me</Nav.Link>
              </div>
            </div>
          </div>
          <div className="text-me">
            <h3>Write me anything you need </h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-label'>Your Name</Form.Label>
                        <Form.Control className='input-form' type="email" placeholder="Write Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-label'>Your Email</Form.Label>
                        <Form.Control className='input-form' type="email" placeholder="Write Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='text-label'>Your Message</Form.Label>
                        <Form.Control className='textarea' as="textarea" rows={3} />
                    </Form.Group>
                </Form>
          </div>
        </div>
      </div>
    </div>
  </>
}



export default Contact;
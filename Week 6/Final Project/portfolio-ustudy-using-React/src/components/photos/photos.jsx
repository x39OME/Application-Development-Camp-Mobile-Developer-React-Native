import './photos.css';
import { Image } from 'react-bootstrap';

function Photos() {
  return <>

   <div className="photos">
    <div className="container">
      <div className="layout">
        <div className="woman">
          <Image src="imgs/work14.avif" style={{height:375}} fluid />
        </div>
        <div className="work">
          <Image src="imgs/work13.avif" style={{height:375}} fluid />
        </div>
        <div className="man">
          <Image src="imgs/work15.avif" fluid />
        </div>
        <div className="job">
          <Image src="imgs/work16.avif" fluid />
        </div>
      </div>
    </div>
  </div>
  </>
}



export default Photos;
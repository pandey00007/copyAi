import React from 'react';
import { Container, Ratio, Row} from 'react-bootstrap';
import './Training.css';
import Ebay from '../Img/ebay.png';
import Nestle from '../Img/nestle.png';
import Ogly from '../Img/ogly.png';
import Zoho from '../Img/zoho.png';

function Training() {
  

  return (
    <>
    <div className='wrapper'>
        <Container>
            <h3>Weekly Live Demos</h3>
            <p><b>Learn how to use Copy.ai every week at 9am Pacific / 11am Central / 12pm Eastern</b></p>
            <div style={{ width: '100%', height: 'auto' }}>
            <Ratio aspectRatio="16x9">
                <embed type="image/svg+xml" src="https://www.youtube.com/embed/HBx1nuCs8EI" />
            </Ratio>
            </div>
        </Container>
        <Container>
            <Row>
              <div className='mt-32'>
              <h5 className='head-content3'>
              Join the 500,000+ marketers using CopyAI
              </h5>
              </div>
              <div className="d-flex justify-content align-center mt-50 mb-5">
                <div className="a1-img">
                <img src={Ebay} className='ebay' alt={Ebay} />
                </div>
                <div className="a1-img">
                <img src={Nestle} className='nestle' alt={Nestle} />
                </div>
                <div className="a1-img">
                <img src={Ogly} className='ogly' alt={Ogly} />
                </div>
                <div className="a1-img">
                <img src={Zoho} className='zoho' alt={Zoho} />
                </div>
              </div>
              
            </Row>
          </Container>
    </div>
    
      
    </>
  );
}

export default Training;

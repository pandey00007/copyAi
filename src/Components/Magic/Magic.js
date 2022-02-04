import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Magic.css';
import K1 from '../Img/k1.jpeg';
import K2 from '../Img/k2.jpeg';
import K3 from '../Img/k3.jpeg';




function Magic() {
  return (
    <>
    <div className='magic-section'>
    <Container>
             <Row>
             
                 <Col md={5} xs={12}>
                   
                    <h1 className='head-content6'>Magic in action</h1>                    
                    <div className='para-section1 mt-3'>
                    <p>Built on top of the world’s most advanced AI<br /> 
                    language model, CopyAI is helping<br />
                     thousands of people turbo-charge their
                     <br /> creativity — and blowing minds in the <br />
                     process.
                    </p>
                    </div>
                    <div className='para-section1 mt-3'>
                    <p>Let some members of the CopyAI community <br />
                    give you a glimpse of the future.
                    </p>
                    </div>
                   
                 </Col>
                 <Col md={7} xs={12}>
                   <Container>
                     <div className='d-flex justify-content align-center'>
                     <div className='magic-img'>
                     <img src={K1} className='k1' alt={K1} />
                     </div>
                     <div className='magic-img nb'>
                     <img src={K2} className='k1' alt={K1} />
                     </div>
                     <div className='magic-img'>
                     <img src={K3} className='k1' alt={K1} />
                     </div>
                     </div>
                   </Container>
                  
                 </Col>
                
             </Row>
          </Container>
    </div>
    </>
  );
}

export default Magic;
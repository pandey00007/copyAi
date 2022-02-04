import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ListGroup} from 'react-bootstrap';

import './Cardsection.css';
import Copyicon from '../Img/copy-icon.svg';
import Copyicon2 from '../Img/copy-icon2.svg';
import Copyicon3 from '../Img/copy-icon3.svg';
import Copyicon4 from '../Img/copy-icon4.svg';
import Copyicon5 from '../Img/copy-icon5.svg';
import Copyicon6 from '../Img/copy-icon6.svg';






function Card() {
    return (
      <>
      <div className='card-section'>      
         <h2 className='card-content5'>What can you create with CopyAI?</h2> 
         <Container>
           <Row>
           <Col md={4} xs={12}>
             <div className='card-box'>
             <img src={Copyicon} className='copy' alt="copy"/>
             <h3 className='ft-10'>Digital Ad Copy</h3>
             <ListGroup>
              <ListGroup.Item>- Facebook Ads</ListGroup.Item>
              <ListGroup.Item>- Google Ads</ListGroup.Item>
              <ListGroup.Item>- Linkedin Ads</ListGroup.Item>              
            </ListGroup>
             </div>
             </Col>
             <Col md={4} xs={12}>
             <div className='card-box'>
             <img src={Copyicon2} className='copy' alt="copy"/>
             <h3 className='ft-10'>Social Media Content</h3>
             <ListGroup>
              <ListGroup.Item>- Facebook Ads</ListGroup.Item>
              <ListGroup.Item>- Google Ads</ListGroup.Item>
              <ListGroup.Item>- Linkedin Ads</ListGroup.Item>              
            </ListGroup>
               </div>
             </Col>
             <Col md={4} xs={12}>
             <div className='card-box'>
             <img src={Copyicon3} className='copy' alt="copy"/>
             <h3 className='ft-10'>Website Copy</h3>
             <ListGroup>
              <ListGroup.Item>- Facebook Ads</ListGroup.Item>
              <ListGroup.Item>- Google Ads</ListGroup.Item>
              <ListGroup.Item>- Linkedin Ads</ListGroup.Item>              
            </ListGroup>
               </div>
             </Col>
             <Col md={4} xs={12}>
             <div className='card-box'>
             <img src={Copyicon4} className='copy' alt="copy"/>
             <h3 className='ft-10'>eCommerce Copy</h3>
             <ListGroup>
              <ListGroup.Item>- Facebook Ads</ListGroup.Item>
              <ListGroup.Item>- Google Ads</ListGroup.Item>
              <ListGroup.Item>- Linkedin Ads</ListGroup.Item>              
            </ListGroup>
             </div>
             </Col>
             <Col md={4} xs={12}>
             <div className='card-box'>
             <img src={Copyicon5} className='copy' alt="copy"/>
             <h3 className='ft-10'>Blog Content</h3>
             <ListGroup>
              <ListGroup.Item>- Facebook Ads</ListGroup.Item>
              <ListGroup.Item>- Google Ads</ListGroup.Item>
              <ListGroup.Item>- Linkedin Ads</ListGroup.Item>              
            </ListGroup>
               </div>
             </Col>
             <Col md={4} xs={12}>
             <div className='card-box'>
             <img src={Copyicon6} className='copy' alt="copy"/>
             <h3 className='ft-10'>Sales Copy</h3>
             <ListGroup>
              <ListGroup.Item>- Facebook Ads</ListGroup.Item>
              <ListGroup.Item>- Google Ads</ListGroup.Item>
              <ListGroup.Item>- Linkedin Ads</ListGroup.Item>              
            </ListGroup>
               </div>
             </Col>
           </Row>
           </Container>     
      </div>
      </>
    );
  }
  
  export default Card;

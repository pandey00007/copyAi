import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import K4 from '../Img/k4.jpeg';
import {Link } from "react-router-dom";

import './Profile.css';



function Profile() {
  return (
    <>
     <div className='profile-section'>
    <Container>
             <Row>             
                 <Col md={7} xs={12}>                   
                                        
                    <div className='para-section5 mt-3'> 
                    "Brainstorming ideas and playing around with language and phrasing
                    has always been a time-consuming part of my work as a copywriter.                   
                    </div>  
                    <div className='para-section5 mt-3'> 
                    CopyAI now does most of that for me in 30 seconds.                   
                    </div>  
                    <div className='para-section5 mt-3'> 
                    It's the 10x writing productivity tool<br />I never knew I needed."                  
                    </div>               
                   
                 </Col>
                 <Col md={5} xs={12}>
                   <Container>
                   <div className='profile-img'>
                     <img src={K4} className='k4' alt={K4} />
                     </div>
                     <div className='p-txt mt-3'> 
                    Jacob from                  
                    </div> 
                    <Link to="#" className='a-txt'>JacobMcMillen.com</Link>
                   </Container>
                  
                 </Col>                
             </Row>

          </Container>
    </div>
    <Container>
        <div className='last-section'>
          <h2 className='lst-head'>Ready to write?</h2> 
          <p className='lst-para'>Save time. Stop frustration. Get inspired.</p> 
          <div className='dark-free'>
            <Link to="#" className='txt'>Get your free account today <i class="fas fa-arrow-right ml-3"></i></Link>
        </div>
          <div class="d-flex jC">
            <ul className='clr'>
              <li><span className='list-sty'><i class="far fa-check-circle"></i>No credit card required</span></li>
              <li><span className='list-sty'><i class="far fa-check-circle"></i>100 free credits when you sign up</span></li>
              <li><span className='list-sty'><i class="far fa-check-circle"></i>90+ tools to explore</span></li>              
            </ul>
          </div>
        </div>
    </Container>
    </>
  );
}

export default Profile;

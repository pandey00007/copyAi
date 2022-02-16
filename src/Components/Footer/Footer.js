import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';
import Logo from '../../logo.svg';
import {Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div class="footer">
      <Container>
          <Row>
          <Col md={4} xs={12}>
              <div className='footer-section'>
              <h3>Company</h3>
              <Link to="#" className='lin'>Join Our Facebook Community</Link><br />
              <Link to="#" className='lin'>25+ Languages</Link><br />
              <Link to="#" className='lin'>Follow Us on Twitter</Link><br />
              <Link to="#" className='lin'>Join Our Affiliate Program</Link><br />
              <Link to="#" className='lin'>We're Hiring! Our Open Roles</Link><br />
              <Link to="#" className='lin'>Read Our Blog</Link><br />
              <Link to="#" className='lin'>Privacy Notice</Link><br />
              <Link to="#" className='lin'>Terms of Service</Link><br />

              </div>  
          </Col>
          <Col md={4} xs={12}>
          <div className='footer-section'>
              <h3>Support</h3>
              <Link to="#" className='lin'>Help Center</Link><br />
              <Link to="#" className='lin'>View Tutorials</Link><br />
              <Link to="#" className='lin'>Contact Us</Link><br />
              <Link to="#" className='lin'>Request a New Feature</Link><br />
              <Link to="#" className='lin'>Report a Bug</Link><br />
              <Link to="#" className='lin'>Report an Outage</Link><br />
              </div>
          </Col>
          <Col md={4} xs={12}>
          <Link to="/"><img src={Logo} className='logo' alt="Logo" /></Link>
          <div class="text-block-10">© 2022 All rights reserved.</div>
              </Col>    
          </Row>
      </Container>
      </div>
    </>
  );
}

export default Footer;
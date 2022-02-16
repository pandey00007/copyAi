import React from 'react';
import './Contact.css';
import {Accordion, Container, Row, Col, Button } from 'react-bootstrap';
function Contact() {
return (
<>
<div className="wrapper">
   <Container>
      <h2 className='priceq'>Got Question?</h2>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
         <Accordion.Item eventKey="0">
            <Accordion.Header>What can I create with Copy.ai?</Accordion.Header>
            <Accordion.Body>
               Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
               est laborum.
            </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
            <Accordion.Header>How much does it cost?</Accordion.Header>
            <Accordion.Body>
               ullamco laboris nisi ut aliquip ex ea
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
               est laborum.
            </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="2">
            <Accordion.Header>What languages does it support?</Accordion.Header>
            <Accordion.Body>
               ullamco laboris nisi ut aliquip ex ea
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
               est laborum.
            </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="3">
            <Accordion.Header>Where can I learn more about copywriting or entrepreneurship?</Accordion.Header>
            <Accordion.Body>
               ullamco laboris nisi ut aliquip ex ea
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
               est laborum.
            </Accordion.Body>
         </Accordion.Item>
      </Accordion>
      <p className='priceo'>Still have questions? Reach us below!</p>
      <h2 className='contact-head'>Contact Us</h2>
      <p className='contact1'>How can we help you out? If you fill out the form below, we will try to get back to you ASAP!</p>
      <p className='contact1'><i>Fields marked with an asterisk (*) are required.</i></p>
      <div className="contactForm">
         <Row>
            <Col xs={12} md={6}>
                <div className='form-group'>
                <label>Name *</label>
                <input type="text" name="name" className="form-control" />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className='form-group'>
                    <label>Email *</label>
                    <input type="email" name="name" className="form-control" />
                </div>
            </Col>
            
            <Col xs={12} md={12}>
                <div className='form-group'>
                    <label>Message *</label>
                    <textarea name="name" className="form-control" cols="4" rows="4"></textarea>
                </div>
            </Col>

            <Col xs={12} md={12}>
                <div className='form-group'>
                    <Button className="btn btn-success">Submit</Button>
                </div>
            </Col>
         </Row>
      </div>
   </Container>
</div>
</>
);
}
export default Contact;
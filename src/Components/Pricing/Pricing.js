
import React  from 'react';
import { Container,Row, Button, Col} from 'react-bootstrap';


import './Pricing.css';
import { Link } from "react-router-dom";
import Freeplan from '../Img/free-plan.svg';
import Medium from '../Img/medium.svg';
import Multiple1 from '../Img/multiple1.svg';
import Ebay from '../Img/ebay.png';
import Nestle from '../Img/nestle.png';
import Ogly from '../Img/ogly.png';
import Zoho from '../Img/zoho.png';


function Pricing() {
  const [showResults, setShowResults] = React.useState(true)
  // const onClick = () => setShowResults(true)
  return (
    <>
    
      
      <div className="wrapper">
      <h2 className='price'>Pricing</h2>
      <p className='price2'>Get unlimited copy and ideas with our pro plan.</p>
      <div className='text-center'>
      <Link to="#" className='price3'>Try for free</Link></div>
        <Container>
          <div className='text-center'>
          <Button  className="tgl" onClick={()=>setShowResults(true)}>Month</Button>
          <Button className="tgl" onClick={()=>setShowResults(false)}>Year</Button></div>
          {/* <Button onClick={()=>setShowResults(!showResults)}>toggle</Button> */}
         
          <div className="hhh" >
            {
              showResults?
             
              <div className="monthly">
                
          
                <Row>
                  <Col md={4} xs={12}>
                    <div className='card-box'>
                    <img src={Freeplan} className='free' alt="free"/>
                      <h3 className='ft-11'>Free Plan</h3>
                      <p className='yy'>Perfect for testing</p>
                      <h2 className='rr'>$0</h2>
                      <p className='ry'>No Credit Card Required</p>
                      <div class="d-flex jC">
                        <ul className='clr1'>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>10 credits per month</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>25+ languages</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>              
                        </ul>
                      </div>
                      <Button className='price-btn1'>Get your free account</Button>
                    </div>
                  </Col>
                  <Col md={4} xs={12}>
                    <div className='card-box'>
                    <img src={Medium} className='free' alt="free"/>
                    <h3 className='ft-11'>Pro</h3>
                      <p className='yy'>Perfect for small businesses</p>
                      <h2 className='rr'>$35/month</h2>
                      <p className='ry'>$420 Billed Yearly</p>
                      <div class="d-flex jC">
                        <ul className='clr1'>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>10 credits per month</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>25+ languages</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>  
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>               
                        </ul>
                      </div>
                    <Button className='price-btn2'>Try for free</Button>
                    </div>
                    
                  </Col>
                  <Col md={4} xs={12}>
                    <div className='card-box a1'>
                    <img src={Multiple1} className='free' alt="free"/>
                    <h3 className='ft-11'>Team</h3>
                      <p className='yy'>Perfect for testing</p>
                      <h2 className='rr'>$0</h2>
                      <p className='ry'>No Credit Card Required</p>
                      <div class="d-flex jC">
                        <ul className='clr1'>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>10 credits per month</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>25+ languages</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>   
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>   
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>              
                        </ul>
                      </div>
                    <Button className='price-btn2'>Try for free</Button>

                      
                    </div>
                  </Col>
                </Row>
             
              </div>
             
            :
              
              
              <div className="yearly">
                <Row>
                <Col md={4} xs={12}>
                    <div className='card-box'>
                    <img src={Freeplan} className='free' alt="free"/>
                      <h3 className='ft-11'>Free Plan</h3>
                      <p className='yy'>Perfect for testing</p>
                      <h2 className='rr'>$0</h2>
                      <p className='ry'>No Credit Card Required</p>
                      <div class="d-flex jC">
                        <ul className='clr1'>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>10 credits per month</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>25+ languages</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>              
                        </ul>
                      </div>
                      <Button className='price-btn1'>Get your free account</Button>
                    </div>
                  </Col>
                  <Col md={4} xs={12}>
                    <div className='card-box'>
                    <img src={Medium} className='free' alt="free"/>
                    <h3 className='ft-11'>Pro</h3>
                      <p className='yy'>Perfect for small businesses</p>
                      <h2 className='rr'>$55/year</h2>
                      <p className='ry'>$420 Billed Yearly</p>
                      <div class="d-flex jC">
                        <ul className='clr1'>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>10 credits per month</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>25+ languages</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>  
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>               
                        </ul>
                      </div>
                    <Button className='price-btn2'>Try for free</Button>
                    </div>
                    
                  </Col>
                  <Col md={4} xs={12}>
                    <div className='card-box a1'>
                    <img src={Multiple1} className='free' alt="free"/>
                    <h3 className='ft-11'>Team</h3>
                      <p className='yy'>Perfect for testing</p>
                      <h2 className='rr'>$0</h2>
                      <p className='ry'>No Credit Card Required</p>
                      <div class="d-flex jC">
                        <ul className='clr1'>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>10 credits per month</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>25+ languages</span></li>
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>   
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>   
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>90+ copywriting tools</span></li>              
                          <li><span className='list-sty1'><i class="far fa-check-circle"></i>Premium community</span></li>              
                        </ul>
                      </div>
                    <Button className='price-btn2'>Try for free</Button>

                      
                    </div>
                  </Col>
                </Row>
              </div>
            }
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
};


export default Pricing;
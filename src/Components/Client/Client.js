import React from 'react';
import Thumbnail from '../../thumbnail.jpeg';
import Thumb from '../../thumb.jpeg';
import Thumb1 from '../../thumb1.jpeg';
import './Client.css';
import { Container} from 'reactstrap';
import {Link } from "react-router-dom";
function Client() {
  return (
    <>
      <div className="mt-32">
         <h2 className='head-content5'>Inspiration for anyone</h2>
      </div>
      <Container>
      <div className="d-flex justify-content align-center client">
          <div className='client-section'>
        <img src={Thumbnail} className='thumbnail' alt="Thumbnail"/>
        <div className="text-block-44">Ollie, Founder at <span><u>Enterprise Orchard</u></span>
        </div>
        </div>
        <div className='client-section'>
        <img src={Thumb} className='thumbnail' alt="Thumbnail"/>
        <div className="text-block-44">Jackson, Owner at <span><u>Fringe </u></span>
        </div>
        </div>
        
        <div className='client-section'>
        <img src={Thumb1} className='thumbnail' alt="Thumbnail"/>
        <div className="text-block-44">Melissa, CEO at <span><u>Haus.band</u></span>
        </div>
        </div>
       
      </div>
      <div className='dark-free'>
      <Link to="#" className='txt'>Get your free account today <i class="fas fa-arrow-right ml-3"></i></Link>
      </div>
      </Container>
    </>
  );
}

export default Client;
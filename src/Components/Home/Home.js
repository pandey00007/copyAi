import React from 'react';
import './Home.css';
import Bannerhome from '../Banner/Banner'
import Features from '../Features/Features';
import Client from '../Client/Client';


function Home() {
  return (
    <>
     <Bannerhome /> 
     <Features />
     <Client />
    </>
  );
}

export default Home;

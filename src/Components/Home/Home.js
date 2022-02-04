import React from 'react';
import './Home.css';
import Bannerhome from '../Banner/Banner'
import Features from '../Features/Features';
import Client from '../Client/Client';
import Card from '../Cardsection/Cardsection';


function Home() {
  return (
    <>
     <Bannerhome /> 
     <Features />
     <Client />
     <Card />
    </>
  );
}

export default Home;

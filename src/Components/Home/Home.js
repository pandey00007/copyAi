import React from 'react';
import './Home.css';
import Bannerhome from '../Banner/Banner'
import Features from '../Features/Features';
import Client from '../Client/Client';
import Card from '../Cardsection/Cardsection';
import Magic from '../Magic/Magic'
import Profile from '../Profile/Profile'
import Navbar from '../Navbar/Navbar';



function Home() {
  return (
    <>
     <Bannerhome /> 
     <Features />
     <Client />
     <Card />
     <Magic />
     <Profile />
     <Navbar />
    </>
  );
}

export default Home;

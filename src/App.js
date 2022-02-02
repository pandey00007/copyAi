import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import BannerHome from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import Client from './Components/Client/Client';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <>
    
      <Header />
      <BannerHome />
      <Features />
      <Client />
      <Signup/>
     
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/signup" component={Signup} />  */}
      </Routes>
      
    </>
  );
}

export default App;

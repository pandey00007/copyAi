import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Training from './Components/Training/Training';

function App() {
  

  return (
    <>
    
      <Header />
     
     
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/training" element={<Training />} />
        <Route exact path="/contact" element={<Contact />} />

      
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;

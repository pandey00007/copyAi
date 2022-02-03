import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';




function App() {
  return (
    <>
    
      <Header />
     
      
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />

      
      </Routes>
      
    </>
  );
}

export default App;

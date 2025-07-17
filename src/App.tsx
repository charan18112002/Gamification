import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { NavbarComp } from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'


function App() 
{
  
  return (
    <>
       <NavbarComp/>
      
      <Routes>
        

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        
      
      </Routes>
    
       
        
    </>
  )
}

export default App

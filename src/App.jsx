import { useState } from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Heading from './Heading';
import About from './About';
import Resources from './Resources';
import Blogs from './Blogs';
import Services from './Services';
import UpcomingEvents from './UpcomingEvents';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {


  return (
    <>
    <div id="top">
      <Nav/>
    </div>
    <div className="spiritual-bg">
      <Heading />
    </div>
    <div id="about" className="about-section">
      <About/>
    </div>
    <div id="services" className="services-section">
      <Services/>
    </div>
    <div id="events" className="events-section">
      <UpcomingEvents/>
    </div>
    <div id="resources" className="resources-section">
      <Resources/>
    </div>
     <div id="blogs" className="blogs-section">
      <Blogs/>
    </div>
    
    </>
  )
}

export default App

import React from 'react';
import SlideShow from './SlideShow.js';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';
import './SlideShow.css';


function Home() {
    return (
        <>
        <Navbar/>
          <div>
        <SlideShow />

        <div className="button-container">
          <div className="custom-button">
            <span>Customer</span>
          </div>
          <div className="custom-button">
            <span>Agent</span>
          </div>
          <div className="custom-button">
            <span>Employee</span>
          </div>
        </div>
      </div>
      <Footer/>

        </>
    
    );
  }
  export default Home;
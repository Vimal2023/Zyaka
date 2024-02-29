// eslint-disable-next-line no-unused-vars
import React from 'react'

import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Tasty</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">For you</h1>
                <img src="/threelines.svg" alt="threelines" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">For U.</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
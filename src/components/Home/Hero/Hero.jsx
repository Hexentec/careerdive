import React from 'react';
import './hero.css';

const Hero = () => {

  const handleGetStarted = () => {
    window.location.href = 'https://career.hexancare.tech/';
  };

  return (
    <section className="hero">
      {/* Decorative background images */}
      <img 
        src="/Grad1.png" 
        alt="" 
        className="hero-bg-image top-left" 
        aria-hidden="true"
      />
      <img 
        src="/Grad3.png" 
        alt="" 
        className="hero-bg-image center" 
        aria-hidden="true"
      />
      <img 
        src="/Grad2.png" 
        alt="" 
        className="hero-bg-image bottom-right" 
        aria-hidden="true"
      />
      
      <div className="hero-content">
        <h1>Transform Your Career with Us</h1>
        <p>Join thousands of professionals who have accelerated their careers with our proven programs and expert mentorship.</p>
        <button className="hero-btn" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
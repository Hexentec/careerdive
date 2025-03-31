import React from 'react';
import './about.css';

const About = () => {
  const handleGetStarted = () => {
    
    window.location.href = 'https://career.hexancare.tech/';
  };

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/about-image.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Career Dive</h2>
          <p>
            Career Dive is a leading career development platform that helps professionals 
            navigate their career paths with confidence. Our team of experts provides 
            personalized guidance, training, and resources to help you achieve your 
            career goals.
          </p>
          <p>
            With over 10 years of experience in the industry, we've helped thousands 
            of individuals transition into their dream careers.
          </p>
          <button className="about-btn" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
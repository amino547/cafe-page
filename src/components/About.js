import React from 'react';
import './About.css';
import BackToHome from './BackToHome';

const About = () => {
  return (
    <div className="about-container">
      <BackToHome />
      <div className="about-content">
        <h1>About Our Coffee Journey</h1>
        <div className="about-grid">
          <div className="about-card">
            <div className="icon">☕</div>
            <h2>Our Story</h2>
            <p>Founded in 2020, our café has been serving premium coffee with passion and dedication. Every cup tells a story of carefully selected beans and expert craftsmanship.</p>
          </div>
          
          <div className="about-card">
            <div className="icon">🌱</div>
            <h2>Quality First</h2>
            <p>We source our beans directly from sustainable farms, ensuring both quality and ethical practices. Each batch is roasted to perfection in small quantities.</p>
          </div>
          
          <div className="about-card">
            <div className="icon">👨‍🍳</div>
            <h2>Expert Baristas</h2>
            <p>Our team of skilled baristas are passionate about coffee and dedicated to crafting the perfect cup for every customer.</p>
          </div>
          
          <div className="about-card">
            <div className="icon">🤝</div>
            <h2>Community</h2>
            <p>More than just a café, we're a gathering place for coffee lovers. Join our community events and coffee tasting sessions.</p>
          </div>
        </div>
        
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>To create an exceptional coffee experience that brings people together and celebrates the artistry of coffee making.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
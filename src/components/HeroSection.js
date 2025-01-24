import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CoffeeScene from './CoffeeScene';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hero-container">
      <div className="social-links">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
      </div>

      <div className="hero-content">
        <span className="tag">#Cafe Pour Les Jours Froids</span>
        <h1>{isMobile ? 'Café Chaud' : 'Boisson Chaude'}</h1>
        <p>Boostez votre productivité et améliorez votre humeur avec un verre de café le matin. Le café a un effet stimulant.</p>
        
        <div className="cta-section">
          <button 
            className="order-btn"
            onClick={() => navigate('/menu')}
          >
            Aller Au Menu
          </button>
          <div className="price">
            <span className="amount">15DT</span>
            <span className="label">| Higher Price</span>
          </div>
        </div>
      </div>

      <div className="coffee-model">
        <CoffeeScene />
      </div>
    </div>
  );
};

export default HeroSection;

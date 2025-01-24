import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackToHome.css';

const BackToHome = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="back-to-home-btn"
      onClick={() => navigate('/')}
    >
      Back to Home
    </button>
  );
};

export default BackToHome;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuBook.css';

const MenuBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const navigate = useNavigate();

  const menuData = {
    spreads: [
      {
        leftPage: {
          title: "Coffee Classics",
          items: [
            {
              name: "Espresso",
              description: "Rich and bold single shot of pure coffee essence",
              price: "4.5 TND",
              image: "/images/1.jpg"
            },
            {
              name: "Cappuccino",
              description: "Perfect balance of espresso, steamed milk, and foam",
              price: "7 TND",
              image: "/images/2.jpg"
            }
          ]
        },
        rightPage: {
          title: "Specialty Coffee",
          items: [
            {
              name: "Caramel Latte",
              description: "Smooth espresso and steamed milk with caramel",
              price: "8 TND",
              image: "/images/3.jpg"
            },
            {
              name: "Mocha",
              description: "Espresso with rich choco and milk",
              price: "8 TND",
              image: "/images/4.jpg"
            }
          ]
        }
      },
      {
        leftPage: {
          title: "Tea Selection",
          items: [
            {
              name: "Green Tea",
              description: "Premium Japanese green tea",
              price: "5 TND",
              image: "/images/5.jpg"
            },
            {
              name: "Chai Latte",
              description: "Spiced tea with steamed milk",
              price: "6.5 TND",
              image: "/images/6.jpg"
            }
          ]
        },
        rightPage: {
          title: "Specialty Tea",
          items: [
            {
              name: "Earl Grey",
              description: "Black tea with bergamot flavor",
              price: "5.5 TND",
              image: "/images/7.jpg"
            },
            {
              name: "English Breakfast",
              description: "Strong black tea blend",
              price: "5.5 TND",
              image: "/images/8.jpg"
            }
          ]
        }
      },
      {
        leftPage: {
          title: "Fresh Pastries",
          items: [
            {
              name: "Butter Croissant",
              description: "Freshly baked daily",
              price: "3.5 TND",
              image: "/images/1a.jpg"
            },
            {
              name: "Blueberry Muffin",
              description: "Made with fresh blueberries",
              price: "4 TND",
              image: "/images/10.jpg"
            }
          ]
        },
        rightPage: {
          title: "Sweet Treats",
          items: [
            {
              name: "Cinnamon Roll",
              description: "Soft and gooey cinnamon roll",
              price: "4.5 TND",
              image: "/images/11.jpg"
            },
            {
              name: "Blueberry Scone",
              description: "Freshly baked scone with clotted cream",
              price: "5 TND",
              image: "/images/2a.jpg"
            }
          ]
        }
      },
      {
        leftPage: {
          title: "Special Items",
          items: [
            {
              name: "Special Cake",
              description: "Our signature cake selection",
              price: "12 TND",
              image: "/images/3a.jpg"
            },
            {
              name: "Premium Coffee",
              description: "Specialty house blend",
              price: "9.5 TND",
              image: "/images/4a.jpg"
            }
          ]
        },
        rightPage: {
          title: "Premium Drinks",
          items: [
            {
              name: "Iced Coffee",
              description: "Brewed coffee served over ice",
              price: "6.5 TND",
              image: "/images/5a.jpg"
            },
            {
              name: "Frappuccino",
              description: "Coffee blended with ice and milk",
              price: "8.5 TND",
              image: "/images/6a.jpg"
            }
          ]
        }
      }
    ]
  };

  const turnToNextSpread = useCallback(() => {
    if (currentSpread >= menuData.spreads.length || isTransitioning) return;

    setDirection('next');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSpread(prev => prev + 1);
      setIsTransitioning(false);
    }, 700);
  }, [currentSpread, isTransitioning, menuData.spreads.length]);

  const turnToPreviousSpread = useCallback(() => {
    if (currentSpread <= 0 || isTransitioning) return;

    setDirection('prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSpread(prev => prev - 1);
      setIsTransitioning(false);
    }, 700);
  }, [currentSpread, isTransitioning]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSpread > 0) {
        turnToPreviousSpread();
      } else if (e.key === 'ArrowRight' && currentSpread < menuData.spreads.length) {
        turnToNextSpread();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSpread, turnToNextSpread, turnToPreviousSpread, menuData.spreads.length]);

  const renderMenuItem = (item, index) => (
    <div className="menu-item" key={index}>
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="price">{item.price}</span>
      </div>
    </div>
  );

  const renderPage = (pageData) => (
    <div className="page">
      <h2>{pageData.title}</h2>
      <div className="menu-items">
        {pageData.items?.map((item, index) => renderMenuItem(item, index))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="top-controls">
        <button 
          className="home-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
      
      <div className="book-container">
        <div className="book">
          <div className="book-spine"></div>

          {/* Cover */}
          <div className={`spread ${currentSpread === 0 ? 'active' : ''}`}>
            <div className="page cover-front">
              <div className="cover-content">
                <img src="/images/logo.png" alt="Cafe Logo" style={{ width: '100px', marginBottom: '20px' }} />
                <h1>Cafe Delight</h1>
                <h2>Menu</h2>
              </div>
            </div>
            <div className={`page right ${isTransitioning && direction === 'next' ? 'turning' : ''} ${isTransitioning && direction === 'prev' ? 'turning-reverse' : ''}`}>
              <div className="cover-content">
                <img src="/images/hero.png" alt="Cafe Interior" style={{ width: '200px', marginBottom: '20px', borderRadius: '10px' }} />
                <h2>Visit Cafe Delight</h2>
                <p>123 Coffee Street</p>
                <p>Open Daily: 7AM - 8PM</p>
                <p>(555) 123-4567</p>
                <p>info@cafedelight.com</p>
              </div>
            </div>
          </div>

          {/* Menu Spreads */}
          {menuData.spreads.map((spread, index) => (
            <div
              key={index}
              className={`spread ${currentSpread === index + 1 ? 'active' : ''}`}
            >
              <div className={`page ${isTransitioning && direction === 'prev' ? 'fading' : ''}`}>
                {renderPage(spread.leftPage)}
              </div>
              <div className={`page right ${isTransitioning && direction === 'next' ? 'turning' : ''} ${isTransitioning && direction === 'prev' ? 'turning-reverse' : ''}`}>
                {renderPage(spread.rightPage)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button
          onClick={turnToPreviousSpread}
          disabled={currentSpread === 0}
          className={currentSpread === 0 ? 'disabled' : ''}
        >
          Previous Pages
        </button>
        <button
          onClick={turnToNextSpread}
          disabled={currentSpread === menuData.spreads.length}
          className={currentSpread === menuData.spreads.length ? 'disabled' : ''}
        >
          Next Pages
        </button>
      </div>
    </div>
  );
};

export default MenuBook;

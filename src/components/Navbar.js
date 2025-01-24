import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/menu', text: 'Menu' },
    { to: '/about', text: 'About' },
    { to: '/events', text: 'Events' },
    { to: '/contact', text: 'Contact' }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
              <Coffee className="logo-icon" />
              <div className="logo-text">
                <span className="logo-title">Café Delight</span>
                <span className="logo-subtitle">Est. 2020</span>
              </div>
            </NavLink>

            <button
              className="menu-toggle right-align"
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-sidebar right ${menuOpen ? 'show' : ''}`}>
        <button className="close-menu" onClick={closeMenu}><X /></button>
        <nav className="sidebar-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.text}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
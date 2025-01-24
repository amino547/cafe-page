import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuBook from './components/MenuBook';
import About from './components/About';
import Contact from './components/Contact';
import Event from './components/Event';

function App() {
  const location = useLocation();
  const hideNavbarPaths = ['/menu', '/about', '/events', '/contact'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route path="/menu" element={<MenuBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Coffee,
  Utensils,
  Music,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Heart,
  Star,
} from 'lucide-react';
import './Event.css';
import BackToHome from './BackToHome';

export default function Event() {
  return (
    <div className="event-page">
      <BackToHome />
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="event-header">
              <Coffee className="event-icon" />
              <span className="event-brand">Artisan Coffee Festival</span>
            </div>
            <h1 className="event-title">A Celebration of Coffee Culture</h1>
            <div className="event-details">
              <div className="detail-item">
                <Calendar className="detail-icon" />
                <span>April 20-21, 2024</span>
              </div>
              <div className="detail-item">
                <Clock className="detail-icon" />
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <span>Portland, Oregon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="main-content">
        <section className="features-section">
          <div className="features-grid">
            {[
              {
                icon: <Coffee className="feature-icon" />,
                title: "Artisan Coffee",
                description: "Sample unique blends from local roasters"
              },
              {
                icon: <Utensils className="feature-icon" />,
                title: "Food Pairings",
                description: "Delicious pastries and cafe delicacies"
              },
              {
                icon: <Music className="feature-icon" />,
                title: "Live Music",
                description: "Acoustic performances all weekend"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                {feature.icon}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section className="schedule-section">
          <h2 className="schedule-title">Event Schedule</h2>
          <div className="schedule-container">
            {[
              { time: "10:00 AM", event: "Opening Ceremony & Welcome Coffee" },
              { time: "11:30 AM", event: "Latte Art Workshop" },
              { time: "1:00 PM", event: "Coffee Tasting Sessions" },
              { time: "3:30 PM", event: "Barista Championships" },
              { time: "5:00 PM", event: "Coffee & Music Social Hour" }
            ].map((item, index) => (
              <div key={index} className="schedule-item">
                <span className="schedule-time">{item.time}</span>
                <span className="schedule-event">{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Registration */}
        <section className="registration-section">
          <div className="registration-container">
            <h2 className="registration-title">Reserve Your Spot</h2>
            <form className="registration-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-with-icon">
                  <Mail className="input-icon" />
                  <input type="email" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <div className="input-with-icon">
                  <Phone className="input-icon" />
                  <input type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Ticket Type</label>
                <select>
                  <option>Full Weekend Pass</option>
                  <option>Single Day - Saturday</option>
                  <option>Single Day - Sunday</option>
                </select>
              </div>
              <button type="submit" className="submit-button">
                Reserve Ticket
              </button>
            </form>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section">
          <h2 className="gallery-title">Coffee Moments</h2>
          <div className="gallery-grid">
            {[
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
              "https://images.unsplash.com/photo-1509785307050-d4066910ec1e",
              "https://images.unsplash.com/photo-1498804103079-a6351b050096",
              "https://images.unsplash.com/photo-1442512595331-e89e73853f31"
            ].map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={`${img}?auto=format&fit=crop&w=500&q=80`} alt="Coffee moment" />
                <div className="gallery-overlay">
                  <Heart className="gallery-icon" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="event-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <p>
                <Mail className="footer-icon" />
                hello@coffeefestival.com
              </p>
              <p>
                <Phone className="footer-icon" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Join</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Artisan Coffee Festival. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
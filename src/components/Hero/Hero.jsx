import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  
  const images = [
    '/src/assets/nature_trip_1.jpg',
    '/src/assets/nature_trip_3.jpg',
    '/src/assets/nature_travel_6.jpg',
    '/src/assets/nature_travel_7.jpg',
    '/src/assets/nature_travel_8.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleExploreTours = () => {
    // Smooth scroll to the blog section if on home page
    if (location.pathname === '/') {
      const blogSection = document.querySelector('.blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLearnMore = () => {
    if (location.pathname === '/') {
      const aboutSection = document.querySelector('.about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero d-flex align-items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${image})`,
            transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            transition: 'all 1s ease-in-out'
          }}
        />
      ))}
      <div className="hero-overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-white">
            <div className="hero-content" data-aos="fade-up">
              <h1 className="display-4 fw-bold mb-4 hero-title">
                Discover Amazing Places With Us
              </h1>
              <p className="lead mb-5 hero-text">
                Experience unforgettable journeys and create lasting memories
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-light btn-lg me-3 hover-scale"
                  onClick={handleExploreTours}
                >
                  Explore Tours
                </button>
                <button 
                  className="btn btn-outline-light btn-lg hover-scale"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
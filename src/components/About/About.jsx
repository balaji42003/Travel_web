import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

// Import your images
import mainImage from '../../assets/nature_trip_1.jpg';
import secondaryImage from '../../assets/nature_travel_6.jpg';
import experienceImage from '../../assets/nature_travel_7.jpg';
import aboutUsImage from '../../assets/about us.png';

const About = () => {
  const stats = [
    { number: '15+', text: 'Years Experience', icon: '🌟' },
    { number: '500+', text: 'Destinations', icon: '🌍' },
    { number: '25k+', text: 'Happy Travelers', icon: '😊' },
    { number: '4.9/5', text: 'Customer Rating', icon: '⭐' }
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Customized Trips',
      text: 'Tailored experiences for every traveler'
    },
    {
      icon: '🌟',
      title: 'Expert Guides',
      text: 'Professional local guides worldwide'
    },
    {
      icon: '🏨',
      title: 'Luxury Stays',
      text: 'Premium accommodations at top locations'
    },
    {
      icon: '🔒',
      title: 'Safe Travel',
      text: '24/7 Support throughout your journey'
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="about py-4">
        <div className="about-pattern"></div>
        <Container>
          {/* Compact Header */}
          <Row className="justify-content-center mb-4">
            <Col lg={8} className="text-center">
              <div data-aos="fade-up">
                <span className="section-subtitle">About Us</span>
                <h2 className="section-title">Your Journey, Our Passion</h2>
                <div className="title-underline mx-auto"></div>
              </div>
            </Col>
          </Row>

          {/* Modified Main Content Row */}
          <Row className="align-items-center mb-4">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="about-image-wrapper" data-aos="fade-right">
                <div className="about-image-container">
                  <img 
                    src={aboutUsImage} 
                    alt="About Us" 
                    className="main-about-image"
                  />
                  <div className="experience-badge">
                    <span className="exp-number">15+</span>
                    <span className="exp-text">Years</span>
                  </div>
                </div>
                <div className="quick-stats">
                  <div className="quick-stat-item">
                    <i className="bi bi-check-circle-fill text-success"></i>
                    <span>Verified Company</span>
                  </div>
                  <div className="quick-stat-item">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="about-content ps-lg-4" data-aos="fade-left">
                <h3 className="content-title mb-3">
                  Crafting Unforgettable Experiences
                </h3>
                <div className="content-description">
                  <p className="lead mb-3">
                    From pristine beaches to mountain peaks, we curate journeys that inspire and create memories that last a lifetime.
                  </p>
                  <ul className="feature-list">
                    <li><i className="bi bi-check2-circle"></i> Expert local guides in every destination</li>
                    <li><i className="bi bi-check2-circle"></i> Customized itineraries for your needs</li>
                    <li><i className="bi bi-check2-circle"></i> 24/7 customer support throughout your journey</li>
                  </ul>
                </div>
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="stat-card"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <span className="stat-icon">{stat.icon}</span>
                      <h4 className="stat-number">{stat.number}</h4>
                      <p className="stat-text">{stat.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Features Section - Compact */}
          <Row className="mt-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index} className="mb-3">
                <div className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h5 className="feature-title mb-2">{feature.title}</h5>
                  <p className="feature-text mb-0">{feature.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Gallery Section */}
          <div className="gallery-section mt-4">
            <Row className="g-3">
              {[mainImage, secondaryImage, experienceImage].map((image, index) => (
                <Col md={4} key={index}>
                  <div className="gallery-item">
                    <img 
                      src={image} 
                      alt={`Travel Experience ${index + 1}`} 
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <span className="gallery-icon">✈️</span>
                        <h6 className="gallery-title">Discover More</h6>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
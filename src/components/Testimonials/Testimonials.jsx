import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sarahImage from '../../assets/sarah johnson.jpeg';
import mikeImage from '../../assets/mike anderson.jpg';
import emmaImage from '../../assets/Emma Wilson.jpeg';
import authorCamille from '../../assets/Camille.jpg';
import authorJaylen from '../../assets/Jaylen.jpg';
import authorMykel from '../../assets/Mykel.jpeg';
import './Testimonials.css';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const allTestimonials = [
    {
      image: sarahImage,
      name: "Sarah Johnson",
      role: "Adventure Traveler",
      quote: "The best travel experience ever! The attention to detail and personalized service was outstanding. Every moment was carefully planned and executed perfectly.",
      rating: 5,
      location: "Swiss Alps Tour"
    },
    {
      image: mikeImage,
      name: "Mike Anderson",
      role: "Family Tourist",
      quote: "Exceptional service and amazing destinations. Our family trip was perfectly organized. The kids had a blast and we made memories that will last a lifetime.",
      rating: 5,
      location: "Bali Adventure"
    },
    {
      image: emmaImage,
      name: "Emma Wilson",
      role: "Solo Traveler",
      quote: "Made solo traveling feel safe and exciting! Incredible attention to detail. The local guides were knowledgeable and friendly. Highly recommended!",
      rating: 5,
      location: "Japan Explorer"
    },
    {
      image: authorCamille,
      name: "Camille Laurent",
      role: "Photography Enthusiast",
      quote: "Perfect for capturing amazing moments! The locations were breathtaking and the guides knew exactly where to find the best photo spots.",
      rating: 5,
      location: "Northern Lights Tour"
    },
    {
      image: authorJaylen,
      name: "Jaylen Carter",
      role: "Cultural Explorer",
      quote: "An authentic cultural experience! The local interactions and traditional experiences were beyond my expectations.",
      rating: 5,
      location: "Thailand Discovery"
    },
    {
      image: authorMykel,
      name: "Mykel Ross",
      role: "Mountain Climber",
      quote: "Outstanding mountain expedition! Professional guides and well-planned routes made this adventure unforgettable.",
      rating: 5,
      location: "Himalayan Trek"
    }
  ];

  const displayedTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setTimeout(() => {
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <section className="testimonials py-5">
      <div className="bg-pattern"></div>
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-muted mt-3">Real experiences from our valued travelers</p>
        </div>

        <Row className="testimonials-grid">
          {displayedTestimonials.map((testimonial, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card 
                className="testimonial-card border-0 h-100 shadow-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body className="p-4">
                  <div className="quote-icon">❝</div>
                  <div className="testimonial-content">
                    <div className="testimonial-header mb-4">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-img-wrapper">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="testimonial-img"
                          />
                        </div>
                        <div className="ms-3">
                          <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                          <p className="text-muted mb-0">{testimonial.role}</p>
                          <small className="text-primary">{testimonial.location}</small>
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-text mb-4">{testimonial.quote}</p>
                    <div className="rating mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    <div className="testimonial-footer">
                      <span className="verified-badge">
                        <i className="bi bi-patch-check-fill text-primary me-2"></i>
                        Verified Travel
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5" data-aos="fade-up">
          <button 
            className="view-more-btn"
            onClick={handleViewMoreClick}
          >
            {showAll ? 'Show Less Reviews' : 'View More Reviews'}
            <i className={`bi bi-arrow-${showAll ? 'up' : 'down'} ms-2`}></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
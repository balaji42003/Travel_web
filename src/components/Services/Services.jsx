import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "✈️",
      title: "Flight Bookings",
      description: "International & domestic flights at best prices",
      features: ["24/7 Support", "Price Match", "Flexible Booking"]
    },
    {
      icon: "🏨",
      title: "Luxury Stays",
      description: "Handpicked hotels and resorts worldwide",
      features: ["5-Star Rated", "Best Locations", "Premium Service"]
    },
    {
      icon: "🎯",
      title: "Custom Tours",
      description: "Personalized itineraries just for you",
      features: ["Local Guides", "Unique Experiences", "Flexible Plans"]
    },
    {
      icon: "🚗",
      title: "Transportation",
      description: "Comfortable and reliable transport services",
      features: ["Airport Pickup", "City Tours", "Private Vehicles"]
    }
  ];

  return (
    <section className="services py-5">
      <div className="services-pattern"></div>
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row>
          {services.map((service, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card 
                className="service-card h-100 border-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body className="text-center p-4">
                  <div className="service-icon mb-4">
                    <span>{service.icon}</span>
                  </div>
                  <h4 className="service-title mb-3">{service.title}</h4>
                  <p className="text-muted mb-4">{service.description}</p>
                  <ul className="feature-list">
                    {service.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-check2-circle text-primary me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-primary mt-3 service-btn">
                    Learn More
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
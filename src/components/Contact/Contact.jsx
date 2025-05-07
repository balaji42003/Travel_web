import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ show: false, type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      show: true,
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.'
    });
  };

  const contactInfo = [
    {
      icon: "geo-alt-fill",
      title: "Visit Our Office",
      text: "123 Travel Street, Adventure Valley",
      subText: "Open Monday-Friday, 9:00 AM - 6:00 PM"
    },
    {
      icon: "telephone-fill",
      title: "Let's Talk",
      text: "+1 234 567 890",
      subText: "We're available 24/7 for urgent inquiries"
    },
    {
      icon: "envelope-fill",
      title: "Email Us",
      text: "info@travelwebsite.com",
      subText: "We typically respond within 24 hours"
    }
  ];

  return (
    <section className="contact">
      <div className="contact-pattern"></div>
      <Container>
        <div className="text-center mb-4">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">We'd Love to Hear From You</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="contact-info" data-aos="fade-right">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="info-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="info-icon-wrapper">
                    <div className="info-icon">
                      <i className={`bi bi-${item.icon}`}></i>
                    </div>
                  </div>
                  <div className="info-content">
                    <h5 className="info-title">{item.title}</h5>
                    <p className="info-text">{item.text}</p>
                    <small className="text-muted">{item.subText}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links mt-5" data-aos="fade-up">
              <h5 className="mb-4">Follow Us</h5>
              <div className="social-icons">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, index) => (
                  <a key={index} href="#" className="social-icon">
                    <i className={`bi bi-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={7} className="offset-lg-1">
            <div className="contact-form-wrapper" data-aos="fade-left">
              {formStatus.show && (
                <Alert 
                  variant={formStatus.type} 
                  onClose={() => setFormStatus({...formStatus, show: false})} 
                  dismissible
                  className="mb-4"
                >
                  {formStatus.message}
                </Alert>
              )}
              
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <div className="form-floating">
                      <Form.Control 
                        type="text" 
                        id="nameInput"
                        placeholder="Your Name"
                        className="form-input"
                      />
                      <label htmlFor="nameInput">Your Name</label>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="form-floating">
                      <Form.Control 
                        type="email" 
                        id="emailInput"
                        placeholder="Your Email"
                        className="form-input"
                      />
                      <label htmlFor="emailInput">Your Email</label>
                    </div>
                  </Col>
                </Row>
                
                <div className="form-floating mb-4">
                  <Form.Control 
                    type="text" 
                    id="subjectInput"
                    placeholder="Subject"
                    className="form-input"
                  />
                  <label htmlFor="subjectInput">Subject</label>
                </div>

                <div className="form-floating mb-4">
                  <Form.Control 
                    as="textarea" 
                    style={{ height: '150px' }}
                    id="messageInput"
                    placeholder="Your Message"
                    className="form-input"
                  />
                  <label htmlFor="messageInput">Your Message</label>
                </div>

                <Button 
                  variant="primary" 
                  type="submit"
                  className="submit-btn"
                >
                  Send Message
                  <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
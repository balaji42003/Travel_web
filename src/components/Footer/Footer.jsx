import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="animate-fade-up">
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="footer-brand mb-4">
              <img src="/path-to-logo.png" alt="Logo" height="40" />
            </div>
            <p className="text-white-50 mb-4">Discover amazing places with us. Your journey begins here.</p>
            <div className="social-links">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <a key={social} href="#" className={`social-icon delay-${index + 1}`}>
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-5 mb-lg-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="footer-links">
              {['About', 'Services', 'Blog', 'Contact'].map((link, index) => (
                <li key={link} className={`delay-${index + 1}`}>
                  <a href={`/${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-5 mb-lg-0">
            <h5 className="text-white mb-4">Contact Info</h5>
            <ul className="footer-info">
              <li className="d-flex delay-1">
                <i className="bi bi-geo-alt-fill me-3"></i>
                <span>123 Travel Street, City, Country</span>
              </li>
              <li className="d-flex delay-2">
                <i className="bi bi-telephone-fill me-3"></i>
                <span>+1 234 567 890</span>
              </li>
              <li className="d-flex delay-3">
                <i className="bi bi-envelope-fill me-3"></i>
                <span>info@travelwebsite.com</span>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="text-white-50 mb-4">Subscribe for travel updates and offers</p>
            <Form className="newsletter-form">
              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  placeholder="Your Email"
                  className="newsletter-input"
                />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit"
                className="w-100 newsletter-btn"
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <hr className="footer-divider my-4" />
        <div className="text-center pb-4 animate-fade-up">
          <p className="text-white-50 mb-0">
            © {new Date().getFullYear()} Travel Website. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
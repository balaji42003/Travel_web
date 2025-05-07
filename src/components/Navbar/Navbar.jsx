import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import '../../styles/animations.css';
import './Navbar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => setShowLogin(true);
  const handleSignupClick = () => setShowSignup(true);

  const switchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">FrugalTrail</Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="custom-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item, index) => (
                <Nav.Link 
                  key={item}
                  as={Link} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="nav-link-custom"
                >
                  {item}
                </Nav.Link>
              ))}
              <Nav.Link className="nav-button">Book Now</Nav.Link>
              <Nav.Link className="nav-button" onClick={handleLoginClick}>Login</Nav.Link>
              <Nav.Link className="nav-button signup-btn" onClick={handleSignupClick}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login 
        show={showLogin} 
        handleClose={() => setShowLogin(false)}
        switchToSignup={switchToSignup}
      />
      
      <Signup
        show={showSignup}
        handleClose={() => setShowSignup(false)}
        switchToLogin={switchToLogin}
      />
    </>
  );
};

export default NavigationBar;
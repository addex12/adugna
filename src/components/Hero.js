import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Adugna Gizaw Sutuma</span>
          </h1>
          <p className="hero-subtitle">
            IT Manager | Sage 300 ERP Certified Consultant
          </p>
          <p className="hero-description">
            Experienced IT Manager with 9+ years of expertise in cybersecurity, data analytics, and MLOps. 
            Passionate about innovation, teaching, and building IT talent while driving digital transformation.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <div className="image-placeholder">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#3B82F6"/>
                <circle cx="100" cy="75" r="25" fill="white"/>
                <circle cx="100" cy="150" r="40" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

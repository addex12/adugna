import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Adugna Gizaw Sutuma</h3>
            <p>
              I'm an experienced IT Manager with over 9 years of expertise in cybersecurity, 
              data analytics, and MLOps. Currently serving as IT Manager at Flipper International School (FIS) 
              in Addis Ababa, Ethiopia, I specialize in ERP systems, server infrastructure, and network management.
            </p>
            <p>
              I hold multiple globally recognized certifications including Google IT Support Professional, 
              Google Cybersecurity Professional, IBM Project Management Professional, and Sage 300 ERP 
              Certified Consultant. Currently pursuing MSc in Data Science at Addis Ababa University and 
              MSc in Project Management at Florida University Southeast.
            </p>
            <p>
              Throughout my career at organizations like The Pharo Foundation and Beonline ICT Solutions PLC, 
              I've successfully improved IT infrastructure, reduced downtime, and trained over 200 students in 
              essential ICT skills. I'm passionate about leveraging technology to drive digital transformation 
              and building IT talent.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">9+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Major Certifications</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Students Trained</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="about-img-placeholder">
                <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="400" rx="10" fill="#F3F4F6"/>
                  <rect x="50" y="50" width="200" height="300" rx="5" fill="#E5E7EB"/>
                  <text x="150" y="200" textAnchor="middle" fill="#6B7280" fontSize="16">About Image</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
            <h3>Hello! I'm Adugna</h3>
            <p>
              I'm a passionate full-stack developer with a strong background in creating 
              web applications that solve real-world problems. My journey in programming 
              started with curiosity and has evolved into a career dedicated to crafting 
              efficient, scalable, and user-friendly solutions.
            </p>
            <p>
              I specialize in modern web technologies and enjoy working on projects that 
              challenge me to learn and grow. Whether it's developing a complex web application 
              or optimizing existing systems, I approach each project with creativity and 
              attention to detail.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Clients</span>
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

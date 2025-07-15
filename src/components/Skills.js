import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "IT Management & Leadership",
      skills: [
        { name: "IT Infrastructure", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Strategic Planning", level: 88 },
        { name: "Digital Transformation", level: 85 }
      ]
    },
    {
      title: "ERP & Systems",
      skills: [
        { name: "Sage 300 ERP", level: 95 },
        { name: "Odoo ERP", level: 85 },
        { name: "Server Management", level: 90 },
        { name: "Network Security", level: 88 },
        { name: "Database Management", level: 85 }
      ]
    },
    {
      title: "Cybersecurity & Data Analytics",
      skills: [
        { name: "Cybersecurity", level: 90 },
        { name: "Data Analytics", level: 85 },
        { name: "MLOps", level: 80 },
        { name: "Cloud Solutions", level: 85 },
        { name: "Risk Assessment", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Here are the technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-item">
            <div className="summary-icon">�</div>
            <h4>Cybersecurity Expert</h4>
            <p>Google Cybersecurity Professional certified with expertise in network security and risk management</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">📊</div>
            <h4>Data Analytics & MLOps</h4>
            <p>Advanced skills in data science and machine learning operations for business intelligence</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">⚙️</div>
            <h4>ERP Systems Specialist</h4>
            <p>Certified Sage 300 ERP consultant with experience in Odoo and system implementations</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🎓</div>
            <h4>Technical Educator</h4>
            <p>Passionate about teaching and building IT talent with 200+ students trained</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

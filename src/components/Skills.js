import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Webpack", level: 75 },
        { name: "Jest", level: 80 }
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
            <div className="summary-icon">🚀</div>
            <h4>Fast Development</h4>
            <p>Quick turnaround time for projects without compromising quality</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🎨</div>
            <h4>Creative Solutions</h4>
            <p>Innovative approaches to complex problems with modern design</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Mobile-first approach ensuring great user experience on all devices</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">⚡</div>
            <h4>Performance Focused</h4>
            <p>Optimized code and best practices for fast loading applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

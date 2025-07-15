import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      image: "/api/placeholder/400/300",
      github: "https://github.com/adugna",
      demo: "https://demo.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "frontend",
      image: "/api/placeholder/400/300",
      github: "https://github.com/adugna",
      demo: "https://demo.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts for multiple cities with beautiful animations.",
      technologies: ["JavaScript", "CSS3", "OpenWeather API", "Chart.js"],
      category: "frontend",
      image: "/api/placeholder/400/300",
      github: "https://github.com/adugna",
      demo: "https://demo.example.com",
      featured: false
    },
    {
      id: 4,
      title: "Blog API",
      description: "A RESTful API for a blog application with user authentication, CRUD operations, and role-based access control.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      category: "backend",
      image: "/api/placeholder/400/300",
      github: "https://github.com/adugna",
      demo: "https://demo.example.com",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management tool with analytics, post scheduling, and multi-platform integration.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "fullstack",
      image: "/api/placeholder/400/300",
      github: "https://github.com/adugna",
      demo: "https://demo.example.com",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      technologies: ["React", "CSS3", "JavaScript", "GitHub Pages"],
      category: "frontend",
      image: "/api/placeholder/400/300",
      github: "https://github.com/adugna",
      demo: "https://demo.example.com",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of my recent projects that showcase my skills</p>
        </div>
        
        <div className="project-filters">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.key)}
            >
              {filterItem.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-img-placeholder">
                  <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="250" fill="#F3F4F6"/>
                    <rect x="50" y="50" width="300" height="150" rx="5" fill="#E5E7EB"/>
                    <text x="200" y="125" textAnchor="middle" fill="#6B7280" fontSize="14">{project.title}</text>
                  </svg>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.530.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

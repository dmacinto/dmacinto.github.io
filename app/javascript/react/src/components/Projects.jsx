// app/javascript/components/Projects.jsx

import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, name: 'Project 1', description: 'This is an example project.' },
    { id: 2, name: 'Project 2', description: 'This is another example project.' },
    // Add more projects as needed
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2>My Projects</h2>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

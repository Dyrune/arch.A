// src/components/ProjectPage.js

import React, { useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import projects from './ProjectData';
import { initializeScrollAnimation } from './ScrollAnimation';

const ProjectPage = () => {
  useEffect(() => {
    const cleanupScrollAnimation = initializeScrollAnimation();

    // Cleanup on component unmount
    return () => {
      cleanupScrollAnimation();
    };
  }, []); // Runs only once when the component mounts

  const firstBlockProjects = projects.slice(0, Math.ceil(projects.length / 2));
  const secondBlockProjects = projects.slice(Math.ceil(projects.length / 2));

  return (
    <div className="project-page">
      <div className="project-grid">
        <div className="project-block-a">
          {firstBlockProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="project-card"
              state={{ project }}
            >
              <div className="image-containerr animation-element slide-left">
                <img src={project.imgSrc} alt={project.title} className="project-image" />
                <span className="project-category">{project.category}</span>
              </div>
              <h2 className="project-title">{project.title}</h2>
            </Link>
          ))}
        </div>
        <div className="project-block-b">
          {secondBlockProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="project-card"
              state={{ project }}
            >
              <div className="image-containerr animation-element slide-right">
                <img src={project.imgSrc} alt={project.title} className="project-image" />
                <span className="project-category">{project.category}</span>
              </div>
              <h2 className="project-title">{project.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

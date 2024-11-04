import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from './ProjectData';
import { initializeScrollAnimation } from './ScrollAnimation';

const categories = ["All", "2D Design Blueprint", "3D Designs", "Animation (3D Workflow)"];

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Re-trigger animations on filter change
  useEffect(() => {
    const cleanupScrollAnimation = initializeScrollAnimation();

    // Manually reset animation classes on category change
    const resetAnimations = () => {
      // Get all elements with the animation classes in each column
      const leftColumnElements = document.querySelectorAll('.project-block-a .animation-element');
      const rightColumnElements = document.querySelectorAll('.project-block-b .animation-element');

      // Apply `slide-left` animation for left column
      leftColumnElements.forEach((element) => {
        element.classList.remove('slide-left', 'slide-right');
        void element.offsetWidth; // Trigger reflow to reset animation
        element.classList.add('slide-left'); // Reapply the left animation class
      });

      // Apply `slide-right` animation for right column
      rightColumnElements.forEach((element) => {
        element.classList.remove('slide-left', 'slide-right');
        void element.offsetWidth; // Trigger reflow to reset animation
        element.classList.add('slide-right'); // Reapply the right animation class
      });
    };

    resetAnimations(); // Trigger reset animations

    return () => {
      cleanupScrollAnimation();
    };
  }, [selectedCategory]); // Run every time selectedCategory changes

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  // Split filtered projects into two columns
  const firstBlockProjects = filteredProjects.slice(0, Math.ceil(filteredProjects.length / 2));
  const secondBlockProjects = filteredProjects.slice(Math.ceil(filteredProjects.length / 2));

  return (
    <div className="project-page">
      {/* Category dropdown */}
      <div className="category-dropdown">
        <span className="dropdown-icon">●</span>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="dropdown-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="project-grid">
        {/* Left column of projects */}
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

        {/* Right column of projects */}
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

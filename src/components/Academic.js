// src/components/Academic.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectImage from "../images/pexels-photo-7743257.webp";
import researchImage from "../images/free-photo-of-elaborate-architectural-ceiling-design-with-lantern.jpeg";

// Sample project and research images
const projectItems = [
  {
    id: 1,
    title: "Bridge",
    description: "A brief description of the research and a lot more to do than to say, click the link to check all i have about this project..",
    lecturer: "Dr. Professor Layi",
    type: "Research Project",
    imgSrc: "https://images.pexels.com/photos/5706118/pexels-photo-5706118.jpeg",
    link: "/project1",
  },
  {
    id: 2,
    title: "Story decahome",
    description: "A arch and a lot more to do than to say, click the link to check all i have a arch and a lot more to do than to say, click the link to check all i have ahe project.",
    lecturer: "Dr. John Gredia",
    type: "Research Project",
    imgSrc:
      "https://images.pexels.com/photos/5706183/pexels-photo-5706183.jpeg",
    link: "/project2",
  },
  {
    id: 3,
    title: "Short Miles",
    description: "A sarch and a lot more to do than to say, click the link to check all i have aject  than to say, click the link to check all i have aject.",
    lecturer: "Dr. Mrs Alani",
    type: "Research Project",
    imgSrc:
      "https://images.pexels.com/photos/27305293/pexels-photo-27305293/free-photo-of-a-restaurant-with-a-long-table-and-chairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/project3",
  },
  {
    id: 4,
    title: "Layi's Dawn",
    description: " than to say, click the link to check all i have aject the project. click the link to check all i have aject the project. thank you very much and move on",
    lecturer: "Professor Mike Ross",
    type: "Research Project",
    imgSrc:
      "https://images.pexels.com/photos/4857786/pexels-photo-4857786.jpeg",
    link: "/project4",
  },
];

const researchItems = [
  {
    id: 1,
    title: "Research Title",
    description: "A brief description of the research and a lot more to do than to say, click the link to check all i have about this project.",
    lecturer: "Prof. Jane Smith",
    type: "Publication",
    imgSrc: "../images/research1.jpg",
    link: "/research1",
  },
  {
    id: 2,
    title: "Research Title",
    description: "A brief description of the research.",
    lecturer: "Prof. Jane Smith",
    type: "Publication",
    imgSrc: "../images/research2.jpg",
    link: "/research2",
  },
  {
    id: 3,
    title: "Research Title",
    description: "A brief description of the research.",
    lecturer: "Prof. Jane Smith",
    type: "Publication",
    imgSrc: "../images/research3.jpg",
    link: "/research3",
  },
];

function Academic() {
  const [selectedSection, setSelectedSection] = useState(null); // Track selected section
  const [isFadingOut, setIsFadingOut] = useState(false); // Track fade out for academic page

  const handleSectionClick = (section) => {
    setIsFadingOut(true); // Start fade out on Academic page
    setTimeout(() => {
      setSelectedSection(section); // Show selected section after delay
    }, 500); // Delay matches the Academic fade-out duration
  };

  // Function to go back to the Academic main page
  const handleBackClick = () => {
    setIsFadingOut(true); // Start fade-out effect
    setTimeout(() => {
      setSelectedSection(null); // Return to Academic main page
      setIsFadingOut(false); // Reset fade effect
    }, 500); // Same delay for smooth transition
  };

  return (
    <div>
      {/* Academic page with fade-out effect */}
      {!selectedSection && (
        <div
          className={`academic-page ${isFadingOut ? "fade-out" : "fade-in"}`}
        >
          <div className="academic-links">
            <div
              className="academic-item"
              onClick={() => handleSectionClick("projects")}
            >
              <img
                src={projectImage}
                alt="Project"
                className="academic-image"
              />
              <div className="overlayy">
                <h2>Projects</h2>
                <span className="arrow">→</span>
              </div>
            </div>

            <div
              className="academic-item"
              onClick={() => handleSectionClick("research")}
            >
              <img
                src={researchImage}
                alt="Research"
                className="academic-image"
              />
              <div className="overlayy">
                <h2>Research</h2>
                <span className="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project section with fade-in effect */}
      {selectedSection === "projects" && (<div className="project-section fade-in">
  <div className="project-items">

          <button className="back-button" onClick={handleBackClick}>← Back</button>

    {projectItems.map((project) => (
      <div key={project.id} className="project-item">
        <Link to={project.link}>
          <img src={project.imgSrc} alt={project.title} className="project-image" />
          <div className="overlayy">
          
            <h3>{project.title}</h3>
          </div>
          <div className="nt2"> 
            <p>{project.description}</p>
             <span className="lecturer">Led by: <p> {project.lecturer}</p></span>
            <span className="type">Type: <p> {project.type}</p></span>
            <a className="arrow"> <p> View Project →</p></a></div>
        </Link>
      </div>
    ))}
  </div>
</div>
      )}

      {/* Research section with fade-in effect */}
      {selectedSection === "research" && (
      
<div className="research-section fade-in">
  <div className="research-items">
    {researchItems.map((research) => (
      <div key={research.id} className="research-item">
        <Link to={research.link}>
          <img src={research.imgSrc} alt={research.title} className="research-image" />
          <div className="overlayy">
            <h3>{research.title}</h3>
            <p>{research.description}</p>
          </div>
          <div> <span className="lecturer">Led by: {research.lecturer}</span>
            <span className="type">Type: {research.type}</span>
            <a className="arrow"> <p> View Research →</p></a></div>
        </Link>
      </div>
    ))}
  </div>
</div>
      )}
    </div>
  );
}

export default Academic;



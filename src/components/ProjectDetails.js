import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const project = location.state?.project;

  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  const [currentImages, setCurrentImages] = useState(
    project?.images.map((image) => image.src) || []
  );
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 756);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 756);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      gsap.to(closeBtnRef.current, { opacity: 1, delay: 0.5, duration: 0.5 });
    }
    
    return () => gsap.set(modalRef.current, { y: "100%", opacity: 0 });
  }, []);

  const handleThumbnailClick = (imageIndex, newSrc) => {
    if (!isMobileView) {
      const updatedImages = [...currentImages];
      updatedImages[imageIndex] = newSrc;
      setCurrentImages(updatedImages);
    }
  };

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        y: "100%", 
        duration: 0.5, 
        ease: "power2.in",
        onComplete: () => navigate(-1), // Use navigate(-1) to go back
      });
    }
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!project) return <div>No project found</div>;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div id="top"></div>
     
 <button className="close-btn2" ref={closeBtnRef} onClick={handleClose}>&times;</button>
        <div className="prescription-section">
          <p>{project?.description}</p>
        </div>

        <div className="title-image-section">
          <h1 className="project-title">{project?.title}</h1>
          {project?.imgSrc && (
            <div className="main-image-container">
              <img src={project.imgSrc} alt={`${project.title} main image`} className="main-project-image" />
            </div>
          )}
        </div>

        <div className="info-description-section">
          <div className="project-info">
            <ul className="tecno">
              {project?.technologies?.length ? (
                project.technologies.map((tech, index) => <li key={index}>{tech}</li>)
              ) : (
                <li>No technologies listed</li>
              )}
            </ul>
            <div className="cl"><h3>Client:</h3><p>{project?.client || "Not specified"}</p></div>
            <div className="cl"><h3>Location:</h3><p>{project?.location || "Not specified"}</p></div>
            <div className="cl"><h3>Category:</h3><p>{project?.category || "Not specified"}</p></div>
            <div className="cl"><h3>Project Stage:</h3><p>{project?.projectStage || "Not specified"}</p></div>
            <div className="cl"><h3>Deliverables:</h3><ul>
              {project?.deliverables?.length ? project.deliverables.map((d, i) => <li key={i}>{d}</li>) : <li>No deliverables listed</li>}
            </ul></div>
          </div>
          <div className="project-description">
            <p>{project?.detailedDescription || "No description provided"}</p>
          </div>
        </div>

        <div className="project-images-section">
          <div className="project-images-grid">
            {project?.images?.length ? (
              project.images.map((image, index) => (
                <div key={index} className={`image-container ${index % 2 === 0 ? "align-right" : "align-left"}`}>
                  <div className="image-wrapper">
                    <img src={currentImages[index]} alt={`${project.title} image ${index + 1}`} />
                  </div>
                  {image.description && (
                    <div className="image-description">
                      <p>{image.description}</p>
                      {image?.thumbnails?.length > 0 && (
                        <div className="thumbnails">
                          {image.thumbnails.map((thumb, tIndex) => (
                            <img key={tIndex} src={thumb} alt={`Thumbnail ${tIndex + 1}`} className="thumbnail"
                              onClick={() => handleThumbnailClick(index, thumb)}
                              style={{ cursor: isMobileView ? "default" : "pointer" }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : <p>No images available</p>}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ProjectDetails;

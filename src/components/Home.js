import React, { useEffect } from 'react';
import { initializeScrollAnimation } from './ScrollAnimation';

function Home() {
    useEffect(() => {
      const cleanupScrollAnimation = initializeScrollAnimation();
  
      // Cleanup on component unmount
      return () => {
        cleanupScrollAnimation();
      };
    }, []); // Runs only once when the component mounts

  
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for project 1', image: 'https://images.unsplash.com/photo-1605971981986-e623e8e16f33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Project 2', description: 'Description for project 2', image: 'https://images.pexels.com/photos/2936817/pexels-photo-2936817.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, title: 'Project 3', description: 'Description for project 3', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, title: 'Project 4', description: 'Description for project 4', image: 'https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, title: 'Project 5', description: 'Description for project 5', image: 'https://plus.unsplash.com/premium_photo-1689609950071-af404daa58a0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, title: 'Project 6', description: 'Description for project 6', image: 'https://images.pexels.com/photos/20864041/pexels-photo-20864041/free-photo-of-a-small-bathroom-with-tiled-walls-and-a-toilet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 7, title: 'Project 7', description: 'Description for project 7', image: 'https://images.unsplash.com/photo-1699645239361-e48928cc04a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, title: 'Project 8', description: 'Description for project 8', image: 'https://images.unsplash.com/photo-1694962951262-a5f84ad0da68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 9, title: 'Project 9', description: 'Description for project 9', image: '/images/project9.jpg' },
    { id: 10, title: 'Project 10', description: 'Description for project 10', image: '/images/project10.jpg' },
  ];
  return (
    <section id="projects">
      <div className="projects-grid">
        {/* Column 1 */}
        <div className="column column-1">
          <div className="project-column project-column-1  animation-element slide-left">
            <img src={projects[0].image} alt={projects[0].title} className="project-image" />
            <p>{projects[0].description}</p>
          </div>
          <div className="project-column project-column-2  animation-element slide-right">
            <img src={projects[1].image} alt={projects[1].title} className="project-image" />
            <p>{projects[1].description}</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="column column-2">
          <div className="project-column project-column-3">
            <img src={projects[2].image} alt={projects[2].title} className="project-image  animation-element slide-right" />
            <p>{projects[2].description}</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="column column-3">
          <div className="project-column project-column-4">
            <img src={projects[3].image} alt={projects[3].title} className="project-image  animation-element slide-left" />
            <p>{projects[3].description}</p>
          </div>
          <div className="project-column project-column-5">
            <img src={projects[4].image} alt={projects[4].title} className="project-image  animation-element slide-right" />
            <p>{projects[4].description}</p>
          </div>
        </div>


        <div className="column column-2">
          <div className="project-column project-column-3   animation-element slide-up">
            <img src={projects[5].image} alt={projects[5].title} className="project-image" />
            <p>{projects[5].description}</p>
          </div>
        </div>

        <div className="column column-4 ">
          <div className="project-column project-column-7   animation-element slide-left">
            <img src={projects[6].image} alt={projects[6].title} className="project-image" />
            <p>{projects[6].description}</p>
          </div>
          
          <div className="project-column project-column-8   animation-element slide-right">
            <img src={projects[7].image} alt={projects[7].title} className="project-image" />
            <p>{projects[7].description}</p>
          </div>

        </div>


      </div>
      
    </section>
  );
}

export default Home;

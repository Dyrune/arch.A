// src/components/biography.js

import React, { useEffect } from 'react';
import { initializeScrollAnimation } from './ScrollAnimation';

const Biography = () => {
  useEffect(() => {
    const cleanupScrollAnimation = initializeScrollAnimation();

    // Cleanup on component unmount
    return () => {
      cleanupScrollAnimation();
    };
  }, []); // Runs only once when the component mounts

  return (
    <section id="biography" className="biography">
      <div className="biography-content">
        {/* Left column with profile image */}
        <div className="biography-image">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1727894730957-e714035b458e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className=' animation-element slide-left'
            />
          </div>
          <div className="abt">
            <blockquote className="biography-quote animation-element slide-right">
              <span className="quote-marks">“</span>Having some positive, inspirational and motivational quotes handy is a great way to remind ourselves not to get too caught up in the vagaries of life. These help keep us motivated when we face challenges to our spiritual awakening.<span className="quote-marks">”</span>
            </blockquote>
            <h3 className="biography-name  animation-element slide-right">John Doe</h3>
          </div>
        </div>

        {/* Right column with details */}
        <div className="biography-details animation-element slide-right">
          {/* Biography */}
          <div className="biography-bio animation-element slide-up">
            <p>
              John Doe is an experienced professional in [Your Industry/Field].
              With a passion for innovation and a commitment to excellence, John has
              worked with numerous clients to bring their visions to life and has a
              proven track record of success in [Another Area of Expertise].
            </p>
            <p>
              His expertise lies in areas such as [Expertise Areas], and he has a
              proven track record of success in [Another Area of Expertise].
            </p>
          </div>

          {/* Education and Research sections */}
          <div className="biography-education animation-element slide-left">
            <h4>Education</h4>
            <ul>
              <li>Bachelor's Degree in [Field] - [University]</li>
              <li>Master's Degree in [Field] - [University]</li>
            </ul>
          </div>

          <div className="biography-research animation-element slide-right">
            <h4>Research</h4>
            <ul>
              <li>Research on [Research Topic 1]</li>
              <li>Research on [Research Topic 2]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;

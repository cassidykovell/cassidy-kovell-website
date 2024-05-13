import React from 'react';
import './index.css';

const ProjectsSection = () => {
    return (
      <section id="section2">
        <h3>Projects</h3>
        <div className="content" id="deployed">
          <a href="https://flash-me-8481dc8f6f3f.herokuapp.com/" target="_blank">
            <img src="./assets/images/FM.png" alt="Flash Me Project" />
          </a>
          <a href="https://cassidykovell.github.io/date-night/" target="_blank">
            <img src="./assets/images/DNG.png" alt="Date Night Project" />
          </a>
          <a href="https://cassidykovell.github.io/weather-website/" target="_blank">
            <img src="./assets/images/WD.png" alt="Weather Website Project" />
          </a>
          <a href="https://cassidykovell.github.io/daily-planner/" target="_blank">
            <img src="./assets/images/WDS.png" alt="Daily Planner Project" />
          </a>
          <p id="info">
            Click on any of the photos to view the full application and check out my GitHub to view my backend applications and command-line tools!
          </p>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
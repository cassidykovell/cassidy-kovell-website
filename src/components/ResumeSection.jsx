import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      
      <div className="resume-section">
        <h3>Resume</h3>
        <a href="/path/to/your/resume.pdf" download>Download Resume</a>
      </div>

      <div className="resume-section">
        <h3>Proficiencies</h3>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          <li>Proficiency 3</li>
  
        </ul>
      </div>
    </div>
  );
};

export default Resume;
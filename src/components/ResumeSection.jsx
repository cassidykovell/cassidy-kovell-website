import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await axios.get('../assets/documents/KovellResume.pdf', {
          responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []); 

  return (
    <div className="resume-container">
      <div className="resume-section">
        <h3>Resume</h3>
        <a className="resume" href={pdfUrl} download="KovellResume.pdf">
          Download Resume
        </a>
      </div>
      <div className="resume-section">
        <h3>Proficiencies</h3>
        <ul id="list">
          <li>JavaScript ES6+</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Python</li>
          <li>HTML5</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>Object-Relational Mapping</li>
          <li>MongoDB</li>
          <li>Mongoose ODM</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Object Oriented Programming</li>
          <li>Progressive Web Applications</li>
          <li>MERN</li>
          <li>State</li>
          <li>Web APIs</li>
          <li>Third Party APIs</li>
          <li>Server-Side APIs</li>
           <li>GraphQL</li>
          <li>Webpack</li>
          <li>React</li>
         <li>GraphQL API</li>
          <li>Jest</li>
          <li>GitHub</li>
          <li>Git</li>
          <li>Bash</li>
          <li>JQuery</li>
          <li>Visual Studio Code</li>
          <li>Jest</li>
          <li>Vite</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;


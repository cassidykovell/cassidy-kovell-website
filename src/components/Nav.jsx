import React from 'react';

const Nav = () => {
  return (
    <nav id="nav-bar">
      <ul>
        <li><a href="/" className="noline">ABOUT ME</a></li>
        <li><a href="/projects" className="noline">PROJECTS</a></li>
        <li><a href="/resume" className="noline">RESUME</a></li>
        <li><a href="/contact" className="noline">CONTACT ME</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
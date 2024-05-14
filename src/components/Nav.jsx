import React from 'react';

const Nav = () => {
  return (
    <nav id="nav-bar">
      <ul>
        <li><a href="#section1" className="noline">ABOUT ME</a></li>
        <li><a href="#section2" className="noline">PROJECTS</a></li>
        <li><a href="#section3" className="noline">RESUME</a></li>
        <li><a href="#section4" className="noline">CONTACT ME</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
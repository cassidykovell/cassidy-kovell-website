import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav-bar">
      <ul>
        <Link to="/"><li className="noline">ABOUT ME</li></Link>
        <Link to="/projects"><li className="noline">PROJECTS</li></Link>
        <Link to="/resume"><li className="noline">RESUME</li></Link>
        <Link to="contact"><li className="noline">CONTACT ME</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;
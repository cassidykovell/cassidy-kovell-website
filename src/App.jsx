import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import ResumeSection from './ResumeSection';
import AboutMeSection from './AboutMeSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('aboutMe');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <Header />
      <Nav handleNavClick={handleNavClick} /> 
      <main>
        <section id="hello">
          <h2>Cassidy Kovell</h2>
          <p id="title">Full Stack Web Developer.</p>
        </section>
        {activeSection === 'aboutMe' && <AboutMeSection />}
        {activeSection === 'work' && <ProjectSection />}
        {activeSection === 'contact' && <ContactSection />}
        {activeSection === 'hello' && <ResumeSection />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
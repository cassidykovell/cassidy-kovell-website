import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ResumeSection from './components/ResumeSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
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
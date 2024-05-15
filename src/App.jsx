import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('aboutMe');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="hello">
          <h2>Cassidy Kovell</h2>
          <p id="title">Full Stack Web Developer.</p>
        </section>
        {/* {activeSection === 'aboutMe' && <AboutMeSection />}
        {activeSection === 'work' && <ProjectSection />}
        {activeSection === 'contact' && <ContactSection />}
        {activeSection === 'hello' && <ResumeSection />} */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
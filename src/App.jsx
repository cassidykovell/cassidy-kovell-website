import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import HelloSection from './HelloSection';
import AboutMeSection from './AboutMeSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('aboutMe'); 

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <Header handleNavClick={handleNavClick} />
      <Nav handleNavClick={handleNavClick} />
      <main>
        {activeSection === 'hello' && <HelloSection />}
        {activeSection === 'aboutMe' && <AboutMeSection />}
        {activeSection === 'work' && <WorkSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
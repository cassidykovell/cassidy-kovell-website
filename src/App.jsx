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
      <div id="header">
      <Header />
      <Nav />
      </div>
      <main>
        <section id="hello">
          <h2>Cassidy Kovell</h2>
          <p id="title">Full Stack Web Developer.</p>
        </section>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
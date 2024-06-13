import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';

const App = () => {
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
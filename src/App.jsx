import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="my-body">
      <Header />
      <main className="page">
        <Hero />
        <div className="space" id="job"></div>
        <div className="updating-span-container">
          <span className="updating">IN AGGIORNAMENTO</span>
        </div>
        <div className="title-container">
          <h2 className="title-section">I miei progetti</h2>
        </div>
        <Projects />
        <div className="space" id="cta"></div>
        <CTA />
      </main>
      <div className="space"></div>
      <Footer />
    </div>
  );
}

export default App;

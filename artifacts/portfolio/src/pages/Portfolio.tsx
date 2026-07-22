import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Experience from '../components/portfolio/Experience';
import Projects from '../components/portfolio/Projects';
import Achievements from '../components/portfolio/Achievements';
import Education from '../components/portfolio/Education';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

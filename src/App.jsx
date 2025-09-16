import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Optional
import './utils/themeToggle.js'; // Dev toggle utility

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> {/* Optional */}
    </div>
  );
}

export default App;
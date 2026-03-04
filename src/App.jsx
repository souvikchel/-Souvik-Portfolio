import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from "./components/Certifications";
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  useEffect(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
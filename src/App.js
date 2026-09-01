import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from './Components/Nav-bar';
import HoverGrid from './Components/HoverGrid';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Github, Linkedin } from 'react-bootstrap-icons';
import Contact from './Components/Contact';
import Projects from './Projects';
import CaseStudy from './CaseStudy';

import weatherLensCaseStudy from './weatherLensCaseStudy';
import timesheetCaseStudy from './FDMCaseStudy';
import mazeRun from './MazeRunCaseStudy';
import flora from './FloraCaseStudy';

import cv from './assets/CV.pdf';
import image from './assets/MainASCII.png';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Prevent the browser from restoring its previous scroll position.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If a hash exists, scroll to that section.
    if (hash) {
      const id = hash.substring(1);

      const timeout = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);

      return () => clearTimeout(timeout);
    }

    // Otherwise always start at the top.
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (

    <div className="App">
      <NavBar />

      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <div className="hero-section">
                <HoverGrid rows={14} cols={28} />

                <div className="hero-content">

                  <div className="hero-text">
                    <p className="hero-welcome">Welcome to</p>

                    <h1 className="hero-title">
                      Fariha's Portfolio
                    </h1>

                    <h2 className="hero-subtitle">
                      UX Web Developer / Designer
                    </h2>

                    <p className="hero-bio">
                      Computer Science student at QMUL bridging the gap
                      between design and development.
                    </p>

                    <div className="hero-buttons">
                      <a
                        href={cv}
                        className="btn-outline"
                        download
                      >
                        CV
                      </a>

                      <a
                        href="#contact"
                        className="btn-outline"
                      >
                        Contact me!
                      </a>
                    </div>

                    <div className="hero-icons">
                      <a
                        href="https://github.com/https-fariha"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={31} color="#5a8fa8" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/fariha-a-8a247333b"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin size={31} color="#5a8fa8" />
                      </a>
                    </div>
                  </div>

                  <img
                    src={image}
                    width={836}
                    height={981}
                    alt="Fariha"
                  />

                </div>
              </div>

              <Projects />
            </>
          }
        />

        {/* Case study pages */}
        <Route
          path="/projects/weatherlens"
          element={
            <CaseStudy data={weatherLensCaseStudy} />
          }
        />

        <Route
          path="/projects/timesheet"
          element={
            <CaseStudy data={timesheetCaseStudy} />
          }
        />

        <Route
          path="/projects/maze-run"
          element={
            <CaseStudy data={mazeRun} />
          }
        />

        <Route
          path="/projects/flora"
          element={
            <CaseStudy data={flora} />
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      {/* Contact footer */}
      <div
        className="contact-section"
        id="contact"
      >
        <Contact />
      </div>

    </div>
  );
}

export default App;


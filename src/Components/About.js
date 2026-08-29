import HoverGrid from './HoverGrid';
import './About.css';
import receipt from '../assets/Receipt.png';

export default function About() {
  return (
    <main className="about-page">

      {/* Background */}
      <div className="about-hovergrid">
        <HoverGrid rows={18} cols={32} />
      </div>

      {/* Page content */}
      <div className="about-content">

        {/* Header */}
        <section className="about-header">
          <p className="about-label">ABOUT ME</p>
          <h1>Who am I?</h1>
        </section>


        {/* Main introduction */}
        <section className="about-intro">

          <div className="bio">
            <span className="section-number">01 — BIO</span>

            <p>
              My primary area of interest is front-end web development,
              particularly the intersection between technology, design
              and user behaviour.
            </p>

            <p>
              I enjoy exploring how principles of psychology can be applied
              to create intuitive and engaging digital experiences,
              combining my passion for computer science with creativity.
            </p>

            <p>
              I am particularly interested in creating interfaces that are
              not only functional, but also visually engaging and accessible
              to the people using them.
            </p>
          </div>


          {/* Receipt */}
          <div className="receipt-wrapper">
            <img
              src={receipt}
              alt="Pprojects presented as a receipt"
              className="receipt-image"
            />
          </div>

        </section>


        {/* Skills */}
        <section className="skills-section">

          <div className="section-heading">
            <span className="section-number">02 — SKILLS</span>
            <h2>What I work with.</h2>
          </div>

          <div className="skills-bar">
            <div className="skill">FIGMA</div>
            <div className="skill">PYTHON</div>
            <div className="skill">CSS</div>
            <div className="skill">HTML</div>
            <div className="skill">JAVASCRIPT</div>
            <div className="skill">JAVA</div>
          </div>

        </section>


        {/* Projects */}
        <section className="about-projects">

          <div className="section-heading">
            <span className="section-number">03 — PROJECTS</span>
            <h2>What I've worked on.</h2>
          </div>


          <div className="project-list">

            <article className="about-project">
              <div className="project-number">01</div>

              <div>
                <h3>WeatherLens</h3>
                <p>
                  A weather web application designed to help photographers
                  plan shoots around lighting and weather conditions.
                </p>
                <span className="project-tech">REACT · FIGMA</span>
              </div>
            </article>


            <article className="about-project">
              <div className="project-number">02</div>

              <div>
                <h3>FDM Timesheet App</h3>
                <p>
                  A client-focused timekeeping web application built with
                  user-centred access control and maintainability in mind.
                </p>
                <span className="project-tech">REACT · NODE</span>
              </div>
            </article>


            <article className="about-project">
              <div className="project-number">03</div>

              <div>
                <h3>Maze Run Game</h3>
                <p>
                  A retro computer game created for children, combining
                  game mechanics, interaction and playful visual design.
                </p>
                <span className="project-tech">PYGAME · PYTHON</span>
              </div>
            </article>


            <article className="about-project">
              <div className="project-number">04</div>

              <div>
                <h3>ThaaI Supply</h3>
                <p>
                  A UX and branding project focused on redesigning a
                  Desi wedding brand around its target demographic.
                </p>
                <span className="project-tech">FIGMA · SHOPIFY</span>
              </div>
            </article>

          </div>

        </section>

      </div>
    </main>
  );
}
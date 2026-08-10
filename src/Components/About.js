import HoverGrid from './HoverGrid';
import './About.css';
import receipt from '../assets/Receipt.png';
import skills from '../assets/skills.png';
import ascii from '../assets/ascii2.png';

export default function About() {
  return (
    <div className="about-page">
      <HoverGrid rows={14} cols={28} />

      <div className="about-layout">
        <h1 className="about-title">About me</h1>

        <div className="about-grid">

          {/* 1 — Bio */}
          <div className="about-left">
            <div className="bio">
              <p>My primary area of interest is front-end web development,
              particularly the intersection between technology, design and user behaviour.</p>
              <p>I enjoy exploring how principles of psychology can be applied to create intuitive
              and engaging digital experiences, combining my passion for computer science with creativity.</p>
            </div>
            <img className="ascii-img" src={ascii} alt="" aria-hidden="true" />
          </div>

          {/* 2 — Images (desktop: stacked in right column) */}
          <div className="about-right">
            <div className="images-stack">
              <img className="receipt-img" src={receipt} alt="Projects receipt" />
              <img className="skills-img"  src={skills}  alt="Skills" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


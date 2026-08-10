import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const { title, tagline, tools, theme, liveUrl, caseStudyPath } = project;

  return (
    <div className={`project-card project-card--${theme}`}>
      <div className="project-card__top">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__tagline">{tagline}</p>
      </div>

      <div className="project-card__bottom">
        <div className="project-card__tags">
          {tools.map((tool) => (
            <span key={tool} className="project-tag">{tool}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {caseStudyPath && (
            <Link to={caseStudyPath} className="project-btn project-btn--primary">
              Case study
            </Link>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-btn project-btn--secondary"
            >
              Visit project
            </a>
          )}
          {!caseStudyPath && !liveUrl && (
            <span className="project-btn project-btn--disabled">Coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

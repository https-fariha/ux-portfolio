import { useMemo, useState } from 'react';
import projects from './projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.flatMap((p) => p.categories)));
    return ['All', ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${activeFilter === category ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
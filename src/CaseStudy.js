import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

function slugify(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '-');
}

function Block({ block }) {
  switch (block.type) {
    case 'text':
      return <p className="cs-text">{block.content}</p>;

    case 'image':
      return (
        <figure className="cs-figure">
          <img
            src={block.src}
            alt={block.caption || ''}
            className={`cs-image ${block.className || ''}`}
          />

          {block.caption && (
            <figcaption className="cs-caption">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'imageGrid':
  return (
    <div className="cs-image-grid">
      {block.images.map((image, i) => {
        const toggleId = `lightbox-${slugify(image.src)}`;

        return (
          <figure className="cs-image-grid__figure" key={i}>
            <input
              type="checkbox"
              id={toggleId}
              className="cs-lightbox-toggle"
            />

            <label
              htmlFor={toggleId}
              className="cs-image-grid__frame"
              style={block.aspectRatio ? { aspectRatio: block.aspectRatio } : undefined}
            >
              <img
                src={image.src}
                alt={image.alt || image.caption || ''}
                className="cs-image-grid__image"
              />
            </label>

            <label htmlFor={toggleId} className="cs-lightbox-overlay">
              <img
                src={image.src}
                alt=""
                className="cs-lightbox-overlay__image"
              />
            </label>

            {image.caption && (
              <figcaption className="cs-caption">
                {image.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );

    case 'twoColumn':
      return (
        <div className="cs-two-column">
          <div className="cs-column">
            <h3>{block.left.heading}</h3>

            <ul>
              {block.left.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cs-column">
            <h3>{block.right.heading}</h3>

            <ul>
              {block.right.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function CaseStudy({ data }) {
  const [activeStep, setActiveStep] = useState(data.steps[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [data.sections]);

  return (
    <div className="case-study">
      <nav className="cs-stepnav">
        {data.steps.map((step, index) => (
          <div className="cs-step" key={step.id}>
            <a
              href={`#${step.id}`}
              className={`cs-step__circle ${
                activeStep === step.id
                  ? 'cs-step__circle--active'
                  : ''
              }`}
            >
              {index + 1}
            </a>

            <span className="cs-step__label">
              {step.label}
            </span>

            {index < data.steps.length - 1 && (
              <span className="cs-step__line" />
            )}
          </div>
        ))}
      </nav>

      <header className="cs-hero">
        {data.heroImage && (
          <div className="cs-hero-image-wrap">
            <img
              src={data.heroImage}
              alt={data.title}
              className="cs-hero-image"
            />

            <div className="cs-hero-overlay" />
          </div>
        )}

        <div className="cs-hero-content">
          <Link to="/#projects" className="cs-back">
            &larr; Back to projects
          </Link>

          <h1 className="cs-title">
            {data.title}
          </h1>

          <p className="cs-subtitle">
            {data.subtitle}
          </p>

          <div className="cs-meta">
            {data.meta.map((item) => (
              <div
                className="cs-meta__item"
                key={item.label}
              >
                <span className="cs-meta__label">
                  {item.label}
                </span>

                <span className="cs-meta__value">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {data.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="cs-section"
          ref={(element) => {
            sectionRefs.current[section.id] = element;
          }}
        >
          <h2 className="cs-section-heading">
            {section.heading}
          </h2>

          <div className="cs-section-content">
            {section.blocks.map((block, i) => (
              <Block
                block={block}
                key={i}
              />
            ))}
          </div>
        </section>
      ))}

      {data.nextProject && (
        <footer className="cs-footer">
          <span className="cs-footer__label">
            Next project
          </span>

          <Link
            to={data.nextProject.path}
            className="cs-footer__link"
          >
            {data.nextProject.title} &rarr;
          </Link>
        </footer>
      )}
    </div>
  );
}

export default CaseStudy;
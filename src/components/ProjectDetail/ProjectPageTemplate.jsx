import { Link } from 'react-router-dom'
import ProjectSignatureVisual from './ProjectSignatureVisual'

const Section = ({ title, children }) => (
  <section className="project-section">
    <header className="project-section__header">
      <h2>{title}</h2>
    </header>
    <div className="project-section__body">{children}</div>
  </section>
)

const LinkButton = ({ href, children }) => {
  if (!href) {
    return (
      <span className="neon-glitch-btn project-link-btn is-disabled" aria-disabled="true">
        <span>{children}</span>
      </span>
    )
  }

  return (
    <a className="neon-glitch-btn project-link-btn" href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
    </a>
  )
}

const ProjectPageTemplate = ({ project }) => {
  const screenshotCards =
    project.resultVisuals?.length > 0
      ? project.resultVisuals.map((entry) => ({
          ...entry,
          image: entry.image || project.coverImage,
        }))
      : [
          {
            title: 'Primary Interface',
            caption: 'Current UI snapshot used as placeholder. Replace with final UX capture.',
            image: project.coverImage,
          },
          {
            title: 'Execution View',
            caption: 'Operational or terminal-like output preview placeholder.',
            image: project.coverImage,
          },
        ]

  return (
    <article className={`project-case-study project-case-study--${project.decorative || 'default'}`}>
      <ProjectSignatureVisual variant={project.decorative} />

      <section className="project-hero">
        <div className="project-hero__content">
          <p className="project-hero__eyebrow">Case Study // Engineering Breakdown</p>
          <h1>{project.title}</h1>
          <div className="project-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="project-hero__summary">{project.heroParagraph}</p>
          {project.metrics?.length ? (
            <div className="project-metrics-strip">
              {project.metrics.map((metric) => (
                <article key={metric.label} className="project-metric">
                  <h3>{metric.label}</h3>
                  <p>{metric.value}</p>
                </article>
              ))}
            </div>
          ) : null}
          <div className="project-hero__actions">
            <LinkButton href={project.links.githubUrl}>GitHub</LinkButton>
            <LinkButton href={project.links.demoUrl}>Live Demo</LinkButton>
            <LinkButton href={project.links.reportUrl}>Report PDF</LinkButton>
            <Link to="/" className="neon-glitch-btn project-link-btn project-link-btn--ghost">
              <span>Back Home</span>
            </Link>
          </div>
        </div>
        <div className="project-hero__media">
          <img src={project.coverImage} alt={`${project.title} preview`} />
        </div>
      </section>

      <Section title="Problem">
        <div className="project-problem-grid">
          <div>
            <h3>Challenge</h3>
            <p>{project.problem.statement}</p>
          </div>
          <div>
            <h3>Who It Serves</h3>
            <p>{project.problem.audience}</p>
          </div>
          <div>
            <h3>Why It Matters</h3>
            <p>{project.problem.impact}</p>
          </div>
        </div>
      </Section>

      <Section title="Key Features">
        <div className="feature-grid">
          {project.features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <ul>
                {feature.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Architecture">
        <div className="architecture-layout">
          <div className="architecture-map">
            {project.architecture.map((layer) => (
              <article key={layer.label} className="architecture-node">
                <h3>{layer.label}</h3>
                <p>{layer.detail}</p>
              </article>
            ))}
          </div>
          <aside className="architecture-flow">
            <h3>Data Flow</h3>
            <ol>
              {project.architectureFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </aside>
        </div>
      </Section>

      <Section title="Technical Implementation">
        <div className="implementation-grid">
          <article>
            <h3>Backend</h3>
            <ul>
              {project.implementation.backend.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Frontend</h3>
            <ul>
              {project.implementation.frontend.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>AI / ML Logic</h3>
            <ul>
              {project.implementation.ai.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Optimization</h3>
            <ul>
              {project.implementation.optimization.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Challenges & Solutions">
        <div className="challenge-list">
          {project.challenges.map((item) => (
            <article key={item.challenge}>
              <h3>{item.challenge}</h3>
              <p>{item.solution}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Results / Demo">
        <div className="results-grid">
          {screenshotCards.map((card) => (
            <article key={card.title} className="result-card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.caption}</p>
            </article>
          ))}
          <article className="result-card result-card--output">
            <h3>Example Outputs</h3>
            <ul>
              {project.resultNotes.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Future Improvements">
        <ul className="future-list">
          {project.future.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </Section>
    </article>
  )
}

export default ProjectPageTemplate

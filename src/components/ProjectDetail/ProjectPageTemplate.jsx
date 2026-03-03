import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ href, children }) => {
  if (!href) {
    return (
      <span className="cmd-btn cmd-btn--disabled" aria-disabled="true">
        {children}
      </span>
    )
  }
  return (
    <a className="cmd-btn" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

const implLabels = {
  backend: 'Backend',
  frontend: 'Frontend',
  ai: 'AI / ML',
  optimization: 'Optimization',
}

const ProjectPageTemplate = ({ project }) => {
  const [clock, setClock] = useState(() =>
    new Date().toLocaleTimeString('en-US', { hour12: false })
  )

  useEffect(() => {
    const t = setInterval(
      () => setClock(new Date().toLocaleTimeString('en-US', { hour12: false })),
      1000
    )
    return () => clearInterval(t)
  }, [])

  const visuals =
    project.resultVisuals?.length > 0
      ? project.resultVisuals.map((v) => ({ ...v, image: v.image || project.coverImage }))
      : null

  return (
    <div className={`dossier dossier--${project.decorative || 'default'}`}>

      {/* ── STICKY COMMAND HEADER ── */}
      <header className="dossier-header">
        <div className="dossier-header__left">
          <span className="dossier-header__case">CASE FILE</span>
          <span className="dossier-header__sep" aria-hidden="true">▸</span>
          <span className="dossier-header__name">{project.title}</span>
        </div>
        <div className="dossier-header__sys" aria-hidden="true">
          <span className="dossier-header__sys-dot" />
          <span>SYS:ONLINE</span>
          <span className="dossier-header__sys-sep">|</span>
          <span className="dossier-header__clock">{clock}</span>
        </div>
        <nav className="dossier-header__nav" aria-label="Project links">
          <LinkButton href={project.links.githubUrl}>GitHub</LinkButton>
          <LinkButton href={project.links.demoUrl}>
            {project.links.demoUrl ? 'Live Demo' : 'Demo Soon'}
          </LinkButton>
          <LinkButton href={project.links.reportUrl}>Report</LinkButton>
          <Link to="/" className="cmd-btn cmd-btn--ghost">← Home</Link>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="dossier-hero" aria-label="Project overview">
        <div className="dossier-hero__left">
          <div className="dossier-hero__eyebrow">
            <span>OPERATION PROFILE</span>
            <span className="dossier-hero__eyebrow-sep" aria-hidden="true">//</span>
            <span>CLASSIFICATION: PORTFOLIO</span>
          </div>

          <h1 className="dossier-hero__title">{project.title}</h1>

          <div className="dossier-hero__tags" aria-label="Tech stack">
            {project.stack.map((item) => (
              <span key={item} className="dossier-hero__tag">{item}</span>
            ))}
          </div>

          {project.metrics?.length > 0 && (
            <div className="dossier-metrics" aria-label="Key metrics">
              {project.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="dossier-metric"
                  style={{ '--metric-delay': `${0.6 + i * 0.15}s` }}
                >
                  <p className="dossier-metric__val">{m.value}</p>
                  <span className="dossier-metric__lbl">{m.label}</span>
                  <div className="dossier-metric__bar" aria-hidden="true">
                    <div className="dossier-metric__bar-fill" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dossier-hero__right">
          <div className="dossier-hero__frame">
            <span className="dossier-hero__corner dossier-hero__corner--tl" aria-hidden="true" />
            <span className="dossier-hero__corner dossier-hero__corner--tr" aria-hidden="true" />
            <span className="dossier-hero__corner dossier-hero__corner--bl" aria-hidden="true" />
            <span className="dossier-hero__corner dossier-hero__corner--br" aria-hidden="true" />
            <div className="dossier-hero__scanline" aria-hidden="true" />
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={`${project.title} visual capture`}
                className="dossier-hero__img"
              />
            ) : (
              <div className="dossier-hero__media-ph">[MEDIA_PLACEHOLDER_HERO_3D]</div>
            )}
            <div className="dossier-hero__frame-badge" aria-hidden="true">VISUAL CAPTURE</div>
          </div>
          <p className="dossier-hero__status">
            <span className="dossier-hero__status-dot" aria-hidden="true" />
            STATUS: ACTIVE // CLEARANCE: OPEN
          </p>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <div className="dossier-marquee" aria-hidden="true">
        <div className="dossier-marquee__track">
          {[...project.stack, ...project.stack, ...project.stack, ...project.stack].map((item, i) => (
            <span key={i} className="dossier-marquee__item">
              {item}
              <span className="dossier-marquee__dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 01 · MISSION BRIEF ── */}
      <section className="dossier-section dossier-brief">
        <div className="dossier-section__idx">
          <span className="dossier-section__num">01</span>
          <span className="dossier-section__lbl">BRIEF</span>
        </div>
        <div className="dossier-brief__body">
          <h2 className="dossier-section__heading">Mission Overview</h2>
          <p className="dossier-brief__text">{project.heroParagraph}</p>
        </div>
      </section>

      {/* ── 02 · INTEL BENTO (Challenge) ── */}
      <section className="dossier-section dossier-intel">
        <div className="dossier-section__idx">
          <span className="dossier-section__num">02</span>
          <span className="dossier-section__lbl">INTEL</span>
        </div>
        <div className="dossier-intel__grid">
          <div className="dossier-intel__main">
            <span className="dossier-intel__stamp">PROBLEM IDENTIFIED</span>
            <p className="dossier-intel__text">{project.problem.statement}</p>
          </div>
          <div className="dossier-intel__side">
            <div className="dossier-intel__cell">
              <span className="dossier-intel__cell-label">WHO IT SERVES</span>
              <p>{project.problem.audience}</p>
            </div>
            <div className="dossier-intel__cell">
              <span className="dossier-intel__cell-label">WHY IT MATTERS</span>
              <p>{project.problem.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · SYSTEM ARCHITECTURE ── */}
      <section className="dossier-section dossier-arch">
        <div className="dossier-section__idx">
          <span className="dossier-section__num">03</span>
          <span className="dossier-section__lbl">ARCH</span>
        </div>
        <div className="dossier-arch__body">
          <h2 className="dossier-section__heading">System Architecture</h2>

          {/* Flow pipeline */}
          <div className="dossier-arch__flow" role="list" aria-label="Architecture flow">
            {project.architectureFlow.map((step, i) => (
              <div key={i} className="dossier-arch__flow-entry" role="listitem">
                <div className="dossier-arch__flow-node">
                  <span className="dossier-arch__flow-idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="dossier-arch__flow-step">{step}</span>
                </div>
                {i < project.architectureFlow.length - 1 && (
                  <span className="dossier-arch__flow-arrow" aria-hidden="true">›</span>
                )}
              </div>
            ))}
          </div>

          {/* Architecture component cards */}
          <div className="dossier-arch__grid">
            {project.architecture.map((item) => (
              <div key={item.label} className="dossier-arch__card">
                <span className="dossier-arch__card-label">{item.label}</span>
                <p className="dossier-arch__card-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 · CAPABILITIES MATRIX (Features) ── */}
      <section className="dossier-section dossier-caps">
        <div className="dossier-section__idx">
          <span className="dossier-section__num">04</span>
          <span className="dossier-section__lbl">CAPS</span>
        </div>
        <div className="dossier-caps__body">
          <h2 className="dossier-section__heading">System Capabilities</h2>
          <div className="dossier-caps__grid">
            {project.features.map((feature, i) => (
              <article key={feature.title} className="dossier-cap">
                <div className="dossier-cap__header">
                  <span className="dossier-cap__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="dossier-cap__title">{feature.title}</h3>
                </div>
                <ul className="dossier-cap__list">
                  {feature.bullets.map((b) => (
                    <li key={b}>
                      <span aria-hidden="true">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 · IMPLEMENTATION DEEP DIVE ── */}
      <section className="dossier-section dossier-impl">
        <div className="dossier-section__idx">
          <span className="dossier-section__num">05</span>
          <span className="dossier-section__lbl">IMPL</span>
        </div>
        <div className="dossier-impl__body">
          <h2 className="dossier-section__heading">Implementation</h2>
          <div className="dossier-impl__grid">
            {Object.entries(project.implementation)
              .filter(([, bullets]) => bullets && bullets.length > 0)
              .map(([key, bullets]) => (
                <div key={key} className="dossier-impl__block">
                  <h3 className="dossier-impl__block-label">
                    {implLabels[key] || key}
                  </h3>
                  <ul className="dossier-impl__list">
                    {bullets.map((b, i) => (
                      <li key={i}>
                        <span aria-hidden="true">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── 06 · CHALLENGES & SOLUTIONS ── */}
      {project.challenges?.length > 0 && (
        <section className="dossier-section dossier-challenges">
          <div className="dossier-section__idx">
            <span className="dossier-section__num">06</span>
            <span className="dossier-section__lbl">CHALL</span>
          </div>
          <div className="dossier-challenges__body">
            <h2 className="dossier-section__heading">Challenges &amp; Solutions</h2>
            <div className="dossier-challenges__list">
              {project.challenges.map((c, i) => (
                <div key={i} className="dossier-challenge">
                  <div className="dossier-challenge__col">
                    <span className="dossier-challenge__label">Challenge</span>
                    <p className="dossier-challenge__text">{c.challenge}</p>
                  </div>
                  <div className="dossier-challenge__col dossier-challenge__col--solution">
                    <span className="dossier-challenge__label dossier-challenge__label--accent">Solution</span>
                    <p className="dossier-challenge__text">{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 07 · VISUAL INTELLIGENCE (Gallery) ── */}
      {visuals && (
        <section className="dossier-section dossier-gallery">
          <div className="dossier-section__idx">
            <span className="dossier-section__num">07</span>
            <span className="dossier-section__lbl">VISUALS</span>
          </div>
          <div className="dossier-gallery__body">
            <h2 className="dossier-section__heading">Visual Intelligence</h2>
            <div className="dossier-gallery__grid">
              {visuals.map((card, i) => (
                <figure key={card.title} className="dossier-gallery__frame">
                  <div className="dossier-gallery__img-wrap">
                    <img src={card.image} alt={card.title} loading="lazy" />
                    <div className="dossier-gallery__capture" aria-hidden="true">
                      CAPTURE {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <figcaption className="dossier-gallery__caption">
                    <strong>{card.title}</strong>
                    {card.caption && <span>{card.caption}</span>}
                  </figcaption>
                </figure>
              ))}
              <div className="dossier-gallery__ph" role="img" aria-label="Video demo placeholder">
                <div className="dossier-gallery__ph-inner">
                  <span className="dossier-gallery__ph-icon" aria-hidden="true">▶</span>
                  <span>[VIDEO_PLACEHOLDER_DEMO]</span>
                  <span className="dossier-gallery__ph-sub">Interactive demo · coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 07/08 · TERMINAL OUTPUT + ROADMAP ── */}
      <section className="dossier-section dossier-terminal">
        <div className="dossier-section__idx">
          <span className="dossier-section__num">{visuals ? '08' : '07'}</span>
          <span className="dossier-section__lbl">OUTPUT</span>
        </div>
        <div className="dossier-terminal__body">

          {/* Results log panel */}
          <div className="dossier-terminal__panel">
            <div className="dossier-terminal__bar">
              <span className="dossier-terminal__dot" />
              <span className="dossier-terminal__dot" />
              <span className="dossier-terminal__dot" />
              <code className="dossier-terminal__file">operational-results.log</code>
            </div>
            <div className="dossier-terminal__content">
              <div className="dossier-terminal__cmd-line">
                <span className="dossier-terminal__ps">$</span>
                <span>cat operational-results.log</span>
              </div>
              {project.resultNotes.map((note) => (
                <div key={note} className="dossier-terminal__line">
                  <span className="dossier-terminal__arrow" aria-hidden="true">›</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap panel */}
          <div className="dossier-terminal__panel dossier-terminal__panel--dark">
            <div className="dossier-terminal__bar">
              <span className="dossier-terminal__dot" />
              <span className="dossier-terminal__dot" />
              <span className="dossier-terminal__dot" />
              <code className="dossier-terminal__file">roadmap.sh</code>
            </div>
            <div className="dossier-roadmap">
              {project.future.map((entry) => (
                <div key={entry} className="dossier-roadmap__item">
                  <span className="dossier-roadmap__badge dossier-roadmap__badge--planned">
                    PLANNED
                  </span>
                  <span className="dossier-roadmap__text">{entry}</span>
                  <span className="dossier-roadmap__chevron" aria-hidden="true">›</span>
                </div>
              ))}
              <div className="dossier-terminal__line" aria-hidden="true">
                <span className="dossier-terminal__ps">$</span>
                <span className="dossier-terminal__cursor">█</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── EOF ── */}
      <footer className="dossier-eof">
        <div className="dossier-eof__rule" aria-hidden="true" />
        <span className="dossier-eof__stamp">END OF BRIEF</span>
        <div className="dossier-eof__rule" aria-hidden="true" />
      </footer>

    </div>
  )
}

export default ProjectPageTemplate

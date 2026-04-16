import cvSnapshot from '../../data/cvSnapshot'
import './index.scss'

const CvSnapshot = () => {
  return (
    <section className="cv-snapshot" aria-label="CV snapshot">
      {/* ── Header ── */}
      <header className="cv-snapshot__header">
        <div className="cv-snapshot__title-block">
          <h3 className="cv-snapshot__title">CV Snapshot</h3>
          <p className="cv-snapshot__subtitle">Visual Timeline</p>
        </div>
        <a
          className="cv-snapshot__download-btn"
          href="/Williams_Lendjoungou_Resume.pdf"
          download="Williams_Lendjoungou_Resume.pdf"
          aria-label="Download CV as PDF"
        >
          ↓ Download CV
        </a>
      </header>

      {/* ── Experience timeline ── */}
      <article
        className="cv-snapshot__timeline-wrapper"
        aria-labelledby="cv-exp-heading"
      >
        <h4 id="cv-exp-heading" className="cv-snapshot__sr-only">Experience</h4>
        <ol className="cv-snapshot__timeline">
          {cvSnapshot.experience.map((item, idx) => (
            <li
              key={`${item.company}-${item.role}-${idx}`}
              className="cv-snapshot__node"
            >
              <div className="cv-snapshot__node-capsule">
                <span className="cv-snapshot__node-role">{item.role}</span>
                {item.company && (
                  <span className="cv-snapshot__node-company">
                    <span className="cv-snapshot__node-at">@</span>
                    {item.company}
                  </span>
                )}
              </div>

              <div className="cv-snapshot__node-body">
                <div className="cv-snapshot__node-meta">
                  <span className="cv-snapshot__node-period">{item.period}</span>
                  {item.location && (
                    <span className="cv-snapshot__node-location">{item.location}</span>
                  )}
                </div>

                {item.metrics?.length > 0 && (
                  <div
                    className="cv-snapshot__metrics"
                    aria-label="Impact metrics"
                  >
                    {item.metrics.map((m) => (
                      <span key={m} className="cv-snapshot__metric-pill">
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="cv-snapshot__bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {item.stack?.length > 0 && (
                  <div className="cv-snapshot__chips" aria-label="Tech stack">
                    {item.stack.map((s) => (
                      <span key={s} className="cv-snapshot__chip">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </article>

      {/* ── Education + Leadership split ── */}
      <div className="cv-snapshot__split">
        <article
          className="cv-snapshot__block"
          aria-labelledby="cv-edu-heading"
        >
          <h4 id="cv-edu-heading" className="cv-snapshot__block-title">Education</h4>
          <ul className="cv-snapshot__edu-list">
            {cvSnapshot.education.map((e) => (
              <li key={e.school} className="cv-snapshot__edu-item">
                <div className="cv-snapshot__edu-header">
                  <strong className="cv-snapshot__edu-school">{e.school}</strong>
                  <span className="cv-snapshot__edu-period">{e.period}</span>
                </div>
                <span className="cv-snapshot__edu-degree">
                  {e.degree}
                  {e.minor ? ` · ${e.minor}` : ''}
                </span>
                {e.highlights?.length > 0 && (
                  <div className="cv-snapshot__chips cv-snapshot__chips--tight">
                    {e.highlights.map((h) => (
                      <span
                        key={h}
                        className="cv-snapshot__chip cv-snapshot__chip--highlight"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>

        <article
          className="cv-snapshot__block"
          aria-labelledby="cv-lead-heading"
        >
          <h4 id="cv-lead-heading" className="cv-snapshot__block-title">Leadership</h4>
          <ul className="cv-snapshot__lead-list">
            {cvSnapshot.leadership.map((l) => (
              <li key={l.title} className="cv-snapshot__lead-item">
                <div className="cv-snapshot__lead-header">
                  <strong className="cv-snapshot__lead-title">{l.title}</strong>
                  <span className="cv-snapshot__edu-period">{l.period}</span>
                </div>
                <p className="cv-snapshot__lead-bullet">{l.bullet}</p>
                {l.stack?.length > 0 && (
                  <div className="cv-snapshot__chips cv-snapshot__chips--tight">
                    {l.stack.map((s) => (
                      <span key={s} className="cv-snapshot__chip">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default CvSnapshot

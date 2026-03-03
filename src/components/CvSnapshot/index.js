import cvSnapshot from '../../data/cvSnapshot'
import './index.scss'

const CvSnapshot = () => {
  return (
    <section className="cv-snapshot" aria-label="CV snapshot">
      <p className="cv-snapshot__kicker">{cvSnapshot.subtitle}</p>

      <div className="cv-snapshot__bento">

        {/* ── Experience ── */}
        <article
          className="cv-snapshot__block cv-snapshot__block--experience"
          aria-labelledby="cv-exp-heading"
        >
          <h4 id="cv-exp-heading" className="cv-snapshot__block-title">Experience</h4>
          <ul className="cv-snapshot__timeline">
            {cvSnapshot.experience.map((item) => (
              <li key={`${item.company}-${item.role}`} className="cv-snapshot__job">
                <div className="cv-snapshot__job-header">
                  <div className="cv-snapshot__job-meta">
                    <strong className="cv-snapshot__job-role">{item.role}</strong>
                    <span className="cv-snapshot__job-company">
                      {item.company} · {item.location}
                    </span>
                  </div>
                  <span className="cv-snapshot__job-period">{item.period}</span>
                </div>

                {item.metrics.length > 0 && (
                  <div className="cv-snapshot__metrics" aria-label="Impact metrics">
                    {item.metrics.map((m) => (
                      <span key={m} className="cv-snapshot__metric-pill">{m}</span>
                    ))}
                  </div>
                )}

                <ul className="cv-snapshot__bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {item.stack.length > 0 && (
                  <div className="cv-snapshot__chips" aria-label="Tech stack">
                    {item.stack.map((s) => (
                      <span key={s} className="cv-snapshot__chip">{s}</span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>

        {/* ── Skills ── */}
        <article
          className="cv-snapshot__block cv-snapshot__block--skills"
          aria-labelledby="cv-skills-heading"
        >
          <h4 id="cv-skills-heading" className="cv-snapshot__block-title">Skills</h4>
          <div className="cv-snapshot__skill-groups">
            {Object.entries(cvSnapshot.skills).map(([group, values]) => (
              <div key={group} className="cv-snapshot__skill-group">
                <h5 className="cv-snapshot__skill-label">{group}</h5>
                <div className="cv-snapshot__chips">
                  {values.map((v) => (
                    <span key={v} className="cv-snapshot__chip">{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* ── Projects ── */}
        <article
          className="cv-snapshot__block cv-snapshot__block--projects"
          aria-labelledby="cv-proj-heading"
        >
          <h4 id="cv-proj-heading" className="cv-snapshot__block-title">Projects</h4>
          <ul className="cv-snapshot__project-list">
            {cvSnapshot.projects.map((p) => (
              <li key={p.title} className="cv-snapshot__project">
                <div className="cv-snapshot__project-header">
                  <strong className="cv-snapshot__project-title">{p.title}</strong>
                  <div className="cv-snapshot__chips" aria-label="Tech stack">
                    {p.stack.map((s) => (
                      <span key={s} className="cv-snapshot__chip cv-snapshot__chip--accent">{s}</span>
                    ))}
                  </div>
                </div>
                <p className="cv-snapshot__project-bullet">{p.bullet}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* ── Education & Leadership ── */}
        <article
          className="cv-snapshot__block cv-snapshot__block--edu-lead"
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
                  {e.degree}{e.minor ? ` · ${e.minor}` : ''}
                </span>
                <div className="cv-snapshot__chips cv-snapshot__chips--tight">
                  {e.highlights.map((h) => (
                    <span key={h} className="cv-snapshot__chip cv-snapshot__chip--highlight">{h}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <h4 className="cv-snapshot__block-title cv-snapshot__block-title--sub">Leadership</h4>
          <ul className="cv-snapshot__lead-list">
            {cvSnapshot.leadership.map((l) => (
              <li key={l.title} className="cv-snapshot__lead-item">
                <div className="cv-snapshot__lead-header">
                  <strong className="cv-snapshot__lead-title">{l.title}</strong>
                  <span className="cv-snapshot__edu-period">{l.period}</span>
                </div>
                <div className="cv-snapshot__chips">
                  {l.stack.map((s) => (
                    <span key={s} className="cv-snapshot__chip">{s}</span>
                  ))}
                </div>
                <p className="cv-snapshot__project-bullet">{l.bullet}</p>
              </li>
            ))}
          </ul>
        </article>

      </div>
    </section>
  )
}

export default CvSnapshot

import cvSnapshot from '../../data/cvSnapshot'
import './index.scss'

const CvSnapshot = () => {
  return (
    <section className="cv-snapshot" aria-label="CV snapshot">
      <p className="cv-snapshot__kicker">{cvSnapshot.subtitle}</p>

      <div className="cv-snapshot__highlights">
        {cvSnapshot.highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="cv-snapshot__grid">
        <article className="cv-snapshot__block">
          <h4>Experience</h4>
          <ul className="cv-snapshot__timeline">
            {cvSnapshot.experience.map((item) => (
              <li key={`${item.company}-${item.role}`}>
                <div className="cv-snapshot__line-head">
                  <strong>{item.role}</strong>
                  <span>{item.period}</span>
                </div>
                <div className="cv-snapshot__line-sub">{item.company} · {item.location}</div>
                <p>{item.impact}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="cv-snapshot__block">
          <h4>Skills</h4>
          <div className="cv-snapshot__skills">
            {Object.entries(cvSnapshot.skills).map(([group, values]) => (
              <div key={group}>
                <h5>{group}</h5>
                <ul>
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="cv-snapshot__block">
          <h4>Education & Awards</h4>
          <ul className="cv-snapshot__education">
            {cvSnapshot.education.map((item) => (
              <li key={item.school}>
                <strong>{item.school}</strong>
                <span>{item.detail}</span>
                <em>{item.period}</em>
              </li>
            ))}
          </ul>
          <ul className="cv-snapshot__awards">
            {cvSnapshot.certificationsAwards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default CvSnapshot

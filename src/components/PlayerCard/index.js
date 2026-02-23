import { useState } from 'react'
import playerCard from '../../data/playerCard'
import NumberTicker from '../NumberTicker'
import './index.scss'

const RatingZone = () => {
  return (
    <header className="player-card__rating-zone" aria-label="Overall rating">
        <div className="player-card__rating-stack">
          <div className="player-card__rating-value-wrap">
            <NumberTicker
              className="player-card__rating-value"
              data-rating={playerCard.rating}
              value={playerCard.rating}
              startValue={0}
              delay={3.6}
              duration={3800}
            />
          </div>
        <span className="player-card__rating-label">OVERALL</span>
      </div>
      <div className="player-card__role-block">
        <span className="player-card__role-pill">{playerCard.position}</span>
        <h3>{playerCard.title}</h3>
        <p>{playerCard.subtitle}</p>
      </div>
    </header>
  )
}

const StatsGrid = () => (
  <div className="player-card__stats" aria-label="Player ratings stats">
    {playerCard.stats.map((stat, index) => (
      <div className="player-card__stat" key={stat.label}>
        <NumberTicker
          className="player-card__stat-value"
          value={stat.value}
          startValue={0}
          delay={4 + index * 0.18}
          duration={2200}
        />
        <span className="player-card__stat-label">{stat.label}</span>
      </div>
    ))}
  </div>
)

const Details = () => (
  <dl className="player-card__details">
    {playerCard.attributes.map((item) => (
      <div key={item.label} className="player-card__detail-row">
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
      </div>
    ))}
  </dl>
)

const PlayerCard = () => {
  const [imageMissing, setImageMissing] = useState(false)

  return (
    <section className="player-card" aria-label="Player profile card">
      <div className="player-card__shell">
        <RatingZone />

        <div className="player-card__info-zone" aria-label="Player information">
          <div className="player-card__headshot-wrap">
            <div className="player-card__headshot">
              {!imageMissing ? (
                <img
                  src={playerCard.image}
                  alt={playerCard.imageAlt}
                  loading="lazy"
                  onError={() => setImageMissing(true)}
                />
              ) : (
                <div className="player-card__headshot-fallback">PLAYER</div>
              )}
            </div>
          </div>

          <div className="player-card__info-content">
            <StatsGrid />
            <Details />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayerCard

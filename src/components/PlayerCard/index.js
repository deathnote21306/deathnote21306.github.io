import { useState } from 'react'
import playerCard from '../../data/playerCard'
import './index.scss'

const PlayerCard = () => {
  const [imageMissing, setImageMissing] = useState(false)

  return (
    <section className="player-card" aria-label="Player profile card">
      <div className="player-card__body">
        <div className={`player-card__portrait${imageMissing ? ' is-fallback' : ''}`}>
          {!imageMissing ? (
            <img
              src={playerCard.image}
              alt={playerCard.imageAlt}
              onError={() => setImageMissing(true)}
              loading="lazy"
            />
          ) : (
            <div className="player-card__placeholder" aria-hidden="true">
              <span>PLAYER // IMG</span>
            </div>
          )}
        </div>

        <div className="player-card__content">
          <header className="player-card__header">
            <h3>{playerCard.title}</h3>
            <p>{playerCard.subtitle}</p>
          </header>

          <dl className="player-card__grid">
            {playerCard.attributes.map((item) => (
              <div key={item.label} className="player-card__row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default PlayerCard

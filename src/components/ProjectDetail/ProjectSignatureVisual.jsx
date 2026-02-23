const dots = Array.from({ length: 14 }, (_, index) => index)
const streamBars = Array.from({ length: 18 }, (_, index) => index)
const circuitNodes = Array.from({ length: 10 }, (_, index) => index)

const ProjectSignatureVisual = ({ variant }) => {
  if (!variant) return null

  if (variant === 'neural-grid') {
    return (
      <div className="project-signature project-signature--neural" aria-hidden="true">
        {dots.map((dot) => (
          <span key={dot} className="neural-node" />
        ))}
      </div>
    )
  }

  if (variant === 'radar-wave') {
    return (
      <div className="project-signature project-signature--radar" aria-hidden="true">
        <span className="radar-ring" />
        <span className="radar-ring" />
        <span className="radar-ring" />
        <span className="radar-sweep" />
      </div>
    )
  }

  if (variant === 'regression-pulse') {
    return (
      <div className="project-signature project-signature--regression" aria-hidden="true">
        <span className="regression-line" />
        {dots.slice(0, 10).map((dot) => (
          <span key={dot} className="regression-point" />
        ))}
      </div>
    )
  }

  if (variant === 'circuit-orbit') {
    return (
      <div className="project-signature project-signature--circuit" aria-hidden="true">
        <span className="orbit-ring" />
        <span className="orbit-ring" />
        {circuitNodes.map((node) => (
          <span key={node} className="circuit-node" />
        ))}
      </div>
    )
  }

  if (variant === 'stream-matrix') {
    return (
      <div className="project-signature project-signature--stream" aria-hidden="true">
        {streamBars.map((bar) => (
          <span key={bar} className="stream-bar" />
        ))}
      </div>
    )
  }

  return null
}

export default ProjectSignatureVisual

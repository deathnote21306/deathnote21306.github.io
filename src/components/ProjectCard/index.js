import { Link } from 'react-router-dom'
import './index.scss'

const ProjectCard = ({ project, active, style, onFocusCard }) => {
  return (
    <Link
      className={`project-card${active ? ' is-active' : ''}`}
      to={`/projects/${project.slug}`}
      style={style}
      onFocus={onFocusCard}
      aria-label={`Open project ${project.title}`}
    >
      <div className="project-card__inner">
        <img src={project.coverImage} alt={`${project.title} cover`} />
        <div className="project-card__content">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <ul>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

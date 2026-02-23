import { Link, useParams } from 'react-router-dom'
import './index.scss'
import projectCaseStudies from '../../data/projectCaseStudies'
import ProjectPageTemplate from './ProjectPageTemplate'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projectCaseStudies.find((entry) => entry.slug === slug)

  if (!project) {
    return (
      <div className="container project-detail-page project-detail-page--not-found">
        <div className="text-zone">
          <h1>Project Not Found</h1>
          <p>This case study is not configured yet. Add its content in `src/data/projectCaseStudies.js`.</p>
          <Link to="/" className="neon-glitch-btn">
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container project-detail-page">
      <ProjectPageTemplate project={project} />
    </div>
  )
}

export default ProjectDetail

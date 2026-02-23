import { Link, useParams } from 'react-router-dom'
import './index.scss'

const ProjectDetail = () => {
  const { slug } = useParams()

  return (
    <div className="container project-detail-page">
      <div className="text-zone">
        <h1>Project: {slug}</h1>
        <p>Coming soon. Detailed case study and live demo links will be added here.</p>
        <Link to="/" className="neon-glitch-btn">
          <span>Back Home</span>
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetail

import { Link, NavLink} from "react-router-dom"
import "./index.scss"
import LogoS from "/Users/bird/react-portfolio/src/assets/images/logo-s.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons" 
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "about-link active" : "about-link")}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "contact-link active" : "contact-link")}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/williams-lendjoungou-591b57347">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/deathnote21306">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
)

export default Sidebar

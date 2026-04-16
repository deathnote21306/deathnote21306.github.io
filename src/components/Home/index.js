import { Link } from "react-router-dom";
import "./index.scss";
import SafeLogo3D from "../SafeLogo3D";
import { Loader } from "react-loaders";
import ProjectCarousel from "../ProjectCarousel";
import PlayerCard from "../PlayerCard";
import CvSnapshot from "../CvSnapshot";
import ScrambledText from "../ScrambledText";

const HERO_PHRASES = [
  "Hi, I'm Williams,",
  "I build Ideas",
  "I build Projects",
  "I build Apps",
  "I build Visions",
  "I build Experiences",
  "I build Systems",
  "I build Products",
  "I build Prototypes",
];

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <section className="home-hero">
          <div className="text-zone">
            <ScrambledText phrases={HERO_PHRASES} interval={2200} className="home-hero__scramble" />
            <h2>Full Stack Developer / Python Expert / Problem Solver</h2>
            <Link to="/contact" className="flat-button neon-glitch-btn">
              <span>Contact Me</span>
            </Link>
          </div>
          <SafeLogo3D />
        </section>

        <section className="projects-showcase" aria-label="Projects carousel">
          <div className="projects-showcase__label">Projects</div>
          <div className="projects-showcase__content">
            <ProjectCarousel />
          </div>
        </section>

        <section className="player-card-stage" aria-label="Player card">
          <div className="player-card-stage__spacer" aria-hidden="true" />
          <div className="player-card-stage__content">
            <PlayerCard />
          </div>
        </section>

        <section className="cv-snapshot-stage" aria-label="CV snapshot">
          <div className="cv-snapshot-stage__label">CV Snapshot</div>
          <div className="cv-snapshot-stage__content">
            <CvSnapshot />
          </div>
        </section>
        
        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Home;

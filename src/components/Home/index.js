import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import SafeLogo3D from "../SafeLogo3D";
import { Loader } from "react-loaders";
import ProjectCarousel from "../ProjectCarousel";
import PlayerCard from "../PlayerCard";
import CvSnapshot from "../CvSnapshot";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["W", "i", "l", "l", "i", "a", "m", "s", ","];
  const buildPrefixArray = ["I", " ", "b", "u", "i", "l", "d", " "];
  const morphWords = ["Ideas", "Projects", "Apps", "Visions", "Experiences", "Systems", "Products", "Prototypes"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isMorphing, setIsMorphing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let swapTimer;
    const morphLoop = setInterval(() => {
      setIsMorphing(true);
      swapTimer = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % morphWords.length);
        setIsMorphing(false);
      }, 650);
    }, 3000);

    return () => {
      clearInterval(morphLoop);
      clearTimeout(swapTimer);
    };
  }, [morphWords.length]);

  const nextWordIndex = (wordIndex + 1) % morphWords.length;

  return (
    <>
      <div className="container home-page">
        <section className="home-hero">
          <div className="text-zone">
            <h1>
              <span className={`${letterClass} _1`}>H</span>
              <span className={`${letterClass} _2`}>i,</span>
              <br />
              <span className={`${letterClass} _3`}>I</span>
              <span className={`${letterClass} _4`}>'m&nbsp;</span>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={5} />
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={buildPrefixArray} idx={14} />
              <span className="morph-word-wrap" aria-live="polite">
                <span className={`morph-word ${isMorphing ? "is-morphing" : ""}`}>
                  <span className="morph-word__layer morph-word__current">{morphWords[wordIndex]}</span>
                  <span className="morph-word__layer morph-word__next">{morphWords[nextWordIndex]}</span>
                </span>
              </span>
            </h1>
            <h2>Full Stack Developer / Python Expert / Problem Solver</h2>
            <Link to="/contact" className="flat-button neon-glitch-btn">
              <span>Contact Me</span>
            </Link>
          </div>
          <SafeLogo3D />
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

        <section className="projects-showcase" aria-label="Projects carousel">
          <div className="projects-showcase__label">Projects</div>
          <div className="projects-showcase__content">
            <ProjectCarousel />
          </div>
        </section>
        
        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Home;

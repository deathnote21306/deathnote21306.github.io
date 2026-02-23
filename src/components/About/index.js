import AnimatedLetters from "../AnimatedLetters";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect} from "react";
import { Loader } from "react-loaders";

const About = () =>  {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass("text-animate-hover"), 3000);
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        document.body.classList.add('about-route')
        return () => {
            document.body.classList.remove('about-route')
        }
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone about-story">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"About Me".split("")} idx={15} />
                    </h1>
                    <p className="about-lead">
                        I grew up moving between different worlds and cultures, which taught me to adapt fast, communicate clearly,
                        and stay calm inside difficult systems. That mindset became my engineering style: understand the problem deeply,
                        build with structure, and ship things people can actually use.
                    </p>

                    <div className="about-tags">
                        <span>McGill Computer Engineering + AI</span>
                        <span>Full-Stack + ML Builder</span>
                        <span>Java • Python • React • Spring Boot</span>
                    </div>

                    <div className="about-grid">
                        <article className="about-card">
                            <h3>How I Build</h3>
                            <p>
                                I like building from architecture down to interface: backend APIs, data flow, and front-end systems
                                that stay clean under pressure. My projects range from AI tooling with LangChain/FastAPI to robust
                                Java Spring Boot services.
                            </p>
                        </article>

                        <article className="about-card">
                            <h3>What I Have Shipped</h3>
                            <p>
                                In roles across sales-tech and operations, I improved conversion flow, streamlined processes,
                                and built tools that reduced friction for teams and customers. I also contribute to accessibility-focused
                                community work through CNIB.
                            </p>
                        </article>

                        <article className="about-card">
                            <h3>Outside the Screen</h3>
                            <p>
                                I bring competitive energy from basketball, boxing, and chess into my work: think ahead, stay disciplined,
                                and execute. I am looking for ambitious teams where engineering quality and ownership both matter.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;

import { useEffect, useMemo, useState } from 'react'
import projects from '../../../data/projects'
import ProjectCard from '../../ProjectCard'
import './index.scss'

const SWIPE_THRESHOLD = 45
const MAX_VISIBLE_DISTANCE = 3

const getRelativeOffset = (index, activeIndex, total) => {
  let offset = index - activeIndex
  const midpoint = Math.floor(total / 2)

  if (offset > midpoint) offset -= total
  if (offset < -midpoint) offset += total

  return offset
}

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragStart, setDragStart] = useState(null)
  const [step, setStep] = useState(() => {
    if (typeof window === 'undefined') return 290
    if (window.innerWidth <= 480) return 210
    if (window.innerWidth <= 768) return 232
    if (window.innerWidth <= 1024) return 262
    return 290
  })

  const total = projects.length

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const updateStep = () => {
      if (window.innerWidth <= 480) setStep(210)
      else if (window.innerWidth <= 768) setStep(232)
      else if (window.innerWidth <= 1024) setStep(262)
      else setStep(290)
    }

    updateStep()
    window.addEventListener('resize', updateStep)
    return () => window.removeEventListener('resize', updateStep)
  }, [])

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % total)
  }

  const cards = useMemo(() => {
    return projects.map((project, index) => {
      const relativeOffset = getRelativeOffset(index, activeIndex, total)
      const distance = Math.abs(relativeOffset)
      const isActive = index === activeIndex
      const scale = isActive ? 1.14 : Math.max(0.8, 1 - distance * 0.09)
      const opacity =
        distance > MAX_VISIBLE_DISTANCE ? 0 : Math.max(0.1, 1 - distance * 0.28)
      const blur = isActive ? 0 : Math.min(distance * 0.8, 2.4)
      const zIndex = 20 - distance

      return {
        project,
        isActive,
        style: {
          transform: `translate(-50%, -50%) translateX(${relativeOffset * step}px) scale(${scale})`,
          opacity,
          filter: `blur(${blur}px)`,
          zIndex,
          pointerEvents: distance > MAX_VISIBLE_DISTANCE ? 'none' : 'auto',
        },
      }
    })
  }, [activeIndex, total, step])

  return (
    <div className="project-carousel">
      <div
        className="project-carousel__orbit"
        role="region"
        tabIndex={0}
        aria-label="Featured projects carousel"
        onWheel={(event) => {
          event.preventDefault()
          if (event.deltaY > 0) nextProject()
          else prevProject()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') prevProject()
          if (event.key === 'ArrowRight') nextProject()
        }}
        onPointerDown={(event) => setDragStart(event.clientX)}
        onPointerMove={(event) => {
          if (dragStart === null) return
          const delta = event.clientX - dragStart
          if (Math.abs(delta) < SWIPE_THRESHOLD) return
          if (delta > 0) prevProject()
          else nextProject()
          setDragStart(event.clientX)
        }}
        onPointerUp={() => setDragStart(null)}
        onPointerLeave={() => setDragStart(null)}
      >
        {cards.map(({ project, isActive, style }, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            active={isActive}
            style={style}
            onFocusCard={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="project-carousel__controls">
        <button type="button" onClick={prevProject} aria-label="Show previous project">
          ←
        </button>
        <button type="button" onClick={nextProject} aria-label="Show next project">
          →
        </button>
      </div>
    </div>
  )
}

export default ProjectCarousel

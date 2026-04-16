import { useEffect, useRef } from 'react'
import './index.scss'

// Plain-JS port of the TextScramble class from 21st.dev Raining Letters demo.
// For each character position we pick a random [start, end) frame window.
//   frame < start        → show old char
//   start ≤ frame < end  → show random glyph inside <span class="dud">
//   frame ≥ end          → lock to target char
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => {
      this.resolve = resolve
    })
    this.queue = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }

  stop() {
    cancelAnimationFrame(this.frameRequest)
  }
}

const ScrambledText = ({ phrases, interval = 2400, className = '', as: Tag = 'h1' }) => {
  const elementRef = useRef(null)
  const scramblerRef = useRef(null)
  const timeoutRef = useRef(null)
  const cancelledRef = useRef(false)

  useEffect(() => {
    if (!elementRef.current || !phrases || phrases.length === 0) return undefined

    cancelledRef.current = false
    const scrambler = new TextScramble(elementRef.current)
    scramblerRef.current = scrambler

    let counter = 0
    const next = () => {
      if (cancelledRef.current || !scramblerRef.current) return
      const phrase = phrases[counter % phrases.length]
      scrambler.setText(phrase).then(() => {
        if (cancelledRef.current) return
        timeoutRef.current = setTimeout(next, interval)
      })
      counter++
    }

    next()

    return () => {
      cancelledRef.current = true
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      scrambler.stop()
      scramblerRef.current = null
    }
  }, [phrases, interval])

  return (
    <Tag
      ref={elementRef}
      className={`scrambled-text ${className}`.trim()}
      aria-live="polite"
    >
      {phrases && phrases[0]}
    </Tag>
  )
}

export default ScrambledText

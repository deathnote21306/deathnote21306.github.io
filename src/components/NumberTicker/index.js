import { useEffect, useRef, useState } from 'react'

const NumberTicker = ({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  duration = 1200,
  decimalPlaces = 0,
  className = '',
  ...props
}) => {
  const ref = useRef(null)
  const rafRef = useRef(0)
  const [displayValue, setDisplayValue] = useState(direction === 'down' ? value : startValue)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const from = direction === 'down' ? value : startValue
    const to = direction === 'down' ? startValue : value

    if (prefersReducedMotion) {
      setDisplayValue(to)
      return undefined
    }

    const startAnimation = () => {
      const startTime = performance.now()

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = easeOutCubic(progress)
        const current = from + (to - from) * eased
        setDisplayValue(current)

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const timer = setTimeout(startAnimation, delay * 1000)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(rafRef.current)
    }
  }, [delay, direction, duration, inView, startValue, value])

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(displayValue.toFixed(decimalPlaces)))

  return (
    <span ref={ref} className={className} {...props}>
      {formatted}
    </span>
  )
}

export default NumberTicker

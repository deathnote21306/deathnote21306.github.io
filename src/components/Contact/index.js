import { Component, Suspense, lazy, useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const LeafletMap = lazy(() => import('./LeafletMap'))

class MapErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Route-crash prevention: map issues must not take down the whole page.
    // eslint-disable-next-line no-console
    console.error('Leaflet map runtime error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return <div className="map-fallback">Map temporarily unavailable</div>
    }

    return this.props.children
  }
}

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [mountMap, setMountMap] = useState(false)
  const form = useRef()

 useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
}, [])

  useEffect(() => {
    const deferMap = setTimeout(() => setMountMap(true), 180)
    return () => clearTimeout(deferMap)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_kqbadmt', 'template_2m68so4', form.current, 'EmWpM0aXGpVPSKEHd')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities, internships and full-time jobs - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button neon-glitch-btn">
                    <span>Send Message</span>
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
            <MapErrorBoundary>
              <Suspense fallback={<div className="map-fallback">Loading map...</div>}>
                {mountMap ? <LeafletMap /> : <div className="map-fallback">Loading map...</div>}
              </Suspense>
            </MapErrorBoundary>
            <div className="info-map">
              williams lendjoungou,
              <br />
              Canada <br />
              <br />
              3787 chemin de la cote-des-neiges <br />
              Montreal <br />
              <br />
              <a href="mailto:williamslendjoungou01@gmail.com">
                williamslendjoungou01@gmail.com
              </a>
            </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

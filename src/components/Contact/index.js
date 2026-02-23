import { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import L from 'leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import 'leaflet/dist/leaflet.css'
import './index.scss'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

 useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
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
            <MapContainer center={[45.5017, -73.5673]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[45.5017, -73.5673]}>
                    <Popup>my HQ</Popup>
                </Marker>
            </MapContainer>
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

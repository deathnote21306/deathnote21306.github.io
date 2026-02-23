import { Component, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Logo3D from './Logo3D'
import LogoS from '../assets/images/logo-s.png'

class Logo3DErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    if (typeof this.props.onError === 'function') {
      this.props.onError()
    }
    // Intentionally swallow 3D-only runtime errors so the page remains usable.
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

const hasWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
    )
  } catch (error) {
    return false
  }
}

export default function SafeLogo3D() {
  const [canRender3D, setCanRender3D] = useState(true)
  const [has3DError, setHas3DError] = useState(false)

  useEffect(() => {
    setCanRender3D(hasWebGLSupport())
  }, [])

  if (!canRender3D || has3DError) {
    return createPortal(
      <div className="logo3d-fallback" aria-hidden="true">
        <img src={LogoS} alt="" />
      </div>,
      document.body
    )
  }

  return (
    <Logo3DErrorBoundary onError={() => setHas3DError(true)}>
      <Logo3D />
    </Logo3DErrorBoundary>
  )
}

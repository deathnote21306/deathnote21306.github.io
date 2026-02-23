import { Component, useEffect, useState } from 'react'
import Logo3D from './Logo3D'

class Logo3DErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
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
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    setCanRender3D(hasWebGLSupport())
  }, [])

  if (!canRender3D) return null

  return (
    <Logo3DErrorBoundary>
      <Logo3D />
    </Logo3DErrorBoundary>
  )
}

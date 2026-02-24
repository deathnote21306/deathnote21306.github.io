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

const isMobileOrLowPowerDevice = () => {
  if (typeof window === 'undefined') return false

  const ua = navigator.userAgent || ''
  const isMobileUA = /Android|iPhone|iPad|iPod|Mobile/i.test(ua)
  const isSmallViewport = window.matchMedia('(max-width: 900px)').matches
  const lowCpu = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4
  const lowMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4

  return isMobileUA || isSmallViewport || lowCpu || lowMemory
}

const isInAppBrowser = () => {
  if (typeof navigator === 'undefined') return false
  return /(Instagram|FBAN|FBAV|FB_IAB|Line|Snapchat|Twitter)/i.test(navigator.userAgent || '')
}

export default function SafeLogo3D() {
  const [canRender3D, setCanRender3D] = useState(true)
  const [has3DError, setHas3DError] = useState(false)
  const [is3DReady, setIs3DReady] = useState(false)
  const [isLiteMode, setIsLiteMode] = useState(false)

  useEffect(() => {
    const supports3D = hasWebGLSupport()
    const shouldUseLightMode = isMobileOrLowPowerDevice() || isInAppBrowser()

    // Root cause guard: mobile/in-app browsers can lose WebGL context during fast route changes.
    // Keep the 3D logo feature, but lower GPU pressure in "lite mode".
    setIsLiteMode(shouldUseLightMode)
    setCanRender3D(supports3D)
  }, [])

  useEffect(() => {
    if (!canRender3D || has3DError || is3DReady) return undefined

    const safetyTimer = setTimeout(() => {
      setHas3DError(true)
    }, 9000)

    return () => clearTimeout(safetyTimer)
  }, [canRender3D, has3DError, is3DReady])

  const showLoadingFallback = canRender3D && !has3DError && !is3DReady
  const showStaticFallback = !canRender3D || has3DError

  const fallbackLogo = (showLoadingFallback || showStaticFallback)
    ? createPortal(
        <div className="logo3d-fallback" aria-hidden="true">
          <img src={LogoS} alt="" />
          {showLoadingFallback ? (
            <p className="logo3d-fallback__hint">3D logo loading here...</p>
          ) : null}
        </div>,
        document.body
      )
    : null

  if (!canRender3D || has3DError) return fallbackLogo

  return (
    <>
      {fallbackLogo}
      <Logo3DErrorBoundary onError={() => setHas3DError(true)}>
        <Logo3D
          liteMode={isLiteMode}
          onReady={() => setIs3DReady(true)}
          onContextLost={() => setHas3DError(true)}
        />
      </Logo3DErrorBoundary>
    </>
  )
}

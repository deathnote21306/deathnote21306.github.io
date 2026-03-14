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
  const [modelPath, setModelPath] = useState('/models/logo.gltf')

  useEffect(() => {
    const supports3D = hasWebGLSupport()
    const shouldUseLightMode = isMobileOrLowPowerDevice() || isInAppBrowser()

    // Root cause guard: mobile/in-app browsers can lose WebGL context during fast route changes.
    // Keep the 3D logo feature, but lower GPU pressure in "lite mode".
    setIsLiteMode(shouldUseLightMode)
    setCanRender3D(supports3D)
  }, [])

  useEffect(() => {
    let cancelled = false

    const pickBestModel = async () => {
      try {
        const response = await fetch('/models/logo-optimized.glb', { method: 'HEAD', cache: 'no-store' })
        if (!cancelled && response.ok) {
          setModelPath('/models/logo-optimized.glb')
        }
      } catch (error) {
        // Keep default .gltf if optimized asset is not available.
      }
    }

    pickBestModel()
    return () => {
      cancelled = true
    }
  }, [])

  // Do not force-fail slow 3D loads. Large models (especially on mobile)
  // can take longer than a fixed timeout to parse; keep loading fallback visible
  // and only switch to static fallback on real runtime errors/context loss.

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
          modelPath={modelPath}
          onReady={() => setIs3DReady(true)}
          onContextLost={() => setHas3DError(true)}
        />
      </Logo3DErrorBoundary>
    </>
  )
}

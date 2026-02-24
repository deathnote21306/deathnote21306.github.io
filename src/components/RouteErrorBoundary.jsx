import React, { Component } from 'react'

class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Crash guard for mobile/in-app route swaps: keep app shell alive instead of blank screen.
    // eslint-disable-next-line no-console
    console.error('Route runtime error:', error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="route-crash-fallback" role="alert">
        <h2>Recovered From A Runtime Error</h2>
        <p>The interface hit a temporary issue. Tap retry to continue.</p>
        <button className="neon-glitch-btn" type="button" onClick={this.handleRetry}>
          <span>Retry</span>
        </button>
      </div>
    )
  }
}

export default RouteErrorBoundary

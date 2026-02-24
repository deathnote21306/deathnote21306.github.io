import './App.scss'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CodeBackground from "./components/CodeBackground";
import RouteErrorBoundary from './components/RouteErrorBoundary';

const Layout = lazy(() => import('./components/Layout'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const ProjectDetail = lazy(() => import('./components/ProjectDetail'))

function App() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setShowBg(false)
      return undefined
    }

    const timer = setTimeout(() => setShowBg(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showBg && <CodeBackground />}

      {/* Your actual content sits on top */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <RouteErrorBoundary>
          <Suspense fallback={<div className="route-loading">Loading interface...</div>}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects/:slug" element={<ProjectDetail />} />
              </Route>
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </div>
    </>
  )
}

export default App;

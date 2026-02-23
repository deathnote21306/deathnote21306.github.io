import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'  
import ProjectDetail from './components/ProjectDetail'
import CodeBackground from "./components/CodeBackground";
import { useEffect, useState } from 'react';

function App() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBg(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showBg && <CodeBackground />}

      {/* Your actual content sits on top */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;

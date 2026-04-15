import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import maboloIcon from './assets/mabolo_icon.png'
import maboloOfficialLogo from './assets/mabolo offical logo.png'
import './App.css'

const PlantList = lazy(() => import('./pages/PlantList'))
const PlantDetail = lazy(() => import('./pages/PlantDetail'))

function RouteFallback() {
  return (
    <div className="route-fallback" aria-busy="true" aria-live="polite">
      <div className="fallback-card fallback-header">
        <div className="fallback-line fallback-line-lg" />
        <div className="fallback-line fallback-line-sm" />
      </div>

      <div className="fallback-list">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="fallback-card fallback-row">
            <div className="fallback-thumb" />
            <div className="fallback-copy">
              <div className="fallback-line fallback-line-md" />
              <div className="fallback-line fallback-line-xs" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header className="app-header animate-fade-down">
        <div className="header-inner">
          <img src={maboloIcon} alt="Mabolo icon" className="header-logo" />
          <h1 className="app-title">Jardin de Mabolo</h1>
        </div>
        <p className="app-subtitle">A showcase of Mabolo Men's Home crops</p>
      </header>
      <main className="app-main">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<PlantList />} />
            <Route path="/plant/:id" element={<PlantDetail />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="app-footer">
        <img
          src={maboloOfficialLogo}
          alt="Mabolo official logo"
          className="footer-logo"
          width="140"
          height="140"
          loading="lazy"
          decoding="async"
        />
        <p className="footer-credit">App developer: Dohn Michael B. Varquez</p>
      </footer>
    </div>
  )
}

export default App

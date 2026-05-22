import { Routes, Route, NavLink } from 'react-router-dom'
import Fixture from './pages/Fixture'
import MapPage from './pages/MapPage'
import BracketPage from './pages/BracketPage'
import About from './pages/About'
import BackgroundImage from './components/BackgroundImage'
import MusicPlayer from './components/MusicPlayer'
import NewsTicker from './components/NewsTicker'
import './App.css'

function App() {
  return (
    <div className="app">
      <BackgroundImage page="fixture" />
      <MusicPlayer />
      <NewsTicker />

      <header className="topbar">
        <span className="logo">⚽ Mundial 2026</span>
      </header>

      <div className="content">
        <Routes>
          <Route path="/" element={<Fixture />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/bracket" element={<BracketPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <nav className="bottombar">
        <NavLink to="/" end>
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <span>Fixture</span>
        </NavLink>
        <NavLink to="/map">
          <svg viewBox="0 0 24 24"><path d="M1 6v12l5 3 5-3 5 3 5-3V6l-5-3-5 3-5-3-5 3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 3v15M18 6v15M11 3v15" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
          <span>Mapa</span>
        </NavLink>
        <NavLink to="/bracket">
          <svg viewBox="0 0 24 24"><path d="M2 3h6v4H2V3zM8 7h8v4H8V7zM16 3h6v4h-6V3z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 11v8M8 15h8v4H8v-4z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M4 19h16v2H4v-2z" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
          <span>Eliminatorias</span>
        </NavLink>
        <NavLink to="/about">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 16v-4M12 8h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <span>Info</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default App

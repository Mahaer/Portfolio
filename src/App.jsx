import './App.css'
import HomePage from './components/HomePage/HomePage'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ProjectPage from './components/ProjectPage/ProjectPage'
import { useVisibility } from './components/VisibilityContext/VisibilityContext'

export default function App() {
  const { isPortfolioUnlocked } = useVisibility();

  if (isPortfolioUnlocked) {
    document.title = "Mahaer Chugh"
  }

  return (
    <>
      <header>
        <h1>{isPortfolioUnlocked
          ? <><span>Mahaer</span> Chugh</>
          : <><span>Undeadtomato</span>.netlify.app</>
        }</h1>
        <div>
          <nav>
            <ul>
              <li>
                  <NavLink to="/" className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>Home</NavLink>
              </li>
              <li>
                  <NavLink to="/about" className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>About Me</NavLink>
              </li>
              <li>
                  <NavLink to="/projects" className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>Projects</NavLink>
              </li>
            </ul>
          </nav>
          <span></span>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="*" element={
            <div className="notFound">
              <div className="notFoundCode">404</div>
              <p className="notFoundTitle">Page not found</p>
              <p className="notFoundDesc">This page either doesn't exist or may have been removed.</p>
              <Link to="/" className="back">← Go Back home</Link>
            </div>
          } />
        </Routes>
      </main>
      <footer>
        <h3>{isPortfolioUnlocked
          ? <><span>Mahaer</span> Chugh</>
          : <><span>Undeadtomato</span>.netlify.app</>
        }</h3>       
        <span>built with React in 2026</span>
      </footer>
    </>
  )
}

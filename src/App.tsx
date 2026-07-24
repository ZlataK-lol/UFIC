import { useState, useEffect } from 'react'
import { NdebeleDivider, Protea, DiamondRow } from './components/SADecor'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import TripOverview from './sections/TripOverview'
import WeeklyLessons from './sections/WeeklyLessons'
import ProjectWalkthrough from './sections/ProjectWalkthrough'
import ReflectionSummary from './sections/ReflectionSummary'
import Acknowledgements from './sections/Acknowledgements'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'overview', label: 'Trip Overview' },
  { id: 'lessons', label: 'Weekly Lessons' },
  { id: 'project', label: 'Project' },
  { id: 'reflection', label: 'Reflection' },
  { id: 'thanks', label: 'Acknowledgements' },
]

export default function App() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Top Ndebele stripe */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="ndebele-border" />
        <nav
          className="flex items-center justify-between px-8 py-3 transition-all"
          style={{
            backgroundColor: scrolled ? 'rgba(240,248,255,0.97)' : 'rgba(240,248,255,0.92)',
            backdropFilter: 'blur(10px)',
            borderBottom: scrolled ? '1px solid var(--border)' : 'none',
            boxShadow: scrolled ? '0 2px 12px rgba(134,197,216,0.15)' : 'none',
          }}
        >
          <div className="flex items-center gap-3">
            <Protea size={32} opacity={0.7} />
            <span
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.1rem',
                color: 'var(--accent)',
                fontStyle: 'italic',
              }}
            >
              South Africa &rsquo;26
            </span>
          </div>
          <ul className="flex gap-5 flex-wrap">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="text-xs tracking-wide transition-colors relative"
                  style={{
                    color: active === item.id ? 'var(--accent)' : 'var(--muted-foreground)',
                    fontWeight: active === item.id ? 700 : 400,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    paddingBottom: '2px',
                  }}
                >
                  {item.label}
                  {active === item.id && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--sa-gold, #c8973a)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content: offset for nav + ndebele stripe */}
      <div style={{ paddingTop: '68px' }}>
        <section id="home"><Home /></section>

        <NdebeleDivider />

        <section id="about"><AboutMe /></section>

        <NdebeleDivider />

        <section id="overview"><TripOverview /></section>

        <NdebeleDivider />

        <section id="lessons"><WeeklyLessons /></section>

        <NdebeleDivider />

        <section id="project"><ProjectWalkthrough /></section>

        <NdebeleDivider />

        <section id="reflection"><ReflectionSummary /></section>

        <NdebeleDivider />

        <section id="thanks"><Acknowledgements /></section>
      </div>

      {/* Footer */}
      <div className="ndebele-border" />
      <footer className="text-center py-8" style={{ background: 'var(--secondary)' }}>
        <DiamondRow count={7} />
        <p className="mt-3 text-xs tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
          Ubuntu: I am because we are
        </p>
        <p className="mt-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
          Study Abroad Portfolio &nbsp;·&nbsp; South Africa 2026
        </p>
        <p className="mt-3 text-xs" style={{ color: 'var(--foreground)', fontFamily: '"Playfair Display", Georgia, serif' }}>
          Zlata Kovrigina
        </p>
      </footer>
    </div>
  )
}

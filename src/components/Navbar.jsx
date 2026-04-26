import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Bled Living Logo - Investimenti e Viaggi in Marocco" className="navbar-logo" />
          </Link>
        </div>
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            style={{ 
              background: 'transparent', 
              color: 'var(--color-black)', 
              border: '1px solid rgba(0,0,0,0.1)', 
              padding: '0.5rem', 
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              outline: 'none',
              fontSize: '0.875rem'
            }}
          >
            <option value="it" style={{ color: '#000' }}>IT</option>
            <option value="en" style={{ color: '#000' }}>EN</option>
          </select>
          <a href="#contatti" className="btn btn-primary btn-sm">{t('nav', 'consultation')}</a>
        </div>
      </div>
    </header>
  )
}

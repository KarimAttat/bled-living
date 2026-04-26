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
            <img src="/logo.png?v=2" alt="Bled Living Logo - Investimenti e Viaggi in Marocco" className="navbar-logo" />
          </Link>
        </div>
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#contatti" className="btn btn-primary btn-sm">{t('nav', 'consultation')}</a>
        </div>
      </div>
    </header>
  )
}

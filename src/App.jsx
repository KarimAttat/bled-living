import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyMorocco from './components/WhyMorocco'
import Services from './components/Services'
import TailoredTrips from './components/TailoredTrips'
import Properties from './components/Properties'
import About from './components/About'
import BlogTeaser from './components/BlogTeaser'
import Footer from './components/Footer'
import SEO from './components/SEO'
import { BlogList, BlogPost } from './components/Blog'
import { RiadsList, RiadDetail } from './components/Riads'
import { PrivacyPolicy, CookiePolicy, TermsConditions } from './components/LegalPages'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { Analytics } from "@vercel/analytics/react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/components.css'
import { FaWhatsapp } from 'react-icons/fa6'

function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/393402778699" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-wa hover-lift"
    >
      <div className="floating-wa-text">Serve aiuto? Scrivici!</div>
      <div className="floating-wa-icon">
        <FaWhatsapp size={28} />
      </div>
    </a>
  )
}

function FloatingLanguageSelector() {
  const { language, setLanguage } = useLanguage()
  return (
    <div className="floating-lang">
      <button className={language === 'it' ? 'active' : ''} onClick={() => setLanguage('it')}>IT</button>
      <div className="floating-lang-divider"></div>
      <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
    </div>
  )
}

function CookieBanner() {
  const { language } = useLanguage()
  const [show, setShow] = React.useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_accepted')
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_accepted', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: 'var(--color-primary)', color: '#fff', padding: '1rem',
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem',
      boxShadow: '0 -4px 15px rgba(0,0,0,0.1)', fontSize: '0.9rem'
    }}>
      <p style={{ margin: 0, opacity: 0.9 }}>
        {language === 'it' 
          ? 'Utilizziamo i cookie per migliorare la tua esperienza e per analizzare il traffico sul nostro sito.' 
          : 'We use cookies to improve your experience and analyze our website traffic.'}
        {' '}
        <a href="/cookies" style={{ color: 'var(--color-terracotta)', textDecoration: 'underline' }}>
          {language === 'it' ? 'Scopri di più' : 'Learn more'}
        </a>
      </p>
      <button 
        onClick={handleAccept} 
        style={{
          background: 'var(--color-terracotta)', color: '#fff', border: 'none',
          padding: '0.5rem 1.5rem', borderRadius: '30px', fontWeight: '500', cursor: 'pointer'
        }}
      >
        {language === 'it' ? 'Accetta tutti' : 'Accept all'}
      </button>
    </div>
  )
}

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50, easing: 'ease-out-cubic' })
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.getElementById(window.location.hash.substring(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <WhyMorocco />
        <Services />
        <TailoredTrips />
        <Properties />
        <About />
        <BlogTeaser />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/blog"      element={<BlogList />} />
          <Route path="/blog/:id"  element={<BlogPost />} />
          <Route path="/riads"     element={<RiadsList />} />
          <Route path="/riads/:id" element={<RiadDetail />} />
          <Route path="/privacy"   element={<PrivacyPolicy />} />
          <Route path="/cookies"   element={<CookiePolicy />} />
          <Route path="/terms"     element={<TermsConditions />} />
        </Routes>
        <FloatingWhatsApp />
        <FloatingLanguageSelector />
        <CookieBanner />
        <Analytics />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

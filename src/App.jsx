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
import { LanguageProvider } from './context/LanguageContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/components.css'

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
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

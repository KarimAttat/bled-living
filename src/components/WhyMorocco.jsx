import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaChartLine, FaUsers, FaShieldHalved, FaCity, FaPalette, FaLocationDot, FaCoins } from 'react-icons/fa6'

const SLIDES = [
  { src: '/real_casablanca.jpg',  caption: 'Casablanca Finance City' },
  { src: '/real_marrakech.jpg',   caption: 'Marrakech — La Città Rosa' },
  { src: '/real_agadir.jpg',      caption: 'Agadir — Costa Atlantica' },
  { src: '/real_rabat.jpg',       caption: 'Rabat — La Capitale' },
  { src: '/real_train.jpg',       caption: 'Al Boraq — Alta Velocità' },
]

function WhySlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current)
      setCurrent(c => (c + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [current])

  const goTo = (i) => {
    if (i === current) return
    setPrev(current)
    setCurrent(i)
  }

  return (
    <div className="why-slider">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`why-slide${i === current ? ' why-slide--active' : i === prev ? ' why-slide--prev' : ''}`}
          aria-hidden={i !== current}
        >
          <img src={slide.src} alt={slide.caption} className="why-slide-img" />
          <div className="why-slide-caption">{slide.caption}</div>
        </div>
      ))}
      <div className="why-slider-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`why-dot${i === current ? ' why-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function WhyMorocco() {
  const { t } = useLanguage()

  return (
    <section className="problem-opportunity section-padding bg-sand" id="perche-marocco">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
          <h2>{t('whyMorocco', 'title')}</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem' }}>{t('whyMorocco', 'subtitle')}</p>
        </div>
        
        <div className="about-grid" style={{ marginBottom: '3rem' }} data-aos="fade-up" data-aos-delay="100">
          {/* --- Slider --- */}
          <WhySlider />
          <div>
            <h3 style={{ color: 'var(--color-terracotta)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t('whyMorocco', 'listTitle')}</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* 1. Posizione Strategica (era point6) */}
              <li className="why-point">
                <span className="why-point-icon"><FaLocationDot /></span>
                <div><strong>{t('whyMorocco', 'point6Title')}:</strong> {t('whyMorocco', 'point6Desc')}</div>
              </li>
              {/* 2. Crescita del Turismo (era point1) */}
              <li className="why-point">
                <span className="why-point-icon"><FaChartLine /></span>
                <div><strong>{t('whyMorocco', 'point1Title')}:</strong> {t('whyMorocco', 'point1Desc')}</div>
              </li>
              {/* 3. Stabilità ed Economia (era point3) */}
              <li className="why-point">
                <span className="why-point-icon"><FaShieldHalved /></span>
                <div><strong>{t('whyMorocco', 'point3Title')}:</strong> {t('whyMorocco', 'point3Desc')}</div>
              </li>
              {/* 4. Comunità in Espansione (era point2) */}
              <li className="why-point">
                <span className="why-point-icon"><FaUsers /></span>
                <div><strong>{t('whyMorocco', 'point2Title')}:</strong> {t('whyMorocco', 'point2Desc')}</div>
              </li>
              {/* 5. Sviluppo Infrastrutturale (era point4) */}
              <li className="why-point">
                <span className="why-point-icon"><FaCity /></span>
                <div><strong>{t('whyMorocco', 'point4Title')}:</strong> {t('whyMorocco', 'point4Desc')}</div>
              </li>
              {/* 6. Hub Culturale (era point5) */}
              <li className="why-point">
                <span className="why-point-icon"><FaPalette /></span>
                <div><strong>{t('whyMorocco', 'point5Title')}:</strong> {t('whyMorocco', 'point5Desc')}</div>
              </li>
              {/* 7. Costo della Vita (era point7) */}
              <li className="why-point">
                <span className="why-point-icon"><FaCoins /></span>
                <div><strong>{t('whyMorocco', 'point7Title')}:</strong> {t('whyMorocco', 'point7Desc')}</div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  )
}

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero bg-sand">
      <div className="container hero-grid">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">{t('hero', 'title')}</h1>
          <p className="hero-subtitle">{t('hero', 'subtitle')}</p>
          <div className="hero-actions">
            <a href="#contatti" className="btn btn-primary">{t('hero', 'btnConsultation')}</a>
            <a href="https://wa.me/393402778699" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaWhatsapp size={22} /> {t('hero', 'btnWhatsapp')}
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper" data-aos="zoom-in" data-aos-delay="200">
          <img 
            src="/real_marrakech.jpg" 
            alt="Marrakech luxury real estate" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

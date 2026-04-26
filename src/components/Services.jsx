import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaPlaneDeparture, FaHouseChimneyWindow, FaHandshake, FaEarthAfrica } from 'react-icons/fa6'

export default function Services() {
  const { t } = useLanguage()
  
  const iconWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    backgroundColor: 'var(--color-sand)',
    borderRadius: '50%',
    margin: '0 auto 1.5rem auto',
    color: 'var(--color-terracotta)',
    fontSize: '1.75rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease'
  };

  return (
    <section className="services section-padding bg-sand" id="servizi">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
          <h2>{t('services', 'title')}</h2>
        </div>
        <div className="services-grid">
          <div className="service-card modern-card" data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'center' }}>
            <div className="service-icon-wrapper" style={iconWrapperStyle}>
              <FaPlaneDeparture />
            </div>
            <div className="service-content">
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{t('services', 's1Title')}</h3>
              <p style={{ opacity: 0.9 }}>{t('services', 's1Desc')}</p>
            </div>
          </div>
          <div className="service-card modern-card" data-aos="fade-up" data-aos-delay="200" style={{ textAlign: 'center' }}>
            <div className="service-icon-wrapper" style={iconWrapperStyle}>
              <FaHouseChimneyWindow />
            </div>
            <div className="service-content">
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{t('services', 's2Title')}</h3>
              <p style={{ opacity: 0.9 }}>{t('services', 's2Desc')}</p>
            </div>
          </div>
          <div className="service-card modern-card" data-aos="fade-up" data-aos-delay="300" style={{ textAlign: 'center' }}>
            <div className="service-icon-wrapper" style={iconWrapperStyle}>
              <FaHandshake />
            </div>
            <div className="service-content">
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{t('services', 's3Title')}</h3>
              <p style={{ opacity: 0.9 }}>{t('services', 's3Desc')}</p>
            </div>
          </div>
          <div className="service-card modern-card" data-aos="fade-up" data-aos-delay="400" style={{ textAlign: 'center' }}>
            <div className="service-icon-wrapper" style={iconWrapperStyle}>
              <FaEarthAfrica />
            </div>
            <div className="service-content">
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>{t('services', 's4Title')}</h3>
              <p style={{ opacity: 0.9 }}>{t('services', 's4Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

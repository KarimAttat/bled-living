import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaBriefcase, FaBinoculars, FaCompass } from 'react-icons/fa6'

export default function TailoredTrips() {
  const { t } = useLanguage()

  const itemStyle = {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
    backgroundColor: 'var(--color-white)',
    padding: '1.25rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const iconContainerStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: 'var(--color-sand)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-terracotta)',
    fontSize: '1.5rem',
    flexShrink: 0
  };

  return (
    <section className="tailored-trips section-padding" id="viaggi">
      <div className="container about-grid">
        <div className="about-content" data-aos="fade-up">
          <h2>{t('tailoredTrips', 'title1')}<br/>{t('tailoredTrips', 'title2')}</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>{t('tailoredTrips', 'subtitle')}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={itemStyle} className="hover-lift">
              <div style={iconContainerStyle}><FaBriefcase /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.125rem', color: 'var(--color-primary)' }}>{t('tailoredTrips', 'p1Title')}</strong>
                <span style={{ fontSize: '0.95rem', opacity: 0.8 }}>{t('tailoredTrips', 'p1Desc')}</span>
              </div>
            </div>
            <div style={itemStyle} className="hover-lift">
              <div style={iconContainerStyle}><FaBinoculars /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.125rem', color: 'var(--color-primary)' }}>{t('tailoredTrips', 'p2Title')}</strong>
                <span style={{ fontSize: '0.95rem', opacity: 0.8 }}>{t('tailoredTrips', 'p2Desc')}</span>
              </div>
            </div>
            <div style={itemStyle} className="hover-lift">
              <div style={iconContainerStyle}><FaCompass /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.125rem', color: 'var(--color-primary)' }}>{t('tailoredTrips', 'p3Title')}</strong>
                <span style={{ fontSize: '0.95rem', opacity: 0.8 }}>{t('tailoredTrips', 'p3Desc')}</span>
              </div>
            </div>
          </div>
          <a href="#contatti" className="btn btn-primary">{t('tailoredTrips', 'btn')}</a>
        </div>
        <div className="about-img-container" data-aos="fade-up" data-aos-delay="200">
          <img 
            src="/tailored_trips_majorelle.jpg" 
            alt="Viaggi su misura a Marrakech e scouting per investimenti immobiliari in Marocco" 
            className="about-img"
          />
        </div>
      </div>
    </section>
  )
}

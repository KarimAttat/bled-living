import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Properties() {
  const { t } = useLanguage()
  return (
    <section className="properties section-padding bg-sand-dark" id="opportunita">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
          <h2>{t('properties', 'title')}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', opacity: 0.9, lineHeight: '1.6' }}>
            {t('properties', 'p1')}
            <br/><br/>
            {t('properties', 'p2')}
          </p>
        </div>
        
        <div className="properties-grid">
          <div className="property-card modern-card" data-aos="fade-up" data-aos-delay="100">
            <div className="property-img" style={{ backgroundImage: `url('/riad_medina.png')` }}></div>
            <div className="property-content">
              <h3>{t('properties', 'c1Title')}</h3>
              <p style={{ marginTop: '0.75rem', opacity: 0.9 }}>{t('properties', 'c1Desc')}</p>
            </div>
          </div>
          <div className="property-card modern-card" data-aos="fade-up" data-aos-delay="200">
            <div className="property-img" style={{ backgroundImage: `url('/modern_apartment.png')` }}></div>
            <div className="property-content">
              <h3>{t('properties', 'c2Title')}</h3>
              <p style={{ marginTop: '0.75rem', opacity: 0.9 }}>{t('properties', 'c2Desc')}</p>
            </div>
          </div>
          <div className="property-card modern-card" data-aos="fade-up" data-aos-delay="300">
            <div className="property-img" style={{ backgroundImage: `url('/modern_villa.png')` }}></div>
            <div className="property-content">
              <h3>{t('properties', 'c3Title')}</h3>
              <p style={{ marginTop: '0.75rem', opacity: 0.9 }}>{t('properties', 'c3Desc')}</p>
            </div>
          </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }} data-aos="fade-up" data-aos-delay="400">
          <p className="text-black" style={{ marginBottom: '1rem', fontWeight: '500' }}>{t('properties', 'footerText')}</p>
          <a href="#contatti" className="btn btn-primary">{t('properties', 'btn')}</a>
        </div>
      </div>
    </section>
  )
}

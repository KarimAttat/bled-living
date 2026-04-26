import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <section className="about section-padding" id="chi-siamo">
      <div className="container">

        {/* --- Story block --- */}
        <div className="about-grid" data-aos="fade-up">
          <div className="about-img-container">
            <img 
              src="/hero_marrakech.png" 
              alt="Fondatori di Bled Living - Esperti in investimenti immobiliari e viaggi in Marocco" 
              className="about-img"
            />
          </div>
          <div className="about-content">
            <h2>{t('about', 'title1')}<br />{t('about', 'title2')}</h2>
            <p>{t('about', 'p1')}</p>
            <p>{t('about', 'p2')}</p>
            <p className="text-gold" style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '1rem' }}>{t('about', 'p3')}</p>
          </div>
        </div>

        {/* --- Solution / Bridge block --- */}
        <div className="text-center" style={{ marginTop: '5rem', marginBottom: '2.5rem' }} data-aos="fade-up">
          <h2>{t('solution', 'title')}</h2>
          <p style={{ maxWidth: '800px', margin: '1rem auto 0', fontSize: '1.125rem', opacity: 0.85 }}>{t('solution', 'subtitle')}</p>
        </div>

        <div className="solution-grid" data-aos="fade-up" data-aos-delay="100">
          <div className="modern-card solution-card" data-aos="fade-up" data-aos-delay="150">
            <h3>{t('solution', 'card1Title')}</h3>
            <p>{t('solution', 'card1Desc')}</p>
          </div>
          <div className="modern-card solution-card" data-aos="fade-up" data-aos-delay="250">
            <h3>{t('solution', 'card2Title')}</h3>
            <p>{t('solution', 'card2Desc')}</p>
          </div>
          <div className="modern-card solution-card" data-aos="fade-up" data-aos-delay="350">
            <h3>{t('solution', 'card3Title')}</h3>
            <p>{t('solution', 'card3Desc')}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Solution() {
  const { t } = useLanguage()
  return (
    <section className="solution section-padding" id="chi-siamo">
      <div className="container text-center" data-aos="fade-up">
        <h2>{t('solution', 'title')}</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.125rem' }}>{t('solution', 'subtitle')}</p>
        
        <div className="solution-grid">
          <div className="modern-card solution-card" data-aos="fade-up" data-aos-delay="100">
            <h3>{t('solution', 'card1Title')}</h3>
            <p>{t('solution', 'card1Desc')}</p>
          </div>
          <div className="modern-card solution-card" data-aos="fade-up" data-aos-delay="200">
            <h3>{t('solution', 'card2Title')}</h3>
            <p>{t('solution', 'card2Desc')}</p>
          </div>
          <div className="modern-card solution-card" data-aos="fade-up" data-aos-delay="300">
            <h3>{t('solution', 'card3Title')}</h3>
            <p>{t('solution', 'card3Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

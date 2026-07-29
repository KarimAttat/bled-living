import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { testimonials } from '../data/testimonials'
import { FaQuoteLeft } from 'react-icons/fa6'

function initials(name) {
  return name
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export default function Testimonials() {
  const { language, t } = useLanguage()

  return (
    <section className="testimonials section-padding bg-sand" id="testimonianze">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
          <p className="testimonials-eyebrow">{t('testimonials', 'eyebrow')}</p>
          <h2>{t('testimonials', 'title')}</h2>
          <p style={{ maxWidth: '640px', margin: '1rem auto 0', opacity: 0.8 }}>
            {t('testimonials', 'subtitle')}
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <div
              className="modern-card testimonial-card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />
              <p className="testimonial-quote">
                {language === 'it' ? item.quoteIt : item.quoteEn}
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{initials(item.name)}</div>
                <div className="testimonial-name">{item.name}</div>
                <span className="testimonial-tag">
                  {language === 'it' ? item.dealTypeIt : item.dealTypeEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

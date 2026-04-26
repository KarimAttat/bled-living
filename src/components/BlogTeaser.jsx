import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaChevronDown } from 'react-icons/fa6'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
      onClick={onToggle}
    >
      <div className="faq-header">
        <h3 className="faq-question">
          {question}
        </h3>
        <span className={`faq-icon${isOpen ? ' faq-icon--open' : ''}`}>
          <FaChevronDown />
        </span>
      </div>
      <div
        className="faq-body"
        style={{
          maxHeight: isOpen ? '400px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="faq-answer">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function BlogTeaser() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: t('blogTeaser', 'q1'), a: t('blogTeaser', 'a1') },
    { q: t('blogTeaser', 'q2'), a: t('blogTeaser', 'a2') },
    { q: t('blogTeaser', 'q3'), a: t('blogTeaser', 'a3') },
    { q: t('blogTeaser', 'q4'), a: t('blogTeaser', 'a4') },
    { q: t('blogTeaser', 'q5'), a: t('blogTeaser', 'a5') },
    { q: t('blogTeaser', 'q6'), a: t('blogTeaser', 'a6') },
    { q: t('blogTeaser', 'q7'), a: t('blogTeaser', 'a7') },
    { q: t('blogTeaser', 'q8'), a: t('blogTeaser', 'a8') },
  ]

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="blog-teaser section-padding bg-sand" id="risorse">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }} data-aos="fade-up">
          <h2>{t('blogTeaser', 'title')}</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem', opacity: 0.9 }}>
            {t('blogTeaser', 'subtitle')}
          </p>
        </div>

        <div className="faq-accordion" data-aos="fade-up" data-aos-delay="50">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

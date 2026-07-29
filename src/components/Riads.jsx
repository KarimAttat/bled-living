import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { riads } from '../data/riads'
import {
  FaArrowLeft, FaLocationDot, FaWhatsapp, FaChevronLeft, FaChevronRight,
  FaXmark, FaPlay, FaCircleCheck, FaRulerCombined, FaBed, FaBath,
  FaLayerGroup, FaCalendarDays, FaFileContract, FaObjectGroup,
} from 'react-icons/fa6'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos'

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatPrice(price, language) {
  if (!price) return language === 'it' ? 'Prezzo su richiesta' : 'Price on request'
  return new Intl.NumberFormat(language === 'it' ? 'it-IT' : 'en-US', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
  }).format(price)
}

function statusLabel(status, language) {
  const map = {
    available: { it: 'Disponibile', en: 'Available' },
    reserved:  { it: 'Riservato',   en: 'Reserved' },
    sold:      { it: 'Venduto',     en: 'Sold' },
  }
  return (map[status] || map.available)[language]
}

// Same spec sheet on every Riad page; a field simply doesn't render if unknown.
function buildSpecs(riad, language) {
  const specs = []
  if (riad.sizeSqm) specs.push({ icon: <FaRulerCombined />, label: language === 'it' ? 'Superficie totale' : 'Total surface', value: `${riad.sizeSqm} m²` })
  if (riad.courtyardSqm) specs.push({ icon: <FaObjectGroup />, label: language === 'it' ? 'Corte interna' : 'Inner courtyard', value: `${riad.courtyardSqm} m²` })
  if (riad.bedrooms) specs.push({ icon: <FaBed />, label: language === 'it' ? 'Camere da letto' : 'Bedrooms', value: riad.bedrooms })
  if (riad.bathrooms) specs.push({ icon: <FaBath />, label: language === 'it' ? 'Bagni' : 'Bathrooms', value: riad.bathrooms })
  if (riad.floors) specs.push({ icon: <FaLayerGroup />, label: language === 'it' ? 'Piani' : 'Floors', value: riad.floors })
  if (riad.yearRenovated) specs.push({ icon: <FaCalendarDays />, label: language === 'it' ? 'Anno di ristrutturazione' : 'Year renovated', value: riad.yearRenovated })
  if (riad.titleDeed) specs.push({ icon: <FaFileContract />, label: language === 'it' ? 'Titolo di proprietà' : 'Title deed', value: riad.titleDeed })
  return specs
}

// ── List Page ────────────────────────────────────────────────────────────────
function RiadsList() {
  const { language } = useLanguage()

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 40, easing: 'ease-out-cubic' })
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="riads-hero"
          style={riads[0] ? { backgroundImage: `url('${riads[0].cover}')` } : undefined}
        >
          <div className="container">
            <p className="riads-eyebrow">
              {language === 'it' ? 'Collezione Riad' : 'Riad Collection'}
            </p>
            <h1 className="riads-hero-title">
              {language === 'it' ? 'Riad in Vendita' : 'Riads for Sale'}
            </h1>
            <p className="riads-hero-subtitle">
              {language === 'it'
                ? 'Una selezione ristretta di Riad autentici nella Medina di Marrakech, verificati personalmente dal nostro team prima di essere proposti.'
                : 'A tight selection of authentic Riads in the Marrakech Medina, personally verified by our team before being offered.'}
            </p>
          </div>
        </section>

        {/* Grid — dark, exclusive-club feel */}
        <section className="section-padding riads-grid-section">
          <div className="container">
            <div className="riads-grid">
              {riads.map((riad, i) => (
                <article key={riad.id} className="riad-card" data-aos="fade-up" data-aos-delay={i * 100}>
                  <Link to={`/riads/${riad.id}`} className="riad-card-link">
                    <div className="riad-card-img-wrap">
                      <img src={riad.cover} alt={riad.titleIt} className="riad-card-img" />
                      <span className={`riad-card-status status-${riad.status}`}>
                        {statusLabel(riad.status, language)}
                      </span>
                    </div>
                    <div className="riad-card-body">
                      <span className="riad-card-location">
                        <FaLocationDot style={{ marginRight: '0.4rem' }} />
                        {riad.location}
                      </span>
                      <h2 className="riad-card-title">
                        {language === 'it' ? riad.titleIt : riad.titleEn}
                      </h2>
                      <p className="riad-card-summary">
                        {language === 'it' ? riad.summaryIt : riad.summaryEn}
                      </p>
                      <div className="riad-card-footer">
                        <span className="riad-card-price">{formatPrice(riad.price, language)}</span>
                        <span className="riad-card-read">
                          {language === 'it' ? 'Scopri di più →' : 'Discover more →'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-sand text-center">
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2>{language === 'it' ? 'Non trovi ciò che cerchi?' : "Can't find what you're looking for?"}</h2>
            <p style={{ opacity: 0.85, marginBottom: '1.5rem' }}>
              {language === 'it'
                ? 'Il nostro portfolio si aggiorna regolarmente con nuove opportunità non ancora pubblicate. Raccontaci cosa cerchi.'
                : 'Our portfolio updates regularly with new opportunities not yet published. Tell us what you are looking for.'}
            </p>
            <a href="/#contatti" className="btn btn-primary">
              {language === 'it' ? 'Parla con noi' : 'Talk to us'}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// ── Detail Page ──────────────────────────────────────────────────────────────
function RiadDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const riad = riads.find(r => r.id === id)
  const media = riad ? [...riad.images, ...(riad.video ? [riad.video] : [])] : []
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 40, easing: 'ease-out-cubic' })
    window.scrollTo(0, 0)
    setActiveIndex(0)
  }, [id])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % media.length)
      if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + media.length) % media.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, media.length])

  if (!riad) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <h2>{language === 'it' ? 'Riad non trovato' : 'Riad not found'}</h2>
          <Link to="/riads" className="btn btn-primary">
            {language === 'it' ? '← Torna alla collezione' : '← Back to the collection'}
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const title = language === 'it' ? riad.titleIt : riad.titleEn
  const summary = language === 'it' ? riad.summaryIt : riad.summaryEn
  const description = language === 'it' ? riad.descriptionIt : riad.descriptionEn
  const highlights = language === 'it' ? riad.highlightsIt : riad.highlightsEn
  const specs = buildSpecs(riad, language)
  const isVideo = (src) => src.endsWith('.mp4')

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="riad-detail-hero">
          <img src={riad.cover} alt={title} className="riad-detail-hero-img" />
          <div className="riad-detail-hero-overlay">
            <span className={`riad-card-status status-${riad.status}`} style={{ position: 'static', marginBottom: '1rem' }}>
              {statusLabel(riad.status, language)}
            </span>
            <h1 className="riad-detail-hero-title">{title}</h1>
            <span className="riads-hero-subtitle" style={{ opacity: 0.85, fontSize: '1rem' }}>
              <FaLocationDot style={{ marginRight: '0.5rem' }} />{riad.location}
            </span>
          </div>
        </div>

        <section className="section-padding">
          <div className="container">
            <button onClick={() => navigate('/riads')} className="blog-back-btn">
              <FaArrowLeft /> {language === 'it' ? 'Tutti i Riad' : 'All Riads'}
            </button>

            <div className="riad-detail-layout">
              {/* Gallery */}
              <div data-aos="fade-up">
                <div className="riad-gallery-main" onClick={() => setLightboxOpen(true)}>
                  {isVideo(media[activeIndex]) ? (
                    <video src={media[activeIndex]} className="riad-gallery-main-media" muted loop autoPlay playsInline />
                  ) : (
                    <img src={media[activeIndex]} alt={`${title} ${activeIndex + 1}`} className="riad-gallery-main-media" />
                  )}
                </div>
                <div className="riad-gallery-thumbs">
                  {media.map((src, i) => (
                    <button
                      key={src}
                      className={`riad-gallery-thumb ${i === activeIndex ? 'active' : ''}`}
                      onClick={() => { setActiveIndex(i); setLightboxOpen(true) }}
                      aria-label={`${language === 'it' ? 'Vai a' : 'Go to'} ${i + 1}`}
                    >
                      {isVideo(src) ? (
                        <>
                          <video src={src} className="riad-gallery-thumb-media" muted />
                          <span className="riad-gallery-thumb-play"><FaPlay /></span>
                        </>
                      ) : (
                        <img src={src} alt="" className="riad-gallery-thumb-media" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info panel */}
              <aside className="riad-info-panel" data-aos="fade-up" data-aos-delay="100">
                <span className="riad-card-price" style={{ fontSize: '1.5rem', color: 'var(--color-black)', display: 'block', marginBottom: '1.5rem' }}>{formatPrice(riad.price, language)}</span>
                <p className="riad-info-summary">{summary}</p>
                <ul className="riad-highlights">
                  {highlights.map((h, i) => (
                    <li key={i}><FaCircleCheck /> {h}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/393402778699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary hover-lift"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%' }}
                >
                  <FaWhatsapp size={20} /> {language === 'it' ? 'Scrivici su WhatsApp' : 'Message us on WhatsApp'}
                </a>
                <a href="/#contatti" className="btn btn-outline-dark" style={{ width: '100%', textAlign: 'center', marginTop: '0.75rem' }}>
                  {language === 'it' ? 'Prenota una consulenza' : 'Book a consultation'}
                </a>
              </aside>
            </div>

            {/* Technical details — same layout on every Riad page */}
            {specs.length > 0 && (
              <div data-aos="fade-up">
                <h2 style={{ fontSize: '1.5rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
                  {language === 'it' ? 'Dettagli Tecnici' : 'Technical Details'}
                </h2>
                <div className="riad-specs-grid" style={{ marginTop: 0 }}>
                  {specs.map((spec, i) => (
                    <div key={i} className="riad-spec-item">
                      <span className="riad-spec-icon">{spec.icon}</span>
                      <div>
                        <div className="riad-spec-label">{spec.label}</div>
                        <div className="riad-spec-value">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {riad.specsIndicative && (
                  <p style={{ fontSize: '0.82rem', opacity: 0.55, marginTop: '0.9rem', marginBottom: 0 }}>
                    {language === 'it'
                      ? '* Valori indicativi, in attesa di conferma definitiva.'
                      : '* Indicative values, pending final confirmation.'}
                  </p>
                )}
              </div>
            )}

            {/* Description */}
            <div className="riad-description" data-aos="fade-up">
              {description.trim().split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="riad-lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="riad-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <FaXmark />
          </button>
          <button
            className="riad-lightbox-nav riad-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setActiveIndex(i => (i - 1 + media.length) % media.length) }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <div className="riad-lightbox-content" onClick={(e) => e.stopPropagation()}>
            {isVideo(media[activeIndex]) ? (
              <video src={media[activeIndex]} controls autoPlay className="riad-lightbox-media" />
            ) : (
              <img src={media[activeIndex]} alt="" className="riad-lightbox-media" />
            )}
          </div>
          <button
            className="riad-lightbox-nav riad-lightbox-next"
            onClick={(e) => { e.stopPropagation(); setActiveIndex(i => (i + 1) % media.length) }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────
export { RiadsList, RiadDetail }

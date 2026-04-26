import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTiktok, FaXTwitter, FaWhatsapp, FaCircleCheck, FaTriangleExclamation, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/bledliving@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '—',
          interest: formData.interest,
          message: formData.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.18)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: 'var(--color-white)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s ease, background-color 0.3s ease',
    boxSizing: 'border-box',
  }

  return (
    <footer id="contatti" className="footer" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', paddingTop: '5rem', paddingBottom: '0' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3.5rem' }} data-aos="fade-up">
          <h2 style={{ color: 'var(--color-white)', fontSize: '2.25rem', marginBottom: '0.75rem' }}>{t('footer', 'title')}</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8, fontSize: '1rem' }}>{t('footer', 'subtitle')}</p>
        </div>

        {/* Two-column: Form + WhatsApp */}
        <div className="footer-contact-grid" data-aos="fade-up" data-aos-delay="100">

          {/* --- Contact Form --- */}
          <div className="footer-form-card">
            <h3 style={{ color: 'var(--color-terracotta)', marginBottom: '1.75rem', fontSize: '1.25rem', fontWeight: '600' }}>{t('footer', 'formTitle')}</h3>

            {status === 'success' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <FaCircleCheck style={{ fontSize: '1.5rem', color: '#25D366', flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#fff' }}>{t('footer', 'formSuccess')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Row 1: Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', opacity: 1, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>{t('footer', 'formName')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('footer', 'formName')}
                    required
                    style={{...inputStyle, backgroundColor: 'rgba(255,255,255,0.12)'}}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', opacity: 1, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@esempio.com"
                    required
                    style={{...inputStyle, backgroundColor: 'rgba(255,255,255,0.12)'}}
                  />
                </div>
              </div>

              {/* Row 2: Phone + Interest */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', opacity: 1, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>{t('footer', 'formPhone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39..."
                    style={{...inputStyle, backgroundColor: 'rgba(255,255,255,0.12)'}}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', opacity: 1, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>{t('footer', 'formInterest')}</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer', backgroundColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <option value="" disabled style={{ color: '#333' }}>{t('footer', 'formInterestDefault')}</option>
                    <option value="Investimento Immobiliare" style={{ color: '#333' }}>{t('footer', 'formInterest1')}</option>
                    <option value="Viaggio su Misura" style={{ color: '#333' }}>{t('footer', 'formInterest2')}</option>
                    <option value="Consulenza Business" style={{ color: '#333' }}>{t('footer', 'formInterest3')}</option>
                    <option value="Relocation" style={{ color: '#333' }}>{t('footer', 'formInterest4')}</option>
                    <option value="Altro" style={{ color: '#333' }}>{t('footer', 'formInterest5')}</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', opacity: 1, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>Messaggio</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('footer', 'formMessage')}
                  required
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6', backgroundColor: 'rgba(255,255,255,0.12)' }}
                />
              </div>

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb3b3', fontSize: '0.9rem' }}>
                  <FaTriangleExclamation />
                  <span>{t('footer', 'formError')}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}
              >
                {status === 'sending' ? t('footer', 'formSending') : t('footer', 'formSubmit')}
              </button>
            </form>
          </div>

          {/* --- WhatsApp Alternative --- */}
          <div className="footer-whatsapp-card">
            <div className="footer-whatsapp-inner">
              <div style={{ width: '72px', height: '72px', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 24px rgba(37,211,102,0.35)' }}>
                <FaWhatsapp style={{ fontSize: '2rem', color: '#fff' }} />
              </div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '600' }}>{t('footer', 'whatsappTitle')}</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '2rem', fontSize: '1rem' }}>{t('footer', 'whatsappDesc')}</p>
              <a
                href="https://wa.me/393402778699"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light hover-lift"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', width: '100%', justifyContent: 'center' }}
              >
                <FaWhatsapp size={20} />
                {t('footer', 'whatsappBtn')}
              </a>

              {/* Divider for Contacts removed as requested */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', padding: '2rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>Home</Link>
            <a href="/#chi-siamo" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>{t('footer', 'about')}</a>
            <a href="/#risorse" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>{t('footer', 'resources')}</a>
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>Blog</Link>
            <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>Privacy Policy</Link>
            <Link to="/cookies" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>Cookie Policy</Link>
            <Link to="/terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.6)'}>Terms & Conditions</Link>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
            <a href="mailto:info@bledliving.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#fff'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
              <FaEnvelope /> info@bledliving.com
            </a>
            <a href="tel:+393402778699" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#fff'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
              <FaPhone /> +39 340 277 8699
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FaLocationDot /> Guéliz, Marrakech
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '1.2rem' }}>
            <a href="https://instagram.com/bledliving" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#fff'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}><FaInstagram /></a>
            <a href="https://facebook.com/bledliving" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#fff'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}><FaFacebookF /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#fff'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}><FaTiktok /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#fff'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}><FaXTwitter /></a>
          </div>

          <p style={{ opacity: 0.4, fontSize: '0.75rem', margin: 0 }}>© {new Date().getFullYear()} Bled Living. {t('footer', 'rights')}</p>
        </div>
      </div>
    </footer>
  )
}

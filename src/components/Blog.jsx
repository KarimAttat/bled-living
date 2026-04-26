import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { posts } from '../data/blogPosts'
import { FaArrowLeft, FaClock, FaTag, FaCalendar } from 'react-icons/fa6'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos'

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('it-IT', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

function renderContent(text) {
  // Very simple markdown-to-JSX: **bold**, paragraphs, newlines
  return text.trim().split('\n\n').map((block, i) => {
    const parsed = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    if (block.startsWith('**') && block.endsWith('**')) {
      return <h3 key={i} style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: parsed }} />
    }
    return <p key={i} style={{ lineHeight: '1.85', marginBottom: '1.25rem', opacity: 0.88 }} dangerouslySetInnerHTML={{ __html: parsed }} />
  })
}

// ── Blog List Page ────────────────────────────────────────────────────────────
function BlogList() {
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
        <section style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #1a2e24 100%)',
          padding: '8rem 0 4rem',
          color: 'var(--color-white)',
          textAlign: 'center'
        }}>
          <div className="container">
            <p style={{ color: 'var(--color-terracotta)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
              Bled Living Journal
            </p>
            <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              {language === 'it' ? 'Risorse & Approfondimenti' : 'Resources & Insights'}
            </h1>
            <p style={{ maxWidth: '560px', margin: '0 auto', opacity: 0.75, fontSize: '1.1rem' }}>
              {language === 'it'
                ? 'Guide, analisi di mercato e consigli pratici per investire e viaggiare in Marocco con consapevolezza.'
                : 'Guides, market analysis and practical advice to invest and travel in Morocco with confidence.'}
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="section-padding bg-sand">
          <div className="container">
            <div className="blog-grid">
              {posts.map((post, i) => (
                <article key={post.id} className="blog-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <Link to={`/blog/${post.id}`} className="blog-card-link">
                    <div className="blog-card-img-wrap">
                      <img src={post.image} alt={post.imageAlt} className="blog-card-img" />
                      <span className="blog-card-category" style={{ backgroundColor: post.categoryColor }}>
                        {post.category}
                      </span>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span><FaCalendar style={{ marginRight: '0.3rem', fontSize: '0.75rem' }} />{formatDate(post.date)}</span>
                        <span><FaClock style={{ marginRight: '0.3rem', fontSize: '0.75rem' }} />{post.readTime}</span>
                      </div>
                      <h2 className="blog-card-title">
                        {language === 'it' ? post.titleIt : post.titleEn}
                      </h2>
                      <p className="blog-card-excerpt">
                        {language === 'it' ? post.excerptIt : post.excerptEn}
                      </p>
                      <span className="blog-card-read">
                        {language === 'it' ? 'Leggi l\'articolo →' : 'Read article →'}
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// ── Single Article Page ───────────────────────────────────────────────────────
function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const post = posts.find(p => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!post) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <h2>Articolo non trovato</h2>
          <Link to="/blog" className="btn btn-primary">← Torna al Blog</Link>
        </div>
        <Footer />
      </>
    )
  }

  const title   = language === 'it' ? post.titleIt   : post.titleEn
  const content = language === 'it' ? post.contentIt : post.contentEn

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div style={{ position: 'relative', height: '420px', overflow: 'hidden', marginTop: '70px' }}>
          <img src={post.image} alt={post.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '3rem 1.5rem', textAlign: 'center' }}>
            <span style={{ backgroundColor: post.categoryColor, color: '#fff', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {post.category}
            </span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', maxWidth: '780px', lineHeight: '1.2' }}>{title}</h1>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '1rem' }}>
              <span><FaCalendar style={{ marginRight: '0.3rem' }} />{formatDate(post.date)}</span>
              <span><FaClock style={{ marginRight: '0.3rem' }} />{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="section-padding">
          <div className="container" style={{ maxWidth: '740px' }}>
            <button onClick={() => navigate('/blog')} className="blog-back-btn">
              <FaArrowLeft /> {language === 'it' ? 'Tutti gli articoli' : 'All articles'}
            </button>
            <div className="blog-content">
              {renderContent(content)}
            </div>
            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-sand)', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                {language === 'it' ? 'Vuoi approfondire questa opportunità?' : 'Want to explore this opportunity further?'}
              </p>
              <a href="/#contatti" className="btn btn-primary">
                {language === 'it' ? 'Prenota una consulenza gratuita' : 'Book a free consultation'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────
export { BlogList, BlogPost }

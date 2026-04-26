import React, { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Navbar from './Navbar'
import Footer from './Footer'

const containerStyle = {
  padding: '120px 20px 60px',
  maxWidth: '800px',
  margin: '0 auto',
  color: 'var(--color-black)',
  lineHeight: '1.8'
}

const headerStyle = {
  fontSize: '2.5rem',
  color: 'var(--color-primary)',
  marginBottom: '2rem'
}

const sectionTitleStyle = {
  fontSize: '1.5rem',
  color: 'var(--color-terracotta)',
  marginTop: '2rem',
  marginBottom: '1rem'
}

export function PrivacyPolicy() {
  const { language } = useLanguage()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main style={containerStyle}>
        {language === 'it' ? (
          <>
            <h1 style={headerStyle}>Informativa sulla Privacy</h1>
            <p>Data di validità: Aprile 2026</p>
            <p>BledLiving prende sul serio la tua privacy. Questa informativa spiega come raccogliamo, usiamo, condividiamo e proteggiamo le tue informazioni personali quando visiti il nostro sito e utilizzi i nostri servizi.</p>
            
            <h2 style={sectionTitleStyle}>1. Dati Raccolti</h2>
            <p>Raccogliamo le informazioni che ci fornisci volontariamente attraverso i nostri moduli di contatto, come nome, indirizzo email, numero di telefono e i tuoi interessi (ad esempio, investimenti immobiliari o viaggi su misura).</p>
            
            <h2 style={sectionTitleStyle}>2. Utilizzo dei Dati</h2>
            <p>Utilizziamo le tue informazioni per rispondere alle tue richieste, fornirti consulenza personalizzata e inviarti aggiornamenti o offerte relative ai nostri servizi (previa tua autorizzazione).</p>
            
            <h2 style={sectionTitleStyle}>3. Condivisione dei Dati</h2>
            <p>I tuoi dati non saranno venduti a terzi. Potremmo condividere le tue informazioni con partner locali (come avvocati o notai in Marocco) solo se strettamente necessario per fornirti il servizio richiesto e con il tuo consenso.</p>
            
            <h2 style={sectionTitleStyle}>4. Diritti dell'Utente (GDPR)</h2>
            <p>Hai il diritto di accedere, rettificare o cancellare i tuoi dati in qualsiasi momento. Per esercitare questi diritti, puoi contattarci all'indirizzo email info@bledliving.com.</p>
          </>
        ) : (
          <>
            <h1 style={headerStyle}>Privacy Policy</h1>
            <p>Effective Date: April 2026</p>
            <p>BledLiving takes your privacy seriously. This policy explains how we collect, use, share, and protect your personal information when you visit our website and use our services.</p>
            
            <h2 style={sectionTitleStyle}>1. Data Collected</h2>
            <p>We collect information you voluntarily provide to us through our contact forms, such as your name, email address, phone number, and your interests (e.g., real estate investment or tailored trips).</p>
            
            <h2 style={sectionTitleStyle}>2. Data Usage</h2>
            <p>We use your information to respond to your inquiries, provide personalized consulting, and send you updates or offers related to our services (subject to your consent).</p>
            
            <h2 style={sectionTitleStyle}>3. Data Sharing</h2>
            <p>Your data will not be sold to third parties. We may share your information with local partners (such as lawyers or notaries in Morocco) only if strictly necessary to provide the requested service and with your consent.</p>
            
            <h2 style={sectionTitleStyle}>4. User Rights (GDPR)</h2>
            <p>You have the right to access, rectify, or delete your data at any time. To exercise these rights, you can contact us at info@bledliving.com.</p>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export function CookiePolicy() {
  const { language } = useLanguage()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main style={containerStyle}>
        {language === 'it' ? (
          <>
            <h1 style={headerStyle}>Informativa sui Cookie</h1>
            <p>Il sito di BledLiving utilizza i cookie per migliorare la tua esperienza di navigazione. Questa pagina spiega cosa sono e come li usiamo.</p>
            
            <h2 style={sectionTitleStyle}>Cosa sono i Cookie?</h2>
            <p>I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Aiutano a ricordare le tue preferenze e a capire come utilizzi il sito.</p>
            
            <h2 style={sectionTitleStyle}>Quali Cookie usiamo?</h2>
            <ul>
              <li><strong>Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito (ad esempio per mantenere la scelta della lingua IT/EN).</li>
              <li><strong>Cookie Analitici:</strong> Ci aiutano a capire come i visitatori interagiscono col sito raccogliendo dati in forma anonima (es. numero di visite).</li>
            </ul>
            
            <h2 style={sectionTitleStyle}>Come gestire i Cookie</h2>
            <p>Puoi gestire o disabilitare i cookie direttamente dalle impostazioni del tuo browser. Tuttavia, disabilitare alcuni cookie tecnici potrebbe limitare l'esperienza di utilizzo del nostro sito.</p>
          </>
        ) : (
          <>
            <h1 style={headerStyle}>Cookie Policy</h1>
            <p>The BledLiving website uses cookies to improve your browsing experience. This page explains what they are and how we use them.</p>
            
            <h2 style={sectionTitleStyle}>What are Cookies?</h2>
            <p>Cookies are small text files that are saved on your device when you visit a website. They help remember your preferences and understand how you use the site.</p>
            
            <h2 style={sectionTitleStyle}>Which Cookies do we use?</h2>
            <ul>
              <li><strong>Technical Cookies:</strong> Necessary for the proper functioning of the site (for example, to maintain your IT/EN language choice).</li>
              <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with the site by collecting anonymous data (e.g., number of visits).</li>
            </ul>
            
            <h2 style={sectionTitleStyle}>How to manage Cookies</h2>
            <p>You can manage or disable cookies directly from your browser settings. However, disabling some technical cookies might limit your experience on our website.</p>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export function TermsConditions() {
  const { language } = useLanguage()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main style={containerStyle}>
        {language === 'it' ? (
          <>
            <h1 style={headerStyle}>Termini e Condizioni</h1>
            <p>Benvenuto sul sito di BledLiving. L'utilizzo di questo sito e dei nostri servizi di consulenza è regolato dai seguenti termini.</p>
            
            <h2 style={sectionTitleStyle}>1. Servizi Offerti</h2>
            <p>BledLiving offre servizi di consulenza immobiliare, supporto legale e organizzazione di viaggi d'affari in Marocco. Non siamo agenti immobiliari accreditati, ma fungiamo da consulenti e intermediari per accompagnarti durante il processo.</p>
            
            <h2 style={sectionTitleStyle}>2. Nessuna Garanzia di Rendimento</h2>
            <p>Qualsiasi stima di ROI o proiezione di rendimento fornita sul nostro sito è basata su dati storici e analisi di mercato, e non costituisce una garanzia di guadagno futuro. Gli investimenti comportano sempre un rischio.</p>
            
            <h2 style={sectionTitleStyle}>3. Limitazione di Responsabilità</h2>
            <p>BledLiving si impegna a fornire informazioni accurate e aggiornate. Tuttavia, le leggi marocchine sull'immobiliare possono subire modifiche. Consigliamo sempre il supporto di un notaio o avvocato locale (che saremo lieti di presentarvi).</p>
            
            <h2 style={sectionTitleStyle}>4. Modifiche</h2>
            <p>Ci riserviamo il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. L'uso continuato del sito implica l'accettazione di tali modifiche.</p>
          </>
        ) : (
          <>
            <h1 style={headerStyle}>Terms and Conditions</h1>
            <p>Welcome to the BledLiving website. Your use of this site and our consulting services is governed by the following terms.</p>
            
            <h2 style={sectionTitleStyle}>1. Services Offered</h2>
            <p>BledLiving provides real estate consulting, legal support coordination, and business travel organization in Morocco. We act as consultants and facilitators to guide you through the process.</p>
            
            <h2 style={sectionTitleStyle}>2. No Guarantee of Returns</h2>
            <p>Any ROI estimates or yield projections provided on our site are based on historical data and market analysis, and do not constitute a guarantee of future earnings. Investments always carry a degree of risk.</p>
            
            <h2 style={sectionTitleStyle}>3. Limitation of Liability</h2>
            <p>BledLiving is committed to providing accurate and updated information. However, Moroccan real estate laws may change. We always recommend the support of a local notary or lawyer (whom we will gladly introduce to you).</p>
            
            <h2 style={sectionTitleStyle}>4. Amendments</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Continued use of the site implies acceptance of these changes.</p>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

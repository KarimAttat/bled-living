import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export default function SEO() {
  const { language, t } = useLanguage();

  return (
    <Helmet>
      <html lang={language} />
      <title>{t('seo', 'title')}</title>
      <meta name="title" content={t('seo', 'title')} />
      <meta name="description" content={t('seo', 'description')} />
      <meta property="og:title" content={t('seo', 'title')} />
      <meta property="og:description" content={t('seo', 'description')} />
      <meta property="twitter:title" content={t('seo', 'title')} />
      <meta property="twitter:description" content={t('seo', 'description')} />
    </Helmet>
  );
}

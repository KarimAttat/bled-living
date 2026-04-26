import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Check local storage or default to 'it'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('bled_language');
    return saved ? saved : 'it';
  });

  useEffect(() => {
    localStorage.setItem('bled_language', language);
    // Optionally update document lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = (section, key) => {
    if (!translations[language] || !translations[language][section] || translations[language][section][key] === undefined) {
      console.warn(`Translation missing for ${language}.${section}.${key}`);
      return `${section}.${key}`;
    }
    return translations[language][section][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

import React, { createContext, useState } from 'react';
import en from './en.json';
import fr from './fr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const translations = language === 'en' ? en : fr;

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

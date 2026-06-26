import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Récupère la langue sauvegardée, sinon 'en'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('fifa_lang') || 'en';
  });

  // Sauvegarde à chaque changement
  useEffect(() => {
    localStorage.setItem('fifa_lang', lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

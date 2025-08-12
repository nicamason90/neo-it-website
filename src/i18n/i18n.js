// src/i18n/i18n.js
import { createContext, useContext, useMemo, useState } from 'react';
import es from '../locales/es.json';
import en from '../locales/en.json';

const LanguageContext = createContext({
  lang: 'es',
  setLang: () => {},
  t: (key) => key
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const dict = lang === 'es' ? es : en;

  const t = (key) => (Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}

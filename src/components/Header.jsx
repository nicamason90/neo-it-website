import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '../i18n/i18n';

function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className="text-xs border px-2 py-1 rounded border-gray-700 hover:border-neo-red transition"
      aria-label="Toggle language"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem = (href, label) => (
    <a href={href} className="hover:text-red-400">{label}</a>
  );

  return (
    <header className={`sticky top-0 z-50 transition border-b ${scrolled ? 'bg-black/90 backdrop-blur border-gray-800' : 'bg-black border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#inicio" className="flex items-center gap-3">
          <img src="/neo-logo.svg?v=2" alt="Neo IT" className="h-8 w-auto" />
          <span className="sr-only">Neo IT Services</span>
        </Link>

        <nav className="space-x-4 text-sm hidden md:flex items-center">
          {navItem('#inicio', t('nav.home'))}
          {navItem('#servicios', t('nav.services'))}
          {navItem('#nosotros', t('nav.about'))}
          {navItem('#contacto', t('nav.contact'))}
          <LanguageToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button className="focus:outline-none" onClick={() => setIsOpen(o => !o)} aria-label="Menú">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-black border-l border-gray-800 p-6 z-50"
          >
            <nav className="flex flex-col space-y-6 mt-8 text-lg">
              <a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-red-400">{t('nav.home')}</a>
              <a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-red-400">{t('nav.services')}</a>
              <a href="#nosotros" onClick={() => setIsOpen(false)} className="hover:text-red-400">{t('nav.about')}</a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-red-400">{t('nav.contact')}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

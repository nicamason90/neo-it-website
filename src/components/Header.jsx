import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">NEO</h1>

        {/* Nav normal en desktop */}
        <nav className="space-x-4 text-sm hidden md:block">
          <a href="#inicio" className="hover:text-red-400">Inicio</a>
          <a href="#servicios" className="hover:text-red-400">Servicios</a>
          <a href="#nosotros" className="hover:text-red-400">Nosotros</a>
          <a href="#contacto" className="hover:text-red-400">Contacto</a>
        </nav>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(open => !open)}
          aria-label="Menú"
        >
          {isOpen
            ? <FaTimes size={24} />
            : <FaBars size={24} />
          }
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-black border-l border-gray-800 p-6 z-50"
          >
            <nav className="flex flex-col space-y-6 mt-8 text-lg">
              <a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-red-400">Inicio</a>
              <a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-red-400">Servicios</a>
              <a href="#nosotros" onClick={() => setIsOpen(false)} className="hover:text-red-400">Nosotros</a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-red-400">Contacto</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

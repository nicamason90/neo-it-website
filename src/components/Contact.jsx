import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contacto"
      className="bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6 border-t border-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">
          Contáctanos
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;

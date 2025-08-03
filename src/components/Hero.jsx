import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="inicio"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-32 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 drop-shadow-lg mb-4 transition duration-300">
        Neo IT Services
      </h1>
      <h2 className="text-lg md:text-2xl text-gray-300 tracking-wide">
        Network • Endpoint • Operations
      </h2>
      <p className="mt-6 max-w-xl mx-auto text-gray-400 text-sm md:text-base">
        Bienvenido a Neo IT Services. Brindamos soluciones tecnológicas modernas para tu red, tus dispositivos y tus operaciones.
      </p>
    </motion.section>
  );
}

export default Hero;

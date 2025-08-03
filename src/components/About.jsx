import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="nosotros"
      className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-6 border-t border-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">¿Quiénes somos?</h2>
        <p className="text-gray-300 text-md md:text-lg mb-6">
          En <strong>Neo IT Services</strong>, nos especializamos en brindar soluciones tecnológicas integrales que impulsan la eficiencia y seguridad de las operaciones de nuestros clientes...
        </p>
        <p className="text-gray-400 text-sm">
          Desde servicios gestionados (MSP)... nuestro compromiso para convertirnos en el socio tecnológico de confianza para tu crecimiento.
        </p>
      </div>
    </motion.section>
  );
}

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaLaptop, FaServer } from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: 'Network',
      description: 'Diseño, instalación y gestión de redes cableadas e inalámbricas. Configuración de routers, switches y firewalls.',
      icon: <FaNetworkWired className="text-4xl text-red-500 mb-4" />,
    },
    {
      title: 'Endpoint',
      description: 'Soporte técnico para PCs, laptops y dispositivos. Protección con antivirus, EDR y políticas de seguridad.',
      icon: <FaLaptop className="text-4xl text-red-500 mb-4" />,
    },
    {
      title: 'Operations',
      description: 'Monitoreo, automatización, soluciones MSP, backup y alertas. Mejora continua de la infraestructura IT.',
      icon: <FaServer className="text-4xl text-red-500 mb-4" />,
    },
  ];

  return (
    <motion.section
      id="servicios"
      className="bg-black text-white py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-red-600 transition hover:scale-105 transform duration-300"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-500 mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;

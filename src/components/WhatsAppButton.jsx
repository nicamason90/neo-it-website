import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      title="Contáctanos por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppButton;

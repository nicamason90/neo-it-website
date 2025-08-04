import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .sendForm(
        'service_muw5peq',
        'template_wf8bdji',
        form.current,
        'S5sY6rPpjOvTbNwNX'
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <motion.section
      id="contacto"
      className="bg-black text-white py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-600">Contáctanos</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="w-full bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Tu correo"
            required
            className="w-full bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            name="user_message"
            rows="5"
            placeholder="Tu mensaje"
            required
            className="w-full bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 transition px-6 py-3 rounded font-semibold"
          >
            Enviar mensaje
          </button>

          {status === 'success' && (
            <p className="text-green-400 mt-4">✅ ¡Mensaje enviado con éxito!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 mt-4">❌ Hubo un error. Intenta de nuevo.</p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;

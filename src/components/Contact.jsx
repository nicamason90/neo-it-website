import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const { t } = useI18n();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <motion.section
      id="contacto"
      className="bg-black text-white py-20 px-6 border-t border-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-neo-red">{t('contact.title')}</h2>
        <p className="text-gray-300 mb-8">{t('contact.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <input name="name" type="text" placeholder={t('contact.form.name')} required className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <input name="email" type="email" placeholder={t('contact.form.email')} required className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <textarea name="message" rows="5" placeholder={t('contact.form.message')} required className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600" />
          <button type="submit" className="btn-primary">{t('contact.form.submit')}</button>

          {status === 'success' && <p className="text-green-400 mt-3">{t('contact.status.ok')}</p>}
          {status === 'error' && <p className="text-red-400 mt-3">{t('contact.status.err')}</p>}
        </form>
      </div>
    </motion.section>
  );
}

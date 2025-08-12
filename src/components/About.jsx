import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';

export default function About() {
  const { t } = useI18n();
  return (
    <motion.section
      id="nosotros"
      className="bg-black text-white py-20 px-6 border-t border-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-neo-red">{t('about.title')}</h2>
        <p className="text-gray-300">{t('about.desc')}</p>
      </div>
    </motion.section>
  );
}


import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="bg-black text-white py-24">
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-gray-300 mt-2">{t('hero.subtitle')}</p>
          <p className="mt-6 text-gray-300">{t('hero.desc')}</p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#servicios" className="btn-primary">{t('hero.cta.services')}</a>
            <a href="#contacto" className="px-6 py-3 rounded border border-gray-700 hover:border-red-500 transition">{t('hero.cta.contact')}</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64">
          <img alt="NEO logo" src="/neo-logo.svg" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(229,9,20,0.4)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

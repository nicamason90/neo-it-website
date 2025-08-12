
import { motion } from 'framer-motion';
import { FaNetworkWired, FaLaptopCode, FaCogs, FaRobot, FaCamera, FaHouseUser, FaTools } from 'react-icons/fa';
import { useI18n } from '../i18n/i18n';

const defs = [
  { key: 'network', Icon: FaNetworkWired },
  { key: 'endpoint', Icon: FaLaptopCode },
  { key: 'operations', Icon: FaCogs },
  { key: 'virtual', Icon: FaRobot },
  { key: 'cctv', Icon: FaCamera },
  { key: 'smarthome', Icon: FaHouseUser },
  { key: 'rental', Icon: FaTools },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <motion.section
      id="servicios"
      className="bg-black text-white py-20 px-6 border-t border-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container-max">
        <h2 className="text-3xl font-bold mb-8 text-neo-red">{t('services.title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {defs.map(({ key, Icon }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-5 hover:border-neo-red/60 hover:shadow-soft transition group"
            >
              <div className="text-2xl text-neo-red mb-3 group-hover:scale-110 transition inline-flex"><Icon /></div>
              <h3 className="text-xl font-semibold capitalize">{key}</h3>
              <p className="text-gray-300 text-sm mt-2">{t(`services.items.${key}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

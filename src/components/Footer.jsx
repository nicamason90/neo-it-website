import { useI18n } from '../i18n/i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Columna 1: Marca */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src="/neo-logo.svg?v=2" alt="Neo IT" className="h-8 w-auto" />
            <span className="font-semibold">Neo IT Services</span>
          </div>
          <p className="text-sm text-gray-400 mt-3">{t('footer.tag')}</p>
        </div>

        {/* Columna 2: Links rápidos */}
        <div className="text-center">
          <h4 className="font-semibold mb-3">Links</h4>
          <nav className="space-y-2 text-sm">
            <a href="#inicio" className="hover:text-neo-red">Inicio</a><br />
            <a href="#servicios" className="hover:text-neo-red">Servicios</a><br />
            <a href="#nosotros" className="hover:text-neo-red">Nosotros</a><br />
            <a href="#contacto" className="hover:text-neo-red">Contacto</a>
          </nav>
        </div>

        {/* Columna 3: Contacto */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-3">Contacto</h4>
          <p className="text-sm text-gray-400">contact@neoitservices.pro</p>
          <p className="text-sm text-gray-400">San Salvador, El Salvador</p>
        </div>
      </div>

      <div className="border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Neo IT Services</p>
          <p>Network • Endpoint • Operations</p>
        </div>
      </div>
    </footer>
  );
}

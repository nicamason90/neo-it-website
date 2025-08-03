import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-red-600">NEO</h3>
          <p className="text-sm text-gray-400">Network • Endpoint • Operations</p>
        </div>

        <nav className="flex space-x-6 text-sm">
          <a href="#inicio" className="hover:text-red-400">Inicio</a>
          <a href="#servicios" className="hover:text-red-400">Servicios</a>
          <a href="#nosotros" className="hover:text-red-400">Nosotros</a>
          <a href="#contacto" className="hover:text-red-400">Contacto</a>
        </nav>

        <div className="flex space-x-4 text-red-600">
          <FaFacebookF className="hover:text-red-400 cursor-pointer" />
          <FaInstagram className="hover:text-red-400 cursor-pointer" />
          <FaLinkedin className="hover:text-red-400 cursor-pointer" />
          <FaGithub className="hover:text-red-400 cursor-pointer" />
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Neo IT Services. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/imagens/logo.png';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="relative bg-blue-800 text-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/home" onClick={() => setMenuAberto(false)}>
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 rounded-full ml-0 md:ml-4"
            />
          </Link>
        </div>

        {/* Botão hambúrguer (só no mobile) */}
        <div className="md:hidden">
          <button
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((v) => !v)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
          >
            {menuAberto ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={
            // Mobile: dropdown absoluto ocupando a largura; Desktop: menu inline
            `
            z-50
            md:flex md:items-center md:space-x-5 md:static md:bg-transparent md:w-auto md:px-0 md:py-0
            absolute left-0 right-0 top-full w-full bg-blue-800 px-6 py-4 border-t border-blue-700
            ${menuAberto ? 'flex flex-col space-y-4' : 'hidden'}
            `
          }
        >
          <li className="hover:text-gray-200">
            <Link to="/home" onClick={() => setMenuAberto(false)}>Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/produtos" onClick={() => setMenuAberto(false)}>Produtos</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/contato" onClick={() => setMenuAberto(false)}>Contato</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

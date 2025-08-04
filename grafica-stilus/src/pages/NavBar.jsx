import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/imagens/logo.png';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="text-white bg-blue-800">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/home">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 rounded-full ml-4"
            />
          </Link>
        </div>

        {/* Botão hambúrguer (visível só no mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu de navegação */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 absolute md:static bg-blue-800 md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            menuAberto ? 'top-20' : 'top-[-500px]'
          }`}
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

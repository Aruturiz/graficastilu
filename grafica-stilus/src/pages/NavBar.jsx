import { Link } from 'react-router-dom';

function NavBar(){
    return(
    <nav className=" text-white bg-blue-800  ">
      <div className="flex justify-between items-center px-6 py-2">
        
        
        <div className="flex-shrink-0">
         <Link to="/home"> <img src="/assets/imagens/logo.png" alt="Logo" className=" w-20 h-20 rounded-full ml-15" /></Link>
        </div>
        
        
        <ul className="flex space-x-5  mr-15 ">
          <li className="hover:text-gray-200">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/contato">Contato</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}
export default NavBar
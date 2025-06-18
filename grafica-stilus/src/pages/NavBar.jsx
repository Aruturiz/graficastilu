import { Link } from 'react-router-dom';

function NavBar(){
    return(
    <nav className="bg-blue-400 text-white p-6 shadow-md">
      <div className="container mx-auto flex items-center ">
        
        <ul className="hidden md:flex space-x-7 ml-auto">
          <li className="hover:text-gray-300 "> <Link to="/home">Home</Link> </li>
          <li className="hover:text-gray-300"><Link to="/produtos">Produtos</Link></li>
          <li className="hover:text-gray-300">Sobre</li>
        </ul>

         </div>
    </nav>
    )
}
export default NavBar
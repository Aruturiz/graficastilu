import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import foto1 from '../assets/Imagens/home/foto1.jpg'

function Home_tem(){
    return(
    <div >
    
        <NavBar />

        <div className="  bg-blue-800 p-20 lex-shrink-0 flex justify-between items-center">

    <div className=" text-shadow-amber-100">
        <img src={foto1} alt='foto_da_frente' className="w-100 h-120 ml-10 rounded-xl "/>
    </div >
        <h1 className="font-spaceGrotesk font-bold text-amber-100 text-6xl ">
            A Gráfica que você idealiza para seus projetos
        </h1>
        </div>
    </div>
    )
   
}
export default Home_tem
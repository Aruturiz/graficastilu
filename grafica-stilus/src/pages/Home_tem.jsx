import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import foto1 from '../assets/Imagens/home/foto1.jpg'

function Home_tem() {
  return (
    <div>
      <NavBar />

      <div className="bg-blue-800 p-10 flex items-start justify-start">

        
        <img src={foto1} alt='foto_da_frente' className=" ml-15 w-115 h-auto rounded-xl" />

        
        <div className="ml-15 max-w-3xl">
          <h1 className="font-bold text-amber-100 text-6xl text-left">
            A Gráfica que você <br /> idealiza para seus <br /> projetos
          </h1>

          <p className="text-amber-100 mt-4 leading-relaxed">
            Somos apaixonados por transformar ideias em materiais que impressionam.
            Com tecnologia de ponta e uma equipe especializada, entregamos qualidade,
            agilidade e excelência em cada impressão. Seja qual for o tamanho do seu projeto,
            estamos prontos para fazer acontecer!
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home_tem;

import { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import foto1 from '../assets/Imagens/home/foto1.jpg';
import degrade from '../assets/Imagens/home/degrade.png';
import grafico from '../assets/Imagens/home/grafico.png';
import Footer from './footer';

function Home_tem() {
  const cards = [
    { titulo: 'Banner Personalizado', descricao: 'Produção rápida e de alta qualidade para divulgar sua marca.', imagem: '../assets/Imagens/home/foto1.jpg' },
    { titulo: 'Cartões de Visita', descricao: 'Impressione seus clientes com um cartão de visita profissional.' },
    { titulo: 'Adesivos Promocionais', descricao: 'Divulgue sua marca com adesivos criativos e duráveis.' },
    { titulo: 'Brindes Corporativos', descricao: 'Crie conexão com seus clientes com brindes personalizados.' },
    { titulo: 'Folders & Panfletos', descricao: 'Material promocional impactante para divulgação de serviços.' },
  ];

  const cardWidth = 320;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const listRef = useRef();

  const fullList = [...cards, ...cards]; // Duplica os cards para loop contínuo

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reseta para início sem transição após chegar na metade (início da duplicata)
  useEffect(() => {
    if (currentIndex === cards.length) {
      setTimeout(() => {
        setIsTransitioning(false); // Desativa transição
        setCurrentIndex(0);        // Reseta para o índice 0
      }, 1000); // Aguarda fim da animação
    }
  }, [currentIndex, cards.length]);

  return (
    <div>
      <NavBar />

      {/* Seção principal */}
      <div className="relative min-h-screen p-10 flex items-start justify-start">
        <img
          src={degrade}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />

        <img src={foto1} alt="foto_da_frente" className="ml-10 w-[400px] h-auto rounded-xl" />

        <div className="ml-10 max-w-3xl">
          <h1 className="font-medium text-amber-100 text-6xl text-left">
            A <strong>Gráfica</strong> que você <br /> <strong>idealiza</strong> para seus <br /> projetos
          </h1>

          <p className="text-amber-100 mt-10 leading-relaxed text-2xl">
            Somos apaixonados por transformar ideias em materiais que impressionam.
            Com tecnologia de ponta e uma equipe especializada, entregamos qualidade,
            agilidade e excelência em cada impressão. Seja qual for o tamanho do seu projeto,
            estamos prontos para fazer acontecer!
          </p>
        </div>
      </div>

      {/* Carrossel animado com loop */}
      <div className="bg-blue-600 py-30">
        <div className=" rounded-3xl py-5  mr-80 ml-80 -my-20">
          <h1 className="text-center text-amber-100 text-5xl font-bold mb-10 ">OFERTAS</h1>
      </div>


          <div className="overflow-hidden w-full">
            <div
              ref={listRef}
              className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                width: `${fullList.length * cardWidth}px`,
              }}
            >
              {fullList.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-5 h-64 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 my-30">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">{card.titulo}</h2>
                    <img></img>
                    <p className="text-gray-700 text-center">{card.descricao}</p>
                    <button className="bg-blue-400 w-25 h-10 rounded-4xl my-10 hover:size-30 ">
                      <h1 className='text-amber-100 font'>Pedir</h1>
                    </button>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
      </div>
      <div className='bg-blue-600 '>
        <div className='flex flex-auto'>
              <img src={grafico} className='flex '/>
              <h1 className='m-30 text-7xl font text-amber-100 font-bold'> Nossos Serviços</h1>
              <p></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home_tem;

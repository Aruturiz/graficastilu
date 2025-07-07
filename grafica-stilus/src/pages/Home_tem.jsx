import { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import foto1 from '../assets/Imagens/home/foto1.jpg';
import degrade from '../assets/Imagens/home/degrade.png';
import grafico from '../assets/Imagens/home/grafico.png';
import you from '../assets/Imagens/home/you.png';
import Footer from './footer';

function Home_tem() {
  const cards = [
    { titulo: 'Banner Personalizado', descricao: 'Produção rápida e de alta qualidade para divulgar sua marca.', imagem:you },
    { titulo: 'Cartões de Visita', descricao: 'Impressione seus clientes com um cartão de visita profissional.',imagem:you },
    { titulo: 'Adesivos ', descricao: 'Divulgue sua marca com adesivos criativos e duráveis.',  imagem:you },
    { titulo: 'Brindes Corporativos', descricao: 'Crie conexão com seus clientes com brindes personalizados.',imagem:you },
    { titulo: 'Folders & Panfletos', descricao: 'Material promocional impactante para divulgação de serviços.',imagem:you},
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
          className="absolute top-0 left-0 w-full h-full bg-cover -z-20"
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
      <div className="bg-blue-600 py-15">
        <div className=" rounded-3xl py-5  mr-80 ml-80 -my-20">
          <h1 className="text-center text-amber-100 text-5xl font-bold mb-10 m-5">OFERTAS</h1>
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
                  <div className="bg-white rounded-xl shadow-lg p-5 h-84 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 my-30">
                    
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">{card.titulo}</h2>
                    {card.imagem && (
                  <img src={card.imagem} alt={card.titulo} className="w-24 h-24 object-contain mb-2" />
                    )}
                    <p className="text-gray-700 text-center">{card.descricao}</p>
                    <button className="rosa w-25 h-10 rounded-4xl my-10 hover:scale-x-120 ">
                      <h1 className='text-amber-100 text-1xl font'>Pedir</h1>
                    </button>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
      </div>
      <div className='bg-blue-700 h-'>
        <div className='flex flex-auto '>
              <img src={grafico} className='flex m-5'/>
              <div className='m-5 my-20'>
              <h1 className=' text-7xl font m-5 text-amber-100 font-bold'> Nossos Serviços</h1>
              <div>
              <p className='font text-amber-100 text-2xl'>Se você procura qualidade e confiança para seus materiais gráficos,
                 está no lugar certo. Aqui, cuidamos de cada detalhe para que seu projeto ganhe vida 
                 com o acabamento e a apresentação que ele merece. Produzimos desde cartões de visita,
                  panfletos, banners e adesivos, até convites especiais, folders e papelaria 
                  personalizada.</p>
              </div>
              </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home_tem;

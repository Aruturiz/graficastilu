import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import foto1 from '../assets/Imagens/home/foto1.jpg';
import degrade from '../assets/Imagens/home/degrade.png';

function Home_tem() {
  const cards = [
    { titulo: 'Banner Personalizado', descricao: 'Produção rápida e de alta qualidade para divulgar sua marca.' },
    { titulo: 'Cartões de Visita', descricao: 'Impressione seus clientes com um cartão de visita profissional.' },
    { titulo: 'Adesivos Promocionais', descricao: 'Divulgue sua marca com adesivos criativos e duráveis.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 5) % cards.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div>
      <NavBar />

      
      <div className="relative min-h-screen p-10 flex items-start justify-start">
        <img
          src={degrade}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />

        <img src={foto1} alt="foto_da_frente" className="ml-15 w-115 h-auto rounded-xl" />

        <div className="ml-15 max-w-3xl">
          <h1 className="font-medium text-amber-100 text-6xl text-left">
            A <strong>Gráfica</strong> que você <br /> idealiza para seus <br /> projetos
          </h1>

          <p className="text-amber-100 mt-20 leading-relaxed text-2xl">
            Somos apaixonados por transformar ideias em materiais que impressionam.
            Com tecnologia de ponta e uma equipe especializada, entregamos qualidade,
            agilidade e excelência em cada impressão. Seja qual for o tamanho do seu projeto,
            estamos prontos para fazer acontecer!
          </p>
        </div>
      </div>

     
      <div className="bg-fuchsia-500 py-20">
        <div className="bg-blue-400 rounded-3xl p-10 m-10 relative">
          <h1 className="text-center text-amber-100 text-7xl font-bold mb-5">OFERTAS</h1>
        </div>

          
          <div
            className="flex transition-transform duration-[2000ms] ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${cards.length * 25}%`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4"
                style={{ width: '80%' }}
              >
                <div className="bg-white rounded-xl shadow-lg p-5 h-64 w-[300px] flex flex-col items-center  mx-auto">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">{card.titulo}</h2>
                  <p className="text-gray-700 text-center">{card.descricao}</p>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default Home_tem;

import { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import foto1 from '../assets/imagens/home/foto1.jpg';
import grafico from '../assets/imagens/home/grafico.png';
import foto from '../assets/imagens/home/foto.png';
import maquina2 from '../assets/imagens/home/maquina2.png';
import maquina3 from '../assets/imagens/home/maquina3.png';
import baner from '../assets/imagens/home/baner.png';
import visita from '../assets/imagens/home/visita.png';
import adesivo from '../assets/imagens/home/adesivo.png';
import brindes from '../assets/imagens/home/brindes.png';
import folder from '../assets/imagens/home/folder.png';

function Home_tem() {
  const cards = [
    { titulo: 'Banner Personalizado', descricao: 'Produção rápida e de alta qualidade para divulgar sua marca.', imagem: baner },
    { titulo: 'Cartões de Visita', descricao: 'Impressione seus clientes com um cartão de visita profissional.', imagem: visita },
    { titulo: 'Adesivos', descricao: 'Divulgue sua marca com adesivos criativos e duráveis.', imagem: adesivo },
    { titulo: 'Brindes Corporativos', descricao: 'Crie conexão com seus clientes com brindes personalizados.', imagem: brindes },
    { titulo: 'Folders & Panfletos', descricao: 'Material promocional impactante para divulgação de serviços.', imagem: folder },
  ];

  const cardWidth = 320;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const listRef = useRef();

  const fullList = [...cards, ...cards];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === cards.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
    }
  }, [currentIndex, cards.length]);

  // Classes fixas (sem template string dinâmico) para evitar purge do Tailwind
  const serviceItems = [
    {
      emoji: '🖨️',
      title: 'Impressão Digital',
      desc: 'Alta qualidade e rapidez para suas demandas.',
      classes: 'border-blue-600 hover:bg-cyan-200 text-blue-800',
    },
    {
      emoji: '🎉',
      title: 'Convites Personalizados',
      desc: 'Criações únicas para momentos especiais.',
      classes: 'border-pink-500 hover:bg-pink-200 text-pink-700',
    },
    {
      emoji: '📚',
      title: 'Encadernações',
      desc: 'Organize seus documentos com estilo.',
      classes: 'border-green-500 hover:bg-green-200 text-green-700',
    },
    {
      emoji: '📦',
      title: 'Cartazes, Banners e Adesivos',
      desc: 'Materiais impactantes para divulgação.',
      classes: 'border-yellow-500 hover:bg-yellow-200 text-yellow-600',
    },
    {
      emoji: '💡',
      title: 'Arte Final e Design Gráfico',
      desc: 'Criações visuais profissionais para seu projeto.',
      classes: 'border-purple-500 hover:bg-purple-200 text-purple-700',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-800">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-t from-blue-500 to-blue-800">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 px-4 md:px-8 py-10">
          <img
            src={foto1}
            alt="Foto de destaque"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl"
          />
          <div className="w-full">
            <h1 className="font-medium text-amber-100 text-3xl sm:text-4xl md:text-6xl leading-tight">
              A <strong>Gráfica</strong> que você <br className="hidden md:block" />
              <strong> idealiza</strong> para seus <br className="hidden md:block" />
              projetos e decoração
            </h1>
            <p className="text-amber-100 mt-6 md:mt-10 leading-relaxed text-base sm:text-lg md:text-2xl">
              Somos apaixonados por transformar ideias em materiais que impressionam.
              Com tecnologia de ponta e uma equipe especializada, entregamos qualidade,
              agilidade e excelência em cada impressão. Seja qual for o tamanho do seu projeto,
              estamos prontos para fazer acontecer!
            </p>
            <a href="https://wa.me/558498649725">
              <button className="bg-blue-400 hover:bg-blue-600 transition-colors w-48 md:w-60 h-12 rounded-3xl my-8 px-6 cursor-pointer">
                <span className="text-amber-100 font-bold text-lg md:text-2xl">Fale conosco</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel de Ofertas */}
      <section className="bg-gradient-to-t from-blue-600 to-blue-500 py-12">
        <h2 className="text-center text-amber-100 text-3xl sm:text-4xl md:text-5xl font-bold">OFERTAS</h2>
        <div className="overflow-hidden w-full mt-6">
          <div
            ref={listRef}
            className={`mx-auto flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
              width: `${fullList.length * cardWidth}px`,
              maxWidth: '100%',
            }}
          >
            {fullList.map((card, index) => (
              <div key={index} className="flex-shrink-0 p-3 sm:p-4" style={{ width: `${cardWidth}px` }}>
                <div className="bg-white rounded-xl shadow-lg p-5 h-84 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 my-6 sm:my-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 text-center">{card.titulo}</h3>
                  <img src={card.imagem} alt={card.titulo} className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2" />
                  <p className="text-gray-700 text-center text-sm sm:text-base">{card.descricao}</p>
                  <a href="https://wa.me/558498649725" className="mt-4">
                    <button className="rosa w-28 sm:w-32 h-10 rounded-3xl hover:scale-105 transition px-4">
                      <span className="text-amber-100 text-base sm:text-lg">Pedir</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="bg-gradient-to-t from-blue-700 to-blue-600 py-16">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 px-4 md:px-8">
          <img src={grafico} alt="Gráfico" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto" />
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center md:text-left text-amber-100 mb-6 md:mb-12">
              Nossos Serviços
            </h2>
            <p className="text-amber-100 text-base sm:text-lg md:text-2xl">
              Se você procura qualidade e confiança para seus materiais gráficos,
              está no lugar certo. Aqui, cuidamos de cada detalhe para que seu projeto
              ganhe vida com o acabamento e a apresentação que ele merece. Produzimos
              desde cartões de visita, panfletos, banners e adesivos, até convites especiais,
              folders e papelaria personalizada.
            </p>
          </div>
        </div>

        {/* Cards: Impressoras, Corte, Laminação */}
        <div className="flex flex-wrap gap-6 justify-center mt-12 md:mt-20 px-4">
          <div className="rounded-3xl overflow-hidden w-64 sm:w-72 md:w-[300px] hover:scale-110 shadow-lg transition-transform duration-300">
            <img src={foto} alt="Impressoras Offset" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden w-64 sm:w-72 md:w-[300px] hover:scale-110 shadow-lg transition-transform duration-300">
            <img src={maquina2} alt="Máquinas de Corte" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden w-64 sm:w-72 md:w-[300px] hover:scale-110 shadow-lg transition-transform duration-300">
            <img src={maquina3} alt="Acabamento e Laminação" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Localização e Serviços Listados */}
      <section className="py-12 px-4 sm:px-8 lg:px-20 bg-gradient-to-t from-blue-800 to-blue-700">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-100 text-center mb-10">
          Onde Estamos Localizados
        </h2>
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="w-full max-w-md h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Localização da Gráfica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1410339959516!2d-37.952952139672874!3d-6.111707061257199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bad5fdd408115b%3A0xa8a17f5ef05a26a6!2sGr%C3%A1fica%20Stilus!5e0!3m2!1spt-BR!2sbr!4v1752165717435!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 border-l-4 pl-3 py-2 rounded-md transition ${item.classes}`}
              >
                <span className="text-xl sm:text-2xl">{item.emoji}</span>
                <div>
                  <h3 className={`font-bold text-base sm:text-lg ${item.classes.split(' ').slice(-1)[0]}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home_tem;

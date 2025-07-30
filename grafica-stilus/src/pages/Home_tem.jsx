import { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import foto1 from 'public/assets/imagens/home/foto1.jpg';
import grafico from 'public/assets/imagens/home/grafico.png';
import foto from 'public/assets/imagens/home/foto.png';
import maquina2 from 'public/assets/imagens/home/maquina2.png';
import maquina3 from 'public/assets/imagens/home/maquina3.png';
import baner from 'public/assets/imagens/home/baner.png';
import visita from 'public/assets/imagens/home/visita.png';
import adesivo from 'public/assets/imagens/home/adesivo.png';
import brindes from 'public/assets/imagens/home/brindes.png';
import folder from 'public/assets/imagens/home/folder.png';

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

  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div className="bg-gradient-to-t from-blue-500 to-blue-800 flex flex-col md:flex-row items-start justify-start p-10">
        <img src={foto1} alt="Foto de destaque" className="ml-10 w-[400px] h-auto rounded-xl" />
        <div className="ml-10">
          <h1 className="font-medium text-amber-100 text-6xl text-left">
            A <strong>Gráfica</strong> que você <br /> <strong>idealiza</strong> para seus <br /> projetos e decoração
          </h1>
          <p className="text-amber-100 mt-10 leading-relaxed text-2xl">
            Somos apaixonados por transformar ideias em materiais que impressionam.
            Com tecnologia de ponta e uma equipe especializada, entregamos qualidade,
            agilidade e excelência em cada impressão. Seja qual for o tamanho do seu projeto,
            estamos prontos para fazer acontecer!
          </p>
          <a href="https://wa.me/558498649725">
            <button className="bg-blue-400 w-70 h-12 rounded-3xl my-10 hover:border-amber-100 px-6">
              <span className="text-amber-100 font-bold text-2xl">Fale conosco</span>
            </button>
          </a>
        </div>
      </div>

      {/* Carrossel de Ofertas */}
      <div className="bg-gradient-to-t from-blue-600 to-blue-500 py-15">
        <h1 className="text-center text-amber-100 text-5xl font-bold">OFERTAS</h1>
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
              <div key={index} className="flex-shrink-0 p-4" style={{ width: `${cardWidth}px` }}>
                <div className="bg-white rounded-xl shadow-lg p-5 h-84 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 my-20">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">{card.titulo}</h2>
                  <img src={card.imagem} alt={card.titulo} className="w-24 h-24 object-contain mb-2" />
                  <p className="text-gray-700 text-center">{card.descricao}</p>
                  <a href="https://wa.me/558498649725">
                    <button className="rosa w-25 h-10 rounded-4xl my-10 hover:scale-x-110 px-4">
                      <span className="text-amber-100 text-xl">Pedir</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção Serviços */}
      <div className="bg-gradient-to-t from-blue-700 to-blue-600 py-24">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
          <img src={grafico} alt="Gráfico" className="w-[500px] md:px-0" />
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold text-center text-amber-100 mb-12">Nossos Serviços</h1>
            <p className="text-amber-100 text-2xl">
              Se você procura qualidade e confiança para seus materiais gráficos,
              está no lugar certo. Aqui, cuidamos de cada detalhe para que seu projeto
              ganhe vida com o acabamento e a apresentação que ele merece. Produzimos
              desde cartões de visita, panfletos, banners e adesivos, até convites especiais,
              folders e papelaria personalizada.
            </p>
          </div>
        </div>

        {/* Cards: Impressoras, Corte, Laminação */}
        <div className="flex flex-wrap gap-6 justify-center mt-20">
          <div className="rounded-3xl overflow-hidden w-[300px] hover:scale-110 shadow-lg transition-transform duration-300">
            <img src={foto} alt="Impressoras Offset" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden w-[300px] hover:scale-110 shadow-lg transition-transform duration-300">
            <img src={maquina2} alt="Máquinas de Corte" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden w-[300px] hover:scale-110 shadow-lg transition-transform duration-300">
            <img src={maquina3} alt="Acabamento e Laminação" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Localização e Serviços Listados */}
      <section className="py-10 px-4 gap-6 sm:px-10 lg:px-20 bg-gradient-to-t from-blue-800 to-blue-700">
        <h2 className="text-6xl font-bold text-amber-100 text-center p-10 mb-10">
          Onde Estamos Localizados
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="w-full max-w-md h-[560px] rounded-2xl overflow-hidden">
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
          <div className="flex flex-col gap-6 bg-white rounded-xl shadow-lg p-6 max-w-sm">
            {[
              {
                emoji: '🖨️',
                title: 'Impressão Digital',
                desc: 'Alta qualidade e rapidez para suas demandas.',
                color: 'blue-600',
                hover: 'cyan-200',
                textColor: 'text-blue-800',
              },
              {
                emoji: '🎉',
                title: 'Convites Personalizados',
                desc: 'Criações únicas para momentos especiais.',
                color: 'pink-500',
                hover: 'pink-200',
                textColor: 'text-pink-700',
              },
              {
                emoji: '📚',
                title: 'Encadernações',
                desc: 'Organize seus documentos com estilo.',
                color: 'green-500',
                hover: 'green-200',
                textColor: 'text-green-700',
              },
              {
                emoji: '📦',
                title: 'Cartazes, Banners e Adesivos',
                desc: 'Materiais impactantes para divulgação.',
                color: 'yellow-500',
                hover: 'yellow-200',
                textColor: 'text-yellow-600',
              },
              {
                emoji: '💡',
                title: 'Arte Final e Design Gráfico',
                desc: 'Criações visuais profissionais para seu projeto.',
                color: 'purple-500',
                hover: 'purple-200',
                textColor: 'text-purple-700',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 border-l-4 border-${item.color} hover:bg-${item.hover} pl-3 py-2`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className={`font-bold text-lg ${item.textColor}`}>{item.title}</h3>
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

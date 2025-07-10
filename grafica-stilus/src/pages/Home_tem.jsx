import { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import foto1 from '../assets/Imagens/home/foto1.jpg';
import grafico from '../assets/Imagens/home/grafico.png';
import you from '../assets/Imagens/home/you.png';
import Footer from './Footer';
import foto from '../assets/Imagens/home/foto.png';
import maquina2 from '../assets/Imagens/home/maquina2.png';
import maquina3 from '../assets/Imagens/home/maquina3.png';

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
      <div className=" bg-gradient-to-t from-blue-500 to-blue-800 relative min-h-screen p-10 flex items-start justify-start">
        

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
      <div className="bg-gradient-to-t from-blue-600 to-blue-500 py-15">
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
                  <div className="bg-white  rounded-xl shadow-lg p-5 h-84 w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 my-20">
                    
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">{card.titulo}</h2>
                    {card.imagem && (
                  <img src={card.imagem} alt={card.titulo} className="w-24 h-24 object-contain mb-2" />
                    )}
                    <p className="text-gray-700 text-center">{card.descricao}</p>
                    <button className="rosa w-25 h-10 rounded-4xl my-10 hover:scale-x-120 ">
                      <a href='https://wa.me/558498649725'><h1 className='text-amber-100 text-1xl font'>Pedir</h1></a>
                    </button>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-t from-blue-700 to-blue-600  '>
        <div className=' flex flex-auto bg-gradient-to-t from-blue-700 to-blue-600 '>
              <div className='  overflow-hidden w-500 md:px-0'><img className='' src={grafico} /></div>
              <div className=''>
              <h1 className=' text-7xl font mb-12 text-center text-amber-100 font-bold'> Nossos Serviços</h1>
              <div>
              <p className='font text-amber-100 text-2xl'>Se você procura qualidade e confiança para seus materiais gráficos,
                 está no lugar certo. Aqui, cuidamos de cada detalhe para que seu projeto ganhe vida 
                 com o acabamento e a apresentação que ele merece. Produzimos desde cartões de visita,
                  panfletos, banners e adesivos, até convites especiais, folders e papelaria 
                  personalizada.</p>
              </div>
              </div>
        </div>
        <section className="bg-gradient-to-t from-blue-800 to-blue-700 py-44">
  <h2 className="text-center text-5xl text-amber-100 font-bold mb-12">Soluções Gráficas para Cada Necessidade</h2>
  <div className="flex flex-col md:flex-row justify-center items-center  gap-20 px-6 md:px-0">

    {/* CARD 1 - Impressoras Offset */}
    <div className=" rounded-3xl overflow-hidden w-[300px]  shadow-lg">
      
        <img src={foto}  className='hover:size-auto'/>
        
      
    </div>

    {/* CARD 2 - Máquinas de Corte */}
    <div className=" rounded-3xl overflow-hidden w-[300px] shadow-lg">
      <img src={maquina2}/>
    </div>

    {/* CARD 3 - Acabamento e Laminação */}
    <div className=" rounded-3xl overflow-hidden w-[300px]  shadow-lg">
      
      <img src={maquina3}/>
    </div>

  </div>
 <section className="py-30 px-4 sm:px-10 lg:px-20 ">
      <h2 className="text-6xl font-bold text-amber-100 text-center  mb-10">
        Onde Estamos Localizados
      </h2>
    <div className='flex gap-40'>
      <div className="w-[400px]  flex bg-gradient-to-t from-blue-950 to-blue-800 h-[550px] rounded-2xl overflow-hidden ">
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
      <div>
          <h1 className='text-5xl font font-bold text-amber-100 m-10'>Venha nos visitar </h1>
        </div>
        </div>
    </section>

</section>

      </div>
      <Footer />
    </div>
  );
}

export default Home_tem;

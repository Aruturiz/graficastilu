import NavBar from './NavBar';
import Footer from './Footer';
import grafico from '../assets/Imagens/home/grafico.png';
import foto1 from '../assets/Imagens/home/foto1.jpg';

function Sobre() {
  return (
    <div>
      <NavBar />

      {/* Cabeçalho bonito */}
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-t from-blue-700 to-blue-800 text-amber-100 p-10 overflow-hidden">
        <h1 className="text-6xl font-bold mb-4">Quem Somos</h1>
        <p className="text-2xl max-w-3xl text-center">
          Paixão por transformar ideias em materiais de alta qualidade. Descubra o que torna a nossa gráfica única!
        </p>
        <img src={grafico} alt="Gráfico Decorativo" className="absolute right-10 bottom-0 w-52 opacity-20 hidden md:block" />
      </div>
    

      {/* Seção 1 - História */}
      <div className="flex flex-col bg-gradient-to-t from-blue-500 to-blue-700 md:flex-row items-center gap-10 p-10 bg-white">
        <img src={foto1} alt="Gráfica" className="w-full md:w-1/2 rounded-2xl shadow-lg" />
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Nossa História</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Desde o nosso início, temos como missão oferecer materiais gráficos que unem qualidade, criatividade e agilidade.
            Ao longo dos anos, nos consolidamos como referência em impressões personalizadas, sempre buscando inovação e tecnologia.
          </p>
        </div>
      </div>

      {/* Seção 2 - Missão, Visão e Valores */}
      <div className="bg-gradient-to-t from-blue-700 to-blue-500 py-16 px-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">Nossos Pilares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Missão</h3>
            <p className="text-gray-700">
              Oferecer soluções gráficas de alta qualidade que superem as expectativas dos nossos clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Visão</h3>
            <p className="text-gray-700">
              Ser reconhecida como a gráfica mais confiável e inovadora da região.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Valores</h3>
            <p className="text-gray-700">
              Comprometimento, ética, excelência no atendimento e foco em resultados.
            </p>
          </div>
        </div>
      </div>

      {/* Seção 3 - Equipe */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 p-10 bg-gradient-to-t from-blue-900 to-blue-700">
        <img src={foto1} alt="Equipe" className="w-full md:w-1/2 rounded-2xl shadow-lg" />
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Nossa Equipe</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Contamos com profissionais apaixonados pelo que fazem, preparados para transformar suas ideias em realidade. Cada detalhe importa para nós!
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Sobre;

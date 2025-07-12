import NavBar from './NavBar';
import Footer from './Footer';
import foto1 from '../assets/Imagens/home/foto1.jpg';

function Sobre() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-900 to-blue-700 relative overflow-hidden">
        <h1 className="text-6xl font-extrabold text-amber-300 drop-shadow-md mb-6">Quem Somos</h1>
        <p className="text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
          Transformamos ideias em materiais gráficos de alto impacto, com paixão, tecnologia e criatividade.
        </p>
      </section>

      {/* História */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <img
          src={foto1}
          alt="Gráfica"
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold text-amber-300 mb-4">Nossa História</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Desde a fundação, nossa missão é entregar materiais gráficos com excelência, criatividade e agilidade. 
            Evoluímos com a tecnologia e nos consolidamos como referência em soluções gráficas personalizadas.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-10 bg-white/10 backdrop-blur-xl border-y border-white/10">
        <h2 className="text-4xl font-bold text-center text-amber-300 mb-14">Nossos Pilares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              titulo: 'Missão',
              texto: 'Oferecer soluções gráficas que encantem e superem expectativas.'
            },
            {
              titulo: 'Visão',
              texto: 'Ser referência em inovação e confiança no setor gráfico regional.'
            },
            {
              titulo: 'Valores',
              texto: 'Excelência, ética, criatividade e foco total no cliente.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform text-center"
            >
              <h3 className="text-2xl font-bold text-amber-300 mb-4">{item.titulo}</h3>
              <p className="text-blue-100">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <img
          src={foto1}
          alt="Equipe"
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold text-amber-300 mb-4">Nossa Equipe</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Nossa equipe é formada por profissionais criativos e comprometidos. Cada projeto é tratado com atenção aos detalhes, 
            buscando sempre transformar ideias em impressões marcantes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sobre;

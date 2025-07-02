import NavBar from './NavBar';
import Footer from './footer';
import grafico from '../assets/Imagens/home/grafico.png';

function Contato() {
  return (
    <div>
      <NavBar />

      {/* Cabeçalho */}
      <div className="relative min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-blue-900 text-amber-100 p-10">
        <h1 className="text-5xl font-bold mb-4">Fale Conosco</h1>
        <p className="text-xl max-w-2xl text-center">
          Tem dúvidas, sugestões ou quer fazer um orçamento? Estamos prontos para atender você!
        </p>
      </div>

      {/* Seção de Contato */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 bg-blue-100">

        {/* Formulário */}
        <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Envie uma mensagem</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mensagem</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              rows="4"
              required
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition-colors">
            Enviar
          </button>
        </form>

        {/* Informações de Contato */}
        <div className="flex flex-col items-center text-center">
          <img src={grafico} alt="Contato" className="w-48 h-48 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Atendimento</h2>
          <p className="text-gray-700 mb-2">Portalegre - RN</p>
          <p className="text-gray-700 mb-2">WhatsApp: (84) 99999-9999</p>
          <p className="text-gray-700 mb-2">E-mail: contato@suaempresa.com</p>
          <p className="text-gray-700">Siga-nos nas redes sociais!</p>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Contato;

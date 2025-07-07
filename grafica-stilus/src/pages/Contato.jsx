import NavBar from './NavBar';
import Footer from './footer';
import grafico from '../assets/Imagens/home/grafico.png';

function Contato() {
  return (
    <div>
      <NavBar />

      {/* Cabeçalho */}
      <div className="relative min-h-[20vh] flex flex-col justify-center items-center bg-gradient-to-br font from-blue-700 to-blue-500 text-amber-100 p-2">
        <h1 className="text-5xl font-bold mb-2">Fale Conosco</h1>
        
      </div>

      {/* Seção de Contato */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 bg-blue-500">

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

        
      </div>

      <Footer />
    </div>
  );
}

export default Contato;

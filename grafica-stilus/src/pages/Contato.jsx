import NavBar from './NavBar';
import Footer from './Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contato() {
  return (
    <div className="bg-gradient-to-t from-blue-500 to-blue-800  min-h-screen text-white">
      <NavBar />

      {/* Título com destaque */}
      <header className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-amber-300 drop-shadow-lg mb-4">
          Vamos conversar?
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-blue-100">
          Preencha o formulário ou use os canais abaixo. A Primordial está pronta para impulsionar sua presença digital com excelência.
        </p>
      </header>

      {/* Conteúdo */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-start">

        {/* Card de Contato */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-amber-300 mb-6">Fale conosco</h2>
          <ul className="space-y-4 text-blue-100">
            <li className="flex items-center gap-3">
              <Phone className="text-amber-400" size={20} />
              (84) 9 9999-9999
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-amber-400" size={20} />
              contato@primordial.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-amber-400" size={20} />
              Rua Projetada, 123 - Portalegre/RN
            </li>
          </ul>
          <div className="mt-8 text-sm text-blue-200">
            Atendimento de segunda a sexta, das 8h às 18h.
          </div>
        </div>

        {/* Formulário */}
        <form className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl space-y-6 text-gray-100">
          <h2 className="text-2xl font-bold text-amber-300">Envie uma mensagem</h2>

          <div>
            <label className="block mb-1 text-sm text-blue-100">Seu nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring focus:ring-amber-400 text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-blue-100">E-mail</label>
            <input
              type="email"
              placeholder="voce@email.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring focus:ring-amber-400 text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-blue-100">Mensagem</label>
            <textarea
              rows="4"
              placeholder="Escreva sua mensagem..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring focus:ring-amber-400 text-white resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} /> Enviar
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Contato;

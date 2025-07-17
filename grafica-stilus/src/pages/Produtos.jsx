import NavBar from './NavBar';
import Footer from './Footer';
import foto1 from '../assets/Imagens/home/foto1.jpg';
import adesivo from '../assets/Imagens/home/adesivo.png';
import brindes from '../assets/Imagens/home/brindes.png';
import folder from '../assets/Imagens/home/folder.png';
import baner from '../assets/Imagens/home/baner.png';
import visita from '../assets/Imagens/home/visita.png';


function Produtos() {
  const produtos = [
    { titulo: 'Banner Personalizado', descricao: 'Produção rápida e de alta qualidade para divulgar sua marca.', imagem: baner },
    { titulo: 'Cartões de Visita', descricao: 'Impressione seus clientes com um cartão de visita profissional.', imagem: visita },
    { titulo: 'Adesivos', descricao: 'Divulgue sua marca com adesivos criativos e duráveis.', imagem: adesivo },
    { titulo: 'Brindes Corporativos', descricao: 'Crie conexão com seus clientes com brindes personalizados.', imagem: brindes },
    { titulo: 'Folders & Panfletos', descricao: 'Material promocional impactante para divulgação de serviços.', imagem: folder },
  ];

  return (
    <div>
      <NavBar />

      {/* Cabeçalho da Página */}
      <div className="relative min-h-[20vh] flex flex-col justify-center items-center bg-gradient-to-t to-blue-800 from-blue-700 text-amber-100 p-5">
        <h1 className="text-5xl font-bold mb-4">Nossos Produtos</h1>
        
      </div>

      {/* Lista de Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-gradient-to-t to-blue-700 from-blue-500">
        {produtos.map((produto, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{produto.titulo}</h2>
            <img src={produto.imagem} alt={produto.titulo} className="w-32 h-32 object-contain mb-4" />
            <p className="text-gray-700 text-center mb-6">{produto.descricao}</p>
            <a href='https://wa.me/558498649725'><button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Pedir Orçamento
            </button></a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Produtos;

function Footer (){
return (
<footer class="bg-gray-900 text-gray-100 py-0 ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

   
    <div className="m-5">
      <h4 class="text-xl font-bold mb-3">Gráfica Criativa</h4>
      <p class="text-sm">
        Impressões de alta qualidade, design profissional e soluções personalizadas para sua marca.
      </p>
    </div>

 
    <div className="m-5">
      <h4 class="text-lg font-semibold mb-3">Serviços</h4>
      <ul class="space-y-1 text-sm">
        <li>Cartões de Visita</li>
        <li>Banners e Faixas</li>
        <li>Convites Personalizados</li>
        <li>Adesivos e Brindes</li>
        <li>Identidade Visual</li>
      </ul>
    </div>

    <div className="m-5">
      <h4 class="text-lg font-semibold mb-3">Contato</h4>
      <ul class="text-sm space-y-1">
        <li>📞 (84) 99999-9999</li>
        <li>📧 contato@graficacriativa.com</li>
        <li>📍 Rua Fracisco Vitor, 165 – Serrinha dos Pintos</li>
      </ul>
    </div>

    <div className="m-5">
      <h4 class="text-lg font-semibold mb-3">Siga-nos</h4>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-blue-400">Facebook</a>
        <a href="https://www.instagram.com/graficastilusrn/" class="hover:text-pink-400">Instagram</a>
        <a href="#" class="hover:text-emerald-400">WhatsApp</a>
      </div>
    </div>
  </div>

  <div class="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
    © 2025 Gráfica Stilus – Todos os direitos reservados.
  </div>
</footer>

)
}
export default Footer
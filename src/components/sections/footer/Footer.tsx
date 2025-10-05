export default function Footer() {
  return (
    <footer
      id="contato"
      className="pt-6 pb-3 sm:pt-8 sm:pb-4 lg:pt-12 lg:pb-6 bg-gradient-to-br from-gray-800 to-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-2xl font-light text-white tracking-tight">
                AURA
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              Cuidados naturais para uma pele radiante e saudável.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
              Produtos
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#produtos"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Hidratantes
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Sérums
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Kits Completos
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Acessórios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
              Suporte
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coral-300 transition-colors font-light"
                >
                  Frete Grátis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
              Contato
            </h3>
            <ul className="space-y-4 text-gray-300 font-light">
              <li>contato@aura.com.br</li>
              <li>(11) 99999-9999</li>
              <li>Seg-Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-16 pt-8 text-center text-gray-300 font-light">
          <p>&copy; 2024 AURA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

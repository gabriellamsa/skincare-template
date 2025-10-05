export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-light text-gray-900 tracking-tight">
              AURA
            </span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#produtos"
              className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium tracking-wide"
            >
              Produtos
            </a>
            <a
              href="#sobre"
              className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium tracking-wide"
            >
              Sobre
            </a>
            <a
              href="#depoimentos"
              className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium tracking-wide"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium tracking-wide"
            >
              Contato
            </a>
          </div>
          <button className="bg-coral-500 text-white px-3 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full hover:bg-coral-600 transition-all text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
            Comprar
          </button>
        </div>
      </div>
    </nav>
  );
}

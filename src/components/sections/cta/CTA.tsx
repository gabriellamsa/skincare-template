export default function CTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-coral-500">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight">
              Pronta para transformar sua pele?
            </h2>
            <p className="text-lg sm:text-xl text-coral-100 font-light max-w-2xl mx-auto px-4">
              Junte-se a milhares de mulheres que já descobriram o segredo de uma pele radiante
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="bg-white text-coral-500 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium tracking-wide hover:shadow-2xl transition-all">
              Comprar Agora
            </button>
            <button className="border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium tracking-wide hover:bg-white/10 transition-all">
              Falar com Especialista
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:gap-12 pt-8 sm:pt-12 border-t border-coral-400">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">50K+</div>
              <div className="text-sm sm:text-base text-coral-100 font-light">Clientes</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">4.9★</div>
              <div className="text-sm sm:text-base text-coral-100 font-light">Avaliação</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-1 sm:mb-2">100%</div>
              <div className="text-sm sm:text-base text-coral-100 font-light">Natural</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
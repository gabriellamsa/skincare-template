export default function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
            Por que escolher AURA?
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light max-w-2xl mx-auto px-4">
            Compromisso com ingredientes naturais e resultados comprovados
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-coral-500 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-light text-gray-900 tracking-tight">100% Natural</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Ingredientes orgânicos e sustentáveis, sem químicos agressivos 
              ou conservantes artificiais.
            </p>
          </div>

          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-coral-500 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Testado Cientificamente</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Todos os produtos são testados por dermatologistas e aprovados 
              para todos os tipos de pele.
            </p>
          </div>

          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-coral-500 rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-light text-gray-900 tracking-tight">Sustentável</h3>
            <p className="text-gray-500 leading-relaxed font-light">
              Embalagens recicláveis e processos de produção que respeitam 
              o meio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

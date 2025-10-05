export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
            O que nossas clientes dizem
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light px-4">
            Depoimentos reais de quem já experimentou nossos produtos
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-15 h-15 bg-coral-200 rounded-full mr-6 flex items-center justify-center">
                <span className="text-coral-600 font-bold text-lg">M</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-lg">
                  Maria Silva
                </h4>
                <div className="flex text-coral-400 mt-1">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-500 italic leading-relaxed font-light">
              &ldquo;Produtos incríveis! Minha pele nunca esteve tão bonita. Os
              ingredientes naturais fazem toda a diferença.&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-15 h-15 bg-coral-200 rounded-full mr-6 flex items-center justify-center">
                <span className="text-coral-600 font-bold text-lg">A</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-lg">Ana Costa</h4>
                <div className="flex text-coral-400 mt-1">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-500 italic leading-relaxed font-light">
              &ldquo;Uso os produtos da AURA há mais de um ano. Minha pele está
              mais saudável e radiante que nunca.&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-15 h-15 bg-coral-200 rounded-full mr-6 flex items-center justify-center">
                <span className="text-coral-600 font-bold text-lg">J</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-lg">
                  Julia Santos
                </h4>
                <div className="flex text-coral-400 mt-1">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-500 italic leading-relaxed font-light">
              &ldquo;Produtos de qualidade excepcional e embalagens
              sustentáveis. Já sou cliente há mais de 2 anos!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

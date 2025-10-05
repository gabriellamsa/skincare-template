import Image from "next/image";

export default function Products() {
  return (
    <section id="produtos" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
            Nossos Produtos
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light max-w-2xl mx-auto px-4">
            Cuidados essenciais para uma pele radiante e saudável
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Product 1 - Hidratante Natural */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="relative mb-6 sm:mb-8">
                <Image
                  src="/skincare-product-stone-with-branches.jpg"
                  alt="Hidratante Natural AURA"
                  width={300}
                  height={300}
                  className="rounded-xl sm:rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-500 w-full h-auto"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 sm:mb-3 tracking-tight">
                    Hidratante Natural
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light mb-3 sm:mb-4">
                    Hidratação profunda com ácido hialurônico natural e óleos
                    essenciais. Perfeito para todos os tipos de pele.
                  </p>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-coral-400 rounded-full mr-2 sm:mr-3"></div>
                      <span>Ácido Hialurônico Natural</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-coral-400 rounded-full mr-2 sm:mr-3"></div>
                      <span>Óleos Essenciais</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-coral-400 rounded-full mr-2 sm:mr-3"></div>
                      <span>Sem Parabenos</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 sm:pt-6 border-t border-gray-100 space-y-3 sm:space-y-0">
                  <div>
                    <span className="text-2xl sm:text-3xl font-light text-coral-500">R$ 89,90</span>
                    <p className="text-xs sm:text-sm text-gray-400">ou 3x de R$ 29,97</p>
                  </div>
                  <button className="bg-coral-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-coral-600 transition-all text-xs sm:text-sm font-medium tracking-wide w-full sm:w-auto">
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 - Serum Antioxidante */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="relative mb-8">
                <Image
                  src="/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background.jpg"
                  alt="Serum Antioxidante AURA"
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
                    Serum Antioxidante
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light mb-4">
                    Proteção contra radicais livres com vitamina C natural e
                    extratos de frutas. Pele mais jovem e radiante.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-coral-400 rounded-full mr-3"></div>
                      <span>Vitamina C Orgânica</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-coral-400 rounded-full mr-3"></div>
                      <span>Extratos de Frutas</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-coral-400 rounded-full mr-3"></div>
                      <span>Anti-Envelhecimento</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-light text-coral-500">R$ 129,90</span>
                    <p className="text-sm text-gray-400">ou 3x de R$ 43,30</p>
                  </div>
                  <button className="bg-coral-500 text-white px-8 py-3 rounded-full hover:bg-coral-600 transition-all text-sm font-medium tracking-wide">
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 - Kit Completo */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="relative mb-8">
                <Image
                  src="/3d-rendering-personal-care-products-fondant-pink.jpg"
                  alt="Kit Completo AURA"
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
                    Kit Completo
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-light mb-4">
                    Rotina completa de cuidados com 5 produtos essenciais.
                    Tudo que você precisa para uma pele perfeita.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-coral-400 rounded-full mr-3"></div>
                      <span>5 Produtos Essenciais</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-coral-400 rounded-full mr-3"></div>
                      <span>Guia de Uso Incluso</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-coral-400 rounded-full mr-3"></div>
                      <span>Economia de 20%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-light text-coral-500">R$ 299,90</span>
                    <p className="text-sm text-gray-400">ou 6x de R$ 49,98</p>
                  </div>
                  <button className="bg-coral-500 text-white px-8 py-3 rounded-full hover:bg-coral-600 transition-all text-sm font-medium tracking-wide">
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Info */}
        <div className="mt-24 bg-gray-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-light text-gray-900 tracking-tight">
                Por que escolher nossos produtos?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-coral-500 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Ingredientes Naturais</h4>
                    <p className="text-gray-500 font-light">
                      Todos os nossos produtos são formulados com ingredientes 100% naturais e orgânicos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-coral-500 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Testado Dermatologicamente</h4>
                    <p className="text-gray-500 font-light">
                      Aprovado por dermatologistas e seguro para todos os tipos de pele.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-coral-500 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Resultados Comprovados</h4>
                    <p className="text-gray-500 font-light">
                      Mais de 50.000 clientes satisfeitas comprovam a eficácia dos nossos produtos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ai-generated-cute-girl-pic.jpg"
                alt="Cliente satisfeita com produtos AURA"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

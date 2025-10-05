import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/woman-applying-skincare-product.jpg"
              alt="Mulher aplicando produto de skincare"
              width={600}
              height={700}
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
                Sobre a AURA
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed font-light">
                Nossa missão é proporcionar cuidados naturais e eficazes para sua pele. 
                Utilizamos apenas ingredientes orgânicos e sustentáveis, testados dermatologicamente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-coral-500 mb-2 sm:mb-3">100%</div>
                <div className="text-sm sm:text-base text-gray-500 font-light">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-coral-500 mb-2 sm:mb-3">50K+</div>
                <div className="text-sm sm:text-base text-gray-500 font-light">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-coral-500 mb-2 sm:mb-3">4.9★</div>
                <div className="text-sm sm:text-base text-gray-500 font-light">Avaliação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-coral-500 mb-2 sm:mb-3">3 Anos</div>
                <div className="text-sm sm:text-base text-gray-500 font-light">Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
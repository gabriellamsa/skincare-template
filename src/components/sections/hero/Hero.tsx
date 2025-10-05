import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight sm:leading-none tracking-tight">
                Cuidados
                <br />
                <span className="text-coral-500 font-normal">Naturais</span>
                <br />
                <span className="text-gray-400">para sua pele</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-lg font-light">
                Ingredientes puros e orgânicos que nutrem e protegem sua pele,
                proporcionando resultados visíveis e duradouros.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#produtos"
                className="bg-coral-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-coral-600 transition-all text-sm font-medium tracking-wide text-center"
              >
                Explorar Produtos
              </a>
              <a
                href="#depoimentos"
                className="border border-gray-300 text-gray-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:border-coral-500 hover:text-coral-500 transition-all text-sm font-medium tracking-wide text-center"
              >
                Ver Depoimentos
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <Image
                src="/woman-using-face-roller-skincare.jpg"
                alt="Mulher usando rolo facial de skincare"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-coral-100 rounded-full opacity-30"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 bg-coral-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

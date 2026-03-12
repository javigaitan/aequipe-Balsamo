import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24" style={{ backgroundColor: "#1f97ab" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading uppercase" style={{ color: "#F7E95E" }}>
              Nosotros
            </h2>
            <div className="space-y-6 text-white text-2xl leading-relaxed font-body">
              <div>
                <p>
                  Con más de 25 años de experiencia, Aequipe se especializa exclusivamente en repuestos adaptables para
                  vehículos Renault.
                </p>
              </div>
              <p>
                Nacimos para ofrecer una alternativa confiable, accesible y verdaderamente especializada, donde cada
                pieza está probada y seleccionada con rigor.
              </p>
              <p>
                En Aequipe no improvisamos: trabajamos con procesos, conocimiento y trayectoria para brindar a las casas
                de repuestos productos seguros y soluciones confiables para sus clientes.
              </p>
              <p className="font-semibold text-white text-xl">
                Cuando busques un repuesto para tu Renault, que sea Aequipe.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/fabrica.jpeg" alt="Fábrica Balsamo Repuestos - Aequipe" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

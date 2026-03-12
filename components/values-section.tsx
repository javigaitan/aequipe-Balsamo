import { Award, Network, Handshake, Headset } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Award,
      title: "TRAYECTORIA",
      subtitle: "Pioneros en Renault",
      description:
        "Somos la primera marca de repuestos del país dedicada específicamente a la línea Renault. No somos improvisados: conocemos cada pieza y solo trabajamos con lo que sabemos que funciona.",
    },
    {
      icon: Network,
      title: "LIDERAZGO",
      subtitle: "La mayor presencia",
      description:
        "Somos la marca alternativa para Renault con mayor presencia en Argentina. No vendemos cualquier genérico. Nuestra cobertura nacional demuestra que ofrecemos opciones probadas para instalar sin dolores de cabeza.",
    },
    {
      icon: Handshake,
      title: "GARANTÍA",
      subtitle: "Comprá tranquilo",
      description:
        "Respaldamos lo que vendemos. Si surge algún inconveniente, estamos aquí para responder y solucionarlo. No desaparecemos.",
    },
    {
      icon: Headset,
      title: "SOPORTE",
      subtitle: "Somos repuesteros",
      description:
        "Detrás de la web hay expertos reales. Si tenés dudas sobre la compatibilidad, te asesoramos para que compres la pieza exacta.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#1f97ab] rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">{value.title}</h3>
                    <p className="text-[#1f97ab] font-semibold mb-3">{value.subtitle}</p>
                    <p className="text-slate-700 text-lg leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

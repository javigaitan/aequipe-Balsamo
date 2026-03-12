
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    desktopImg: "/images/banner-mobile.jpg",
    mobileImg: "/images/banner-mobile.jpg",
    alt: "Aequipe brake discs",
    title: "FRENAR BIEN EMPIEZA\nPOR ELEGIR BIEN",
    text:
      "Discos, campanas y componentes de freno Aequipe.\nCalidad, precisión y respaldo para tu Renault."
  },
  {
    desktopImg: "/images/aequipe_embrague.jpg",
    mobileImg: "/images/aequipe_embrague.jpg",
    alt: "Aequipe clutch",
    title: "LA POTENCIA SE TRANSMITE\nCON CONFIANZA",
    text:
      "Conjuntos de embrague Aequipe para Renault.\nSalida suave, acople preciso y durabilidad para el uso real."
  },
  {
    desktopImg: "/images/aequipe_refrigeracion_01.jpg",
    mobileImg: "/images/aequipe_refrigeracion_01.jpg",
    alt: "Aequipe cooling parts",
    title: "REFRIGERACIÓN SIN VUELTAS",
    text:
      "Piezas clave para regular temperatura, evitar desgaste y proteger el motor."
  }
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative w-full overflow-hidden pt-20 bg-white">

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex w-full min-h-[650px] relative">

        {/* TEXT LEFT */}
        <div className="w-1/2 flex flex-col justify-start pl-24 pr-10 pt-24 relative z-10">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tight text-[#1f97ab] mt-8 mb-16 whitespace-pre-line leading-[0.95]">
                {slide.title}
              </h1>

              <p className="text-xl lg:text-2xl font-sans text-slate-600 max-w-xl whitespace-pre-line">
                {slide.text}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* IMAGE RIGHT */}

        <div className="w-1/2 relative flex justify-end overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={slide.desktopImg}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="flex justify-end w-full"
            >

              <Image
                src={slide.desktopImg}
                alt={slide.alt}
                width={1200}
                height={800}
                className="object-contain h-full w-auto ml-auto"
                priority
              />

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

      {/* ================= MOBILE ================= */}

      <div className="md:hidden flex flex-col items-center">

        <div className="px-6 py-8">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl sm:text-6xl font-heading font-bold uppercase tracking-tight text-[#1f97ab] text-center mb-6 whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="text-lg sm:text-xl font-sans text-slate-600 text-center max-w-sm mx-auto whitespace-pre-line">
                {slide.text}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={slide.mobileImg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >

            <Image
              src={slide.mobileImg}
              alt={slide.alt}
              width={900}
              height={900}
              className="w-full h-auto object-contain"
              priority
            />

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  )
}

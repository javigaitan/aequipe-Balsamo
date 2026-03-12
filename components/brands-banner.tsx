import Image from "next/image";

export function BrandsBanner() {
  return (
    <section className="w-full bg-[#1f97ab] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          <div className="relative w-64 h-24 md:w-80 md:h-28 lg:w-96 lg:h-32">
            <Image
              src="/images/logo-kreisen-white.png"
              alt="Kreisen"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-64 h-24 md:w-80 md:h-28 lg:w-96 lg:h-32">
            <Image
              src="/images/logo-tajiro-white.png"
              alt="Tajiro"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

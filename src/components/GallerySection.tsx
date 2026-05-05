import ScrollReveal from "./ScrollReveal";
import suvs from "@/assets/cars-suvs.jpg";
import pickups from "@/assets/cars-pickups.jpg";
import compact from "@/assets/cars-compact.jpg";
import crossovers from "@/assets/cars-crossovers.jpg";

const images = [
  { src: suvs, alt: "SUVs conquistados pelos clientes AFFINITY" },
  { src: pickups, alt: "Picapes conquistadas pelos clientes AFFINITY" },
  { src: crossovers, alt: "Crossovers conquistados pelos clientes AFFINITY" },
  { src: compact, alt: "Carros compactos conquistados pelos clientes AFFINITY" },
];

const GallerySection = () => (
  <section className="py-20 md:py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-4 mb-12">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep text-center mb-4">
          Veículos que nossos clientes já conquistaram
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-foreground/70 text-center text-lg max-w-2xl mx-auto">
          De compactos a SUVs e picapes — qualquer carro pode ser conquistado com a estratégia certa.
        </p>
      </ScrollReveal>
    </div>

    <div className="relative w-full">
      <div className="flex gap-6 animate-marquee">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[420px] md:w-[560px] h-[260px] md:h-[320px] rounded-lg overflow-hidden border border-primary/10 shadow-xl shadow-primary/5 group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  </section>
);

export default GallerySection;

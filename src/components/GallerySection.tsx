import ScrollReveal from "./ScrollReveal";
import ram from "@/assets/client-ram.jpg";
import s10 from "@/assets/client-s10.jpg";
import trive from "@/assets/client-trive.jpg";
import chery from "@/assets/client-chery.jpg";
import corolla from "@/assets/client-corolla.jpg";

const images = [
  { src: ram, alt: "Cliente AFFINITY conquistou a picape RAM Rampage" },
  { src: chery, alt: "Cliente AFFINITY conquistou um SUV Chery" },
  { src: corolla, alt: "Cliente AFFINITY conquistou o Toyota Corolla Cross" },
  { src: s10, alt: "Cliente AFFINITY conquistou a picape Chevrolet S10" },
  { src: trive, alt: "Entrega técnica de veículo conquistado por cliente AFFINITY" },
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
          De compactos a SUVs e picapes, qualquer carro pode ser conquistado com a estratégia certa.
        </p>
      </ScrollReveal>
    </div>

    <div className="relative w-full">
      <div className="flex gap-6 animate-marquee">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[400px] h-[420px] md:h-[500px] rounded-lg overflow-hidden border border-primary/10 shadow-xl shadow-primary/5 group"
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

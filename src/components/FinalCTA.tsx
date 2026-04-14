import ctaImage from "@/assets/cta-building.jpg";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5534999999999?text=Olá! Gostaria de falar com um consultor sobre a estratégia patrimonial.";

const FinalCTA = () => (
  <section className="relative py-24 md:py-32 bg-primary-deep overflow-hidden">
    <div className="absolute inset-0">
      <img src={ctaImage} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" width={1280} height={640} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/80" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground mb-4">
          Você já deu o primeiro passo com o carro.
          <br />
          O próximo passo é o imóvel.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-navy text-primary-foreground font-display font-bold text-lg tracking-wider px-12 py-5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 mt-8"
        >
          FALAR COM UM CONSULTOR AGORA
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;

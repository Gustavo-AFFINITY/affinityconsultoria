import heroImage from "@/assets/hero-image.jpg";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5534999999999?text=Olá! Gostaria de entender como funciona a estratégia patrimonial.";

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-navy geometric-pattern-light overflow-hidden">
    {/* Background image overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
    </div>

    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <div className="max-w-3xl">
        <ScrollReveal>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy-foreground leading-tight mb-6">
            Você acabou de conquistar o carro.
            <br />
            <span className="text-primary">Quando é a vez do imóvel?</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-silver text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            A mesma organização financeira que te permitiu pagar parcela de carro
            pode te colocar dentro de um imóvel — sem financiamento bancário,
            sem juros, sem entrada absurda.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-deep text-primary-foreground font-display font-bold text-base md:text-lg tracking-wider px-10 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            QUERO ENTENDER COMO FUNCIONA
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-silver/60 text-sm mt-8 font-body">
            Mais de 200 famílias de Uberlândia já aplicaram essa estratégia
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;

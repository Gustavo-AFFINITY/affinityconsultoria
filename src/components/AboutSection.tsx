import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep mb-6">
              Consultoria especializada em patrimônio imobiliário
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              A AFFINITYMASTER é uma consultoria patrimonial com atuação em Uberlândia/MG,
              especializada em estratégias de aquisição imobiliária inteligente.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Nosso método ajuda famílias e investidores a construírem patrimônio real —
              sem depender de financiamento bancário e sem comprometer o padrão de vida.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Atendimento personalizado, diagnóstico gratuito e acompanhamento em cada
              etapa do planejamento.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 gap-6">
            {[
              { number: "500+", label: "Clientes atendidos" },
              { number: "300+", label: "Imóveis adquiridos via estratégia" },
              { number: "8", label: "Anos de atuação em Uberlândia" },
            ].map((stat, i) => (
              <div key={i} className="bg-primary/5 rounded-lg p-6 text-center border border-primary/10">
                <p className="font-display font-bold text-3xl text-primary mb-1">{stat.number}</p>
                <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Carlos Mendes",
    city: "Uberlândia, MG",
    result: "Conquistou um SUV de R$ 120.000 sem pagar juros",
    quote: "Nunca imaginei que existia uma forma de comprar carro sem financiamento. O método da AFFINITYMASTER me economizou mais de R$ 30 mil em juros.",
  },
  {
    name: "Renata Oliveira",
    city: "Uberlândia, MG",
    result: "Comprou o carro zero em 18 meses",
    quote: "Estava quase fechando um financiamento bancário quando descobri essa estratégia. Hoje tenho meu carro zero e paguei muito menos por ele.",
  },
  {
    name: "Fernando e Ana Costa",
    city: "Uberlândia, MG",
    result: "Dois veículos adquiridos com a estratégia",
    quote: "Compramos o primeiro carro e, quando vimos o resultado, já partimos para o segundo. Nunca mais vamos voltar para financiamento bancário.",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-navy geometric-pattern-light">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground text-center mb-16">
          Quem usou a estratégia, nunca mais voltou ao financiamento
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <div className="border border-silver/20 rounded-lg p-8 h-full flex flex-col">
              <p className="text-primary font-display font-bold text-sm mb-4">{t.result}</p>
              <p className="text-navy-foreground/80 italic leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-navy-foreground font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-silver text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

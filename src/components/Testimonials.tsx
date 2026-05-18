import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Heber Borges",
    city: "Campina Verde, MG",
    result: "Conquistou a primeira caminhonete zero quilômetro ",
    quote: "Estou muito satisfeito com a aquisição. Quero agradecer ao pessoal da AFFINITY por ter me acompanhado, me orientado e me dado a condição de chegar onde cheguei. Sem eles, talvez eu não teria feito esse negócio.",
  },
  {
    name: "Ismália Queiroz",
    city: "Uberlândia, MG",
    result: "Comprou o terceiro carro usando a nossa estratégia",
    quote: "Foi uma experiência muito bacana e um processo super rápido. A experiência com a AFFINITY  foi muito legal, a assistência e a consultoria foi muito completa.",
  },
  {
    name: "Keice Nunes",
    city: "Uberlândia, MG",
    result: "Alcançou o carro novo através da nossa consultoria",
    quote: "Hoje é um dia muito especial. Através da consultoria da AFFINITY e da estratégia utilizada, eu alcancei a vitória do meu carro novo.",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-navy refined-dark">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground text-center mb-16">
          Quem usou a estratégia, nunca mais voltou ao financiamento
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.5)" }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="border border-silver/20 rounded-lg p-8 h-full flex flex-col bg-navy/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10"
            >
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
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

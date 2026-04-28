import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
  { number: 500, suffix: "+", label: "Clientes atendidos" },
  { number: 300, suffix: "+", label: "Veículos adquiridos via estratégia" },
  { number: 8, suffix: "", label: "Anos de atuação em Uberlândia" },
];

const AboutSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep mb-6">
              Consultoria especializada em aquisição automotiva inteligente
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              A AFFINITYMASTER é uma consultoria com atuação em Uberlândia/MG,
              especializada em estratégias inteligentes para aquisição de veículos.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Nosso método ajuda pessoas a conquistarem o carro dos sonhos
              sem depender de financiamento bancário e sem comprometer o orçamento familiar.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Atendimento personalizado, diagnóstico gratuito e acompanhamento em cada
              etapa do planejamento.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-primary/5 rounded-lg p-6 text-center border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-colors"
              >
                <p className="font-display font-bold text-3xl text-primary mb-1">
                  <Counter to={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;

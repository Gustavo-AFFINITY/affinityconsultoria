import { Car, CalendarDays, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { icon: Car, label: "O seu carro na garagem com planejamento e sem surpresas" },
  { icon: CalendarDays, label: "Sem juros. Sem entrada. Só planejamento" },
  { icon: BadgeDollarSign, label: "Sem juros. Sem entrada absurda. Sem banco no meio." },
];

const ConnectionSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep text-center mb-6">
          Chega de pagar juros para ter o carro que você merece.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-foreground/80 text-lg leading-relaxed">
            A maioria das pessoas acredita que financiamento bancário é o único caminho
            para comprar um carro. Mas existe uma estratégia inteligente que te permite
            conquistar o veículo dos seus sonhos pagando muito menos.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed mt-4">
            Não é improviso. É planejamento com método.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="border border-primary/20 rounded-lg p-8 text-center hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 h-full group"
            >
              <div className="inline-block group-hover:animate-float">
                <card.icon className="w-10 h-10 text-primary mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <p className="font-display font-semibold text-foreground">{card.label}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ConnectionSection;

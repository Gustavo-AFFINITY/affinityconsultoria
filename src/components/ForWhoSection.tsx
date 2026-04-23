import { Car, Wallet, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const profiles = [
  {
    icon: Car,
    title: "Quem quer o primeiro carro",
    desc: "Você sonha com o carro próprio, tem renda estável, mas acha que não consegue juntar a entrada para o financiamento bancário.",
  },
  {
    icon: Wallet,
    title: "Quem quer trocar de carro",
    desc: "Você já tem um veículo, mas quer fazer um upgrade sem se afundar em juros de financiamento. Quer pagar menos pelo carro novo.",
  },
  {
    icon: TrendingUp,
    title: "Quem quer economizar de verdade",
    desc: "Você sabe que financiamento é caro e quer uma alternativa inteligente. Quer o carro dos sonhos pagando o preço justo — sem juros.",
  },
];

const ForWhoSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep text-center mb-16">
          Essa estratégia foi feita para você se...
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {profiles.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 h-full group bg-background"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
              >
                <p.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;

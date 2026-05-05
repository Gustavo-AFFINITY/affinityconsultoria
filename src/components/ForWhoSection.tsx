import { Car, Wallet, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import compactImg from "@/assets/cars-compact.jpg";
import crossoversImg from "@/assets/cars-crossovers.jpg";
import pickupsImg from "@/assets/cars-pickups.jpg";

const profiles = [
  {
    icon: Car,
    image: compactImg,
    title: "Quer o primeiro carro",
    desc: "Você quer comprar o primeiro carro próprio, tem renda estável e não quer pagar juros.",
  },
  {
    icon: Wallet,
    image: crossoversImg,
    title: "Quer trocar de carro",
    desc: "Você já tem um veículo e quer fazer um upgrade, pagando menos pelo carro novo.",
  },
  {
    icon: TrendingUp,
    image: pickupsImg,
    title: "Quer economizar de verdade",
    desc: "Você sabe que financiamento é caro e quer uma alternativa inteligente. ",
  },
];

const ForWhoSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep text-center mb-16">
          Essa estratégia foi feita para você que...
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {profiles.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 h-full group bg-background"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                >
                  <p.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

const benefits = [
  "Análise do seu perfil financeiro atual",
  "Simulação de estratégia de aquisição personalizada para o veículo desejado",
  "Comparativo real: financiamento bancário vs. nossa estratégia",
  "Sem compromisso. Sem pressão. 100% gratuito.",
];

const DiagnosticCTA = () => (
  <section className="py-20 md:py-28 bg-navy refined-dark">
    <div className="container mx-auto px-4 text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground mb-12">
          Diagnóstico Gratuito — Descubra Quanto Você Pode Economizar
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-xl mx-auto mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 mb-4 text-left">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
              <p className="text-navy-foreground/90">{b}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-block bg-primary text-primary-foreground font-display font-bold text-lg tracking-wider px-12 py-5 rounded-md transition-colors duration-300 hover:bg-primary-deep animate-pulse-glow overflow-hidden group"
        >
          <span className="relative z-10">QUERO MEU DIAGNÓSTICO GRATUITO</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </motion.button>
        <p className="text-silver/50 text-sm mt-4">
          Atendimentos limitados por semana. Garanta o seu.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default DiagnosticCTA;

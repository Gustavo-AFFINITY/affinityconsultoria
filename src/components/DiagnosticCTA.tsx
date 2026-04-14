import { Check } from "lucide-react";
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
  <section className="py-20 md:py-28 bg-navy geometric-pattern-light">
    <div className="container mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground mb-12">
          Diagnóstico Gratuito — Descubra Quanto Você Pode Economizar
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-xl mx-auto mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 mb-4 text-left">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-navy-foreground/90">{b}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <button
          onClick={scrollToForm}
          className="inline-block bg-primary hover:bg-primary-deep text-primary-foreground font-display font-bold text-lg tracking-wider px-12 py-5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
        >
          QUERO MEU DIAGNÓSTICO GRATUITO
        </button>
        <p className="text-silver/50 text-sm mt-4">
          Atendimentos limitados por semana. Garanta o seu.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default DiagnosticCTA;

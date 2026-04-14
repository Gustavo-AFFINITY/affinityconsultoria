import { Search, Target, PlayCircle, Home } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Search, title: "Diagnóstico gratuito", desc: "Analisamos sua situação financeira atual sem compromisso" },
  { icon: Target, title: "Estratégia personalizada", desc: "Montamos um plano de aquisição sob medida para o seu perfil" },
  { icon: PlayCircle, title: "Entrada no plano", desc: "Você começa com parcelas que já cabem no seu orçamento atual" },
  { icon: Home, title: "Aquisição do imóvel", desc: "Você conquista o imóvel com planejamento, sem juros e sem depender de banco" },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-navy geometric-pattern-light">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground text-center mb-4">
          Uma estratégia que os bancos não têm interesse em te mostrar
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-silver text-center text-lg max-w-3xl mx-auto mb-16">
          Não é financiamento. Não é investimento de risco.
          É um método estruturado de aquisição patrimonial — legal, regulamentado
          e aplicado com inteligência pela AFFINITYMASTER há anos em Uberlândia.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <div className="flex gap-6 mb-10 last:mb-0 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center relative">
                <step.icon className="w-6 h-6 text-primary" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-navy-foreground mb-1">{step.title}</h3>
                <p className="text-silver text-base">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

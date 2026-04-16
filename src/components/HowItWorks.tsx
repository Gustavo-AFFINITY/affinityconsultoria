import { Search, Target, PlayCircle, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import carBg from "@/assets/dark-car-bg.jpg";

const steps = [
  { icon: Search, title: "Diagnóstico gratuito", desc: "Analisamos sua situação financeira e o veículo que você deseja, sem compromisso" },
  { icon: Target, title: "Estratégia personalizada", desc: "Montamos um plano de aquisição sob medida para o seu perfil e orçamento" },
  { icon: PlayCircle, title: "Entrada no plano", desc: "Você começa com parcelas que já cabem no seu bolso — sem juros" },
  { icon: Car, title: "Conquista do veículo", desc: "Você conquista o carro dos seus sonhos com planejamento, sem depender de banco" },
];

const HowItWorks = () => (
  <section
    className="py-20 md:py-28 bg-navy car-bg-section"
    style={{ ["--car-bg-image" as string]: `url(${carBg})` }}
  >
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground text-center mb-4">
          Uma estratégia que os bancos não querem que você conheça
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-silver text-center text-lg max-w-3xl mx-auto mb-16">
          Não é financiamento. Não é investimento de risco.
          É um método estruturado de aquisição — legal, regulamentado
          e aplicado com inteligência pela AFFINITYMASTER em Uberlândia.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <div className="flex gap-5 mb-10 last:mb-0 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center relative">
                <step.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center font-display">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 pt-1">
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

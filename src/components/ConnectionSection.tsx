import { Car, CalendarDays, BadgeDollarSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { icon: Car, label: "Da parcela do carro para a escritura do imóvel" },
  { icon: CalendarDays, label: "Planejamento de 24 a 60 meses com parcelas previsíveis" },
  { icon: BadgeDollarSign, label: "Sem juros. Sem surpresa. Sem banco no meio." },
];

const ConnectionSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep text-center mb-6">
          Parabéns pelo carro. Agora, vamos falar de patrimônio.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-foreground/80 text-lg leading-relaxed">
            Quem compra um carro financiado — ou à vista — demonstra algo importante:
            tem renda, tem organização, e sabe assumir compromisso financeiro.
            Esse perfil é exatamente o que permite acessar uma estratégia de aquisição
            imobiliária que a maioria das pessoas nunca conheceu.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed mt-4">
            Não é financiamento. Não é improviso. É planejamento patrimonial com método.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={0.1 * i}>
            <div className="border border-primary/20 rounded-lg p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
              <card.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-display font-semibold text-foreground">{card.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ConnectionSection;

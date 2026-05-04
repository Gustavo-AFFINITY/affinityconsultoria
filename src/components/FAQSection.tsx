import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Preciso ter entrada para começar?",
    a: "Nossa estratégia permite você iniciar com parcelas acessíveis, sem a exigência de uma grande entrada como nos financiamentos tradicionais. No diagnóstico gratuito, analisamos seu perfil para encontrar a melhor forma de começar.",
  },
  {
    q: "Qual o valor mínimo de parcela mensal?",
    a: "O valor da parcela é personalizado de acordo com o seu perfil financeiro e o veículo desejado. Trabalhamos para adequar ao orçamento que você já tem disponível.",
  },
  {
    q: "Em quanto tempo consigo comprar o carro?",
    a: "O prazo varia conforme a estratégia traçada para o seu perfil. Existem caminhos que podem levar à aquisição em poucos meses, enquanto outros planos se estendem um pouco mais. Tudo é definido no seu planejamento personalizado.",
  },
  {
    q: "Isso é seguro? É regulamentado?",
    a: "Sim. Nossa estratégia é 100% legal e regulamentada pelo Banco Central do Brasil. Trabalhamos com instituições sólidas e fiscalizadas, garantindo total segurança em cada etapa.",
  },
  {
    q: "Tenho financiamento ativo. Posso participar mesmo assim?",
    a: "Sim. Ter um financiamento ativo não impede a participação. Inclusive, many dos nossos clientes já quitaram o financiamento com a estratégia.",
  },
  {
    q: "Funciona para qualquer tipo de veículo?",
    a: "Sim. A estratégia pode ser aplicada para carros novos seminovos, populares, SUVs, picapes, veículos de luxo e caminhões. ",
  },
  {
    q: "Como é feito o diagnóstico?",
    a: "O diagnóstico é uma conversa online, onde analisamos sua situação financeira atual, entendemos o perfil do veículo que você deseja comprar e apresentamos as opções da melhor estratégia. ",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-deep text-center mb-12">
          Dúvidas frequentes
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-primary/15 rounded-lg px-6 data-[state=open]:border-primary/30">
                <AccordionTrigger className="font-display font-semibold text-foreground hover:text-primary hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;

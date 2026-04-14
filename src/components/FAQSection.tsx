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
    a: "Não necessariamente. Nossa estratégia permite iniciar com parcelas acessíveis, sem a exigência de uma grande entrada como nos financiamentos tradicionais. No diagnóstico gratuito, analisamos seu perfil para encontrar a melhor forma de começar.",
  },
  {
    q: "Qual o valor mínimo de parcela mensal?",
    a: "O valor da parcela é personalizado de acordo com o seu perfil financeiro e o imóvel desejado. Na maioria dos casos, conseguimos adequar ao orçamento que você já destina a outros compromissos financeiros.",
  },
  {
    q: "Em quanto tempo consigo adquirir o imóvel?",
    a: "O prazo varia conforme a estratégia traçada para o seu perfil. Existem caminhos que podem levar à aquisição em até 24 meses, enquanto outros planos se estendem até 60 meses. Tudo é definido no seu planejamento personalizado.",
  },
  {
    q: "Isso é seguro? É regulamentado?",
    a: "Sim. Nossa estratégia é 100% legal e regulamentada pelo Banco Central do Brasil. Trabalhamos com instituições sólidas e fiscalizadas, garantindo total segurança jurídica em cada etapa.",
  },
  {
    q: "Tenho financiamento ativo. Posso participar mesmo assim?",
    a: "Sim. Ter um financiamento ativo não impede a participação. Inclusive, muitos dos nossos clientes iniciaram a estratégia patrimonial enquanto ainda pagavam parcelas de veículos ou outros compromissos.",
  },
  {
    q: "Funciona para imóvel comercial também?",
    a: "Sim. A estratégia pode ser aplicada tanto para imóveis residenciais quanto comerciais, terrenos e até mesmo para construção. Tudo depende do seu objetivo patrimonial.",
  },
  {
    q: "Como é feito o diagnóstico gratuito?",
    a: "O diagnóstico é uma reunião de aproximadamente 30 minutos, presencial ou online, onde analisamos sua situação financeira atual, entendemos seus objetivos e apresentamos as possibilidades da estratégia para o seu perfil. Sem compromisso e sem custo.",
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

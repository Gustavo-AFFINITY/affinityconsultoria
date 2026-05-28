import { useState } from "react";
import { Input } from "@/components/ui/input";
import ScrollReveal from "./ScrollReveal";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";


const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneDigits = phone.replace(/\D/g, "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || name.trim().length < 2) {
      toast({ title: "Preencha seu nome completo", variant: "destructive" });
      return;
    }
    if (!emailRegex.test(email.trim()) || email.trim().length > 255) {
      toast({ title: "Informe um e-mail válido", variant: "destructive" });
      return;
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      toast({ title: "Informe um telefone válido com DDD", variant: "destructive" });
      return;
    }
    if (!monthlyBudget) {
      toast({ title: "Selecione o valor que pretende investir", variant: "destructive" });
      return;
    }

    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Dados enviados com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setMonthlyBudget("");
    }, 1500);
  };

  return (
    <section id="formulario" className="py-20 md:py-28 bg-navy refined-dark">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground text-center mb-4">
            Dê o primeiro passo para o seu carro novo
          </h2>
          <p className="text-silver text-center text-lg max-w-2xl mx-auto mb-12">
            Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar a melhor estratégia para você.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-navy-foreground/5 backdrop-blur-sm border border-silver/20 rounded-xl p-8 md:p-10 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-navy-foreground font-display font-semibold text-sm mb-2">
                Nome completo
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="bg-navy-foreground/10 border-silver/30 text-navy-foreground placeholder:text-silver/50 focus-visible:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-navy-foreground font-display font-semibold text-sm mb-2">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="bg-navy-foreground/10 border-silver/30 text-navy-foreground placeholder:text-silver/50 focus-visible:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-navy-foreground font-display font-semibold text-sm mb-2">
                Telefone com DDD
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(34) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="bg-navy-foreground/10 border-silver/30 text-navy-foreground placeholder:text-silver/50 focus-visible:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-navy-foreground font-display font-semibold text-sm mb-2">
                Quanto pretende investir por mês?
              </label>
              <select
                id="budget"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                className="flex h-10 w-full rounded-md border border-silver/30 bg-navy-foreground/10 px-3 py-2 text-base text-navy-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:text-sm"
              >
                <option value="" className="bg-navy text-navy-foreground">Selecione...</option>
                <option value="500-1000" className="bg-navy text-navy-foreground">R$ 500 a R$ 1.000/mês</option>
                <option value="1000-2000" className="bg-navy text-navy-foreground">R$ 1.000 a R$ 2.000/mês</option>
                <option value="2000-3000" className="bg-navy text-navy-foreground">R$ 2.000 a R$ 3.000/mês</option>
                <option value="acima-3000" className="bg-navy text-navy-foreground">Acima de R$ 3.000/mês</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-deep text-primary-foreground font-display font-bold text-lg tracking-wider py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-60"
            >
              {loading ? "ENVIANDO..." : "QUERO MEU DIAGNÓSTICO GRATUITO"}
            </button>

            <p className="text-silver/50 text-xs text-center">
              Seus dados estão seguros. Não compartilhamos com terceiros.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LeadForm;

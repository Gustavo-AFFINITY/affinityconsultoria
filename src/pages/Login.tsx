import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) return <Navigate to="/admin" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast({ title: "Conta criada", description: "Você já pode entrar." });
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/admin", { replace: true });
      }
    } catch (err: any) {
      toast({
        title: "Erro",
        description: err.message ?? "Falha na autenticação",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-navy refined-dark flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-navy-foreground/5 backdrop-blur-sm border border-silver/20 rounded-xl p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-navy-foreground">
            Painel AFFINITY
          </h1>
          <p className="text-silver text-sm mt-2">
            {mode === "signin" ? "Acesso restrito" : "Criar conta de administrador"}
          </p>
        </div>

        <div>
          <label className="block text-navy-foreground font-display font-semibold text-sm mb-2">
            E-mail
          </label>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-navy-foreground/10 border-silver/30 text-navy-foreground placeholder:text-silver/50"
          />
        </div>

        <div>
          <label className="block text-navy-foreground font-display font-semibold text-sm mb-2">
            Senha
          </label>
          <Input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-navy-foreground/10 border-silver/30 text-navy-foreground placeholder:text-silver/50"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary hover:bg-primary-deep text-primary-foreground font-display font-bold py-3 rounded-md transition-all disabled:opacity-60"
        >
          {submitting ? "Aguarde..." : mode === "signin" ? "ENTRAR" : "CRIAR CONTA"}
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="w-full text-silver/70 hover:text-silver text-sm"
        >
          {mode === "signin"
            ? "Primeiro acesso? Criar conta de administrador"
            : "Já tem conta? Entrar"}
        </button>
      </form>
    </main>
  );
};

export default Login;

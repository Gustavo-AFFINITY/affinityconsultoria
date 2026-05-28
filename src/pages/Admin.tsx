import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { LogOut, Download, MessageCircle, Mail } from "lucide-react";

type Lead = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  valor_pretendido: string;
  created_at: string;
};

const budgetLabel = (v: string) =>
  ({
    "500-1000": "R$ 500 a 1.000",
    "1000-2000": "R$ 1.000 a 2.000",
    "2000-3000": "R$ 2.000 a 3.000",
    "acima-3000": "Acima de R$ 3.000",
  }[v] ?? v);

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!user) return;

    (async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        toast({ title: "Erro ao carregar leads", description: error.message, variant: "destructive" });
      } else {
        setLeads((data ?? []) as Lead[]);
      }
      setFetching(false);
    })();
  }, [user, loading]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter(
      (l) =>
        l.nome.toLowerCase().includes(q) ||
        l.telefone.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q)
    );
  }, [leads, search]);

  const exportCsv = () => {
    const headers = ["Data", "Nome", "Email", "Telefone", "Valor pretendido"];
    const rows = filtered.map((l) => [
      new Date(l.created_at).toLocaleString("pt-BR"),
      l.nome,
      l.email,
      l.telefone,
      budgetLabel(l.valor_pretendido),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-affinity-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login", { replace: true });
  };

  if (loading) return <div className="min-h-screen bg-navy" />;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin)
    return (
      <main className="min-h-screen bg-navy refined-dark flex items-center justify-center text-navy-foreground p-6 text-center">
        <div>
          <p className="mb-4">Sua conta não tem permissão de administrador.</p>
          <button onClick={handleLogout} className="text-primary underline">
            Sair
          </button>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-navy refined-dark text-navy-foreground">
      <header className="border-b border-silver/10 px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl">Leads AFFINITY</h1>
          <p className="text-silver text-sm">{filtered.length} de {leads.length} registros</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={exportCsv}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-deep text-primary-foreground font-display font-semibold px-4 py-2 rounded-md text-sm"
          >
            <Download className="w-4 h-4" /> CSV
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 border border-silver/30 hover:bg-navy-foreground/10 px-4 py-2 rounded-md text-sm"
          >
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </header>

      <section className="px-6 py-6">
        <Input
          placeholder="Buscar por nome, telefone ou e-mail..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md bg-navy-foreground/10 border-silver/30 text-navy-foreground placeholder:text-silver/50"
        />
      </section>

      <section className="px-6 pb-12 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-silver border-b border-silver/20">
              <th className="py-3 pr-4">Data</th>
              <th className="py-3 pr-4">Nome</th>
              <th className="py-3 pr-4">Telefone</th>
              <th className="py-3 pr-4">E-mail</th>
              <th className="py-3 pr-4">Investimento</th>
              <th className="py-3 pr-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {fetching ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-silver">Carregando...</td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-silver">Nenhum lead ainda.</td>
              </tr>
            ) : (
              filtered.map((l) => {
                const digits = l.telefone.replace(/\D/g, "");
                const wa = `https://wa.me/55${digits}`;
                return (
                  <tr key={l.id} className="border-b border-silver/10 hover:bg-navy-foreground/5">
                    <td className="py-3 pr-4 whitespace-nowrap">
                      {new Date(l.created_at).toLocaleString("pt-BR")}
                    </td>
                    <td className="py-3 pr-4 font-semibold">{l.nome}</td>
                    <td className="py-3 pr-4">{l.telefone}</td>
                    <td className="py-3 pr-4">{l.email}</td>
                    <td className="py-3 pr-4">{budgetLabel(l.valor_pretendido)}</td>
                    <td className="py-3 pr-4">
                      <div className="flex gap-2">
                        <a
                          href={wa}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                        <a
                          href={`mailto:${l.email}`}
                          className="inline-flex items-center gap-1 text-silver hover:underline"
                        >
                          <Mail className="w-4 h-4" /> E-mail
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Admin;

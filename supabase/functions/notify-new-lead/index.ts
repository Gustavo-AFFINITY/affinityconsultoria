import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const NOTIFY_TO = "gustavo@affinitycor.com.br";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { leadId, nome, email, telefone, valor_pretendido } = body ?? {};

    if (!leadId || !nome || !email || !telefone) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

    const budgetMap: Record<string, string> = {
      "500-1000": "R$ 500 a R$ 1.000/mês",
      "1000-2000": "R$ 1.000 a R$ 2.000/mês",
      "2000-3000": "R$ 2.000 a R$ 3.000/mês",
      "acima-3000": "Acima de R$ 3.000/mês",
    };
    const budget = budgetMap[valor_pretendido] ?? valor_pretendido;
    const waDigits = String(telefone).replace(/\D/g, "");

    const { error } = await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "new-lead-notification",
        recipientEmail: NOTIFY_TO,
        idempotencyKey: `new-lead-${leadId}`,
        templateData: {
          nome,
          email,
          telefone,
          valor: budget,
          whatsappUrl: `https://wa.me/55${waDigits}`,
        },
      },
    });

    if (error) {
      console.error("notify-new-lead send error", error);
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 200, // don't block client UX
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

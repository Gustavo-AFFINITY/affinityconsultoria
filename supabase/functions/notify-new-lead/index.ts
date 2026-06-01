import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const NOTIFY_TO = "gustavo@affinitycor.com.br";
const PIPERUN_PIPELINE_NAME = "Leads Automóvel";
const PIPERUN_BASE = "https://api.pipe.run/v1";

async function sendToPipeRun(params: {
  nome: string;
  email: string;
  telefone: string;
  valor: string;
}) {
  const token = Deno.env.get("PIPERUN_API_TOKEN");
  if (!token) {
    console.warn("PIPERUN_API_TOKEN not set; skipping PipeRun sync");
    return { ok: false, skipped: true };
  }
  const headers = { "Content-Type": "application/json", Token: token };

  // 1. Find pipeline by name
  const pipeRes = await fetch(
    `${PIPERUN_BASE}/pipelines?name=${encodeURIComponent(PIPERUN_PIPELINE_NAME)}`,
    { headers }
  );
  const pipeJson = await pipeRes.json();
  const pipeline = pipeJson?.data?.find(
    (p: any) => String(p.name).toLowerCase() === PIPERUN_PIPELINE_NAME.toLowerCase()
  ) ?? pipeJson?.data?.[0];
  if (!pipeline?.id) {
    console.error("PipeRun pipeline not found", pipeJson);
    return { ok: false, error: "pipeline_not_found" };
  }

  // 2. Get first stage of that pipeline
  const stageRes = await fetch(
    `${PIPERUN_BASE}/stages?pipeline_id=${pipeline.id}&order=asc&order_by=order`,
    { headers }
  );
  const stageJson = await stageRes.json();
  const stage = stageJson?.data?.[0];
  if (!stage?.id) {
    console.error("PipeRun stage not found", stageJson);
    return { ok: false, error: "stage_not_found" };
  }

  // 3. Create deal with embedded person
  const dealRes = await fetch(`${PIPERUN_BASE}/deals`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      title: `${params.nome} — ${params.valor}`,
      pipeline_id: pipeline.id,
      stage_id: stage.id,
      person: {
        name: params.nome,
        email: params.email,
        phone: params.telefone,
      },
      notes: `Valor pretendido: ${params.valor}\nE-mail: ${params.email}\nTelefone: ${params.telefone}`,
    }),
  });
  const dealJson = await dealRes.json();
  if (!dealRes.ok) {
    console.error("PipeRun deal creation failed", dealRes.status, dealJson);
    return { ok: false, error: dealJson };
  }
  console.log("PipeRun deal created", dealJson?.data?.id);
  return { ok: true, dealId: dealJson?.data?.id };
}

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

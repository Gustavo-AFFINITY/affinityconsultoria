
## Objetivo

Hoje o formulário de captação simula o envio com `setTimeout` e descarta os dados. Vamos:

1. Salvar cada lead em um banco de dados real (Lovable Cloud).
2. Enviar um e-mail automático para **gustavo@affinitycor.com.br** sempre que alguém preencher.
3. Criar uma página `/admin` protegida por login onde você vê todos os leads e pode exportá-los.

---

## Etapas

### 1. Ativar Lovable Cloud
Ativa o backend integrado (banco de dados, autenticação e funções), sem necessidade de conta externa.

### 2. Criar a tabela `leads`
Campos: `id`, `nome`, `email`, `telefone`, `valor_pretendido`, `created_at`.
Com regras de segurança (RLS) que permitem:
- Qualquer visitante **inserir** um lead pelo formulário.
- Apenas usuários autenticados (você) **ler** os leads.

### 3. Ajustar o `LeadForm.tsx`
Substituir o `setTimeout` por uma gravação real no banco. Manter as validações e o toast de sucesso já existentes.

### 4. Configurar e-mail de notificação
- Configurar um domínio remetente do Lovable Emails (você precisará apontar registros DNS uma única vez — vou te guiar pelo diálogo).
- Criar uma função que dispara um e-mail para `gustavo@affinitycor.com.br` a cada novo lead, contendo nome, e-mail, telefone e valor pretendido, com botões para responder por e-mail ou abrir o WhatsApp.

### 5. Sistema de login
- Criar páginas `/login` e `/admin`.
- Login por e-mail + senha (Lovable Auth).
- Apenas você se cadastra (primeiro acesso cria sua conta).

### 6. Painel `/admin`
Lista de leads com:
- Tabela ordenada por data (mais recentes primeiro).
- Busca por nome/telefone.
- Botão "Exportar CSV".
- Link direto de WhatsApp para cada lead.
- Botão de sair (logout).

### 7. Rota protegida
Se alguém não autenticado tentar abrir `/admin`, é redirecionado para `/login`.

---

## Detalhes técnicos

- **Stack**: Supabase via Lovable Cloud (Postgres + Auth + Edge Functions).
- **Tabela**: `public.leads` com RLS — política `INSERT` para `anon`, política `SELECT` para `authenticated`.
- **E-mail**: Lovable Emails + edge function `send-transactional-email` chamada após o `insert` do lead, com `idempotencyKey` baseado no `lead.id` para evitar duplicatas.
- **Auth**: e-mail/senha, sem confirmação por e-mail (para você cadastrar rápido). Sem cadastro público — a tela `/login` mostra apenas "entrar"; o primeiro acesso pode ser via signup oculto ou via console do Cloud.
- **Frontend**: novas rotas em `src/App.tsx`, páginas `src/pages/Login.tsx` e `src/pages/Admin.tsx`, hook de auth com `onAuthStateChange`.

---

## O que você precisará fazer

1. Aprovar este plano.
2. Quando o diálogo de domínio de e-mail aparecer, escolher um subdomínio (ex.: `notify.affinitycor.com.br`) e configurar os 2 registros DNS no seu provedor — eu mostro os valores exatos.
3. Criar sua conta no `/login` no primeiro acesso.

Tudo o resto é automático.

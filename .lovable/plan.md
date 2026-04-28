## Problema

A mensagem "Instagram bloqueado" aparece porque o preview da Lovable roda dentro de um **iframe**. O Instagram (e várias outras plataformas) bloqueia ser carregado dentro de iframes por segurança (X-Frame-Options). Mesmo com `target="_blank"`, alguns navegadores tentam abrir a aba dentro do contexto do iframe.

Importante: **no site publicado (fora do preview), esses links já funcionariam normalmente**. Mas vamos blindar para funcionar em qualquer contexto.

## Solução

Editar `src/components/Footer.tsx` para:

1. **Forçar abertura em nova aba via `window.open`** com `onClick` que chama `e.preventDefault()` antes — isso escapa o iframe de forma confiável.
2. **Trocar o link do WhatsApp** de `wa.me` para `https://api.whatsapp.com/send?phone=5534991097072`, que é mais robusto e funciona melhor em desktop/mobile.
3. **Garantir URL completa do Instagram**: `https://www.instagram.com/affinitycor/` (com `www` e barra final).
4. Manter `target="_blank"` + `rel="noopener noreferrer"` como fallback.

## Resultado esperado

- Clicar no ícone do Instagram → abre `instagram.com/affinitycor` em nova aba do navegador.
- Clicar no ícone do WhatsApp → abre conversa direta com (34) 99109-7072 em nova aba.
- Sem mais mensagem de bloqueio do Instagram dentro do preview.

Entendi. A mensagem de bloqueio provavelmente continua porque Instagram/WhatsApp ainda estão tentando abrir dentro do ambiente de preview do Lovable ou estão sendo tratados como pop-up. A alternativa mais segura é não depender de `window.open()` no clique e sim trocar o comportamento para navegação direta do navegador.

Plano de correção:

1. Ajustar os botões do rodapé
   - Remover o `onClick` com `window.open()` dos links sociais.
   - Usar links HTML normais, com `target="_top"`, para forçar a abertura fora do iframe/preview atual.
   - Manter `rel="noopener noreferrer"`.

2. Usar URLs mais compatíveis
   - Instagram: `https://www.instagram.com/affinitycor/`
   - WhatsApp: `https://wa.me/5534991097072` ou `https://api.whatsapp.com/send?phone=5534991097072`
   - Se necessário, usar a versão `https://l.instagram.com/?u=...` não será a primeira opção, porque pode parecer menos confiável para o usuário.

3. Adicionar alternativa visível no rodapé
   - Para evitar dependência total de links externos no preview, deixar também o texto do Instagram `@affinitycor` e o telefone `(34) 99109-7072` visíveis e copiáveis.
   - Assim, mesmo se o ambiente de teste bloquear o Instagram, o visitante consegue identificar o contato.

4. Teste após a alteração
   - Verificar se os botões continuam clicáveis.
   - Confirmar que o clique tenta sair do preview atual em vez de carregar Instagram/WhatsApp dentro da moldura do Lovable.

Observação importante:
Esse bloqueio é típico do Instagram, não do site em si. O Instagram impede ser aberto dentro de iframes por segurança. Em produção, fora do preview do Lovable, o link tende a funcionar normalmente. A alteração proposta força a navegação para fora da moldura do preview, que é a forma mais compatível para esse caso.
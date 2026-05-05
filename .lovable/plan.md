## Análise das imagens

Você enviou 4 imagens — todas têm o mesmo estilo: estúdio cinza/minimalista, iluminação top, piso de concreto polido, com carros enfileirados de frente. A consistência visual entre elas é ótima e combina perfeitamente com a paleta navy + silver + dourado da landing page.

| # | Conteúdo | Vibe |
|---|---|---|
| 1 | 3 SUVs (Haval, Chery, Toyota) | Premium / família |
| 2 | 3 Picapes (Chevrolet, Hilux, Ford) | Robusto / trabalho |
| 3 | 5 Hatch/compactos (HB20, Onix, BYD, Strada, T-Cross) | Popular / primeiro carro |
| 4 | 4 SUVs/crossovers (BYD, Hyundai, VW, Jeep) | Variedade / upgrade |

Cada imagem casa naturalmente com um perfil ou momento da jornada na LP.

## Proposta de distribuição

```text
HERO ────────────── Imagem 1 (SUVs premium) — substitui hero-image.jpg
ConnectionSection ─ (sem imagem, mantém cards)
HowItWorks ──────── (mantém o dark-car-bg atual de fundo)
[NOVO] Galeria ──── Faixa marquee horizontal com as 4 imagens
ForWhoSection ───── 3 cards com mini-imagens no topo:
                    • "Primeiro carro" → Imagem 3 (compactos)
                    • "Trocar de carro" → Imagem 4 (crossovers)
                    • "Economizar" → Imagem 2 (picapes)
AboutSection ────── (sem mudança)
DiagnosticCTA ───── (sem mudança)
FAQ + Form ──────── (sem mudança)
```

### 1. Hero — Imagem 1 como background
- Substituir `src/assets/hero-image.jpg` pela Imagem 1 (SUVs premium escuros).
- Manter o gradiente `from-navy via-navy/95 to-navy/60 opacity-50` que já existe — a imagem tem fundo claro e os carros escuros vão criar bom contraste com o texto à esquerda.
- Efeito Ken Burns / parallax já existente é mantido.

### 2. Nova seção "Galeria" (entre HowItWorks e ForWhoSection)
- Faixa de imagens em estilo **marquee horizontal infinito** (animação `marquee` já existe no `tailwind.config.ts`).
- Altura fixa ~280px, imagens em cards com `rounded-lg`, leve sombra, hover com scale.
- Título curto acima: "Veículos que nossos clientes já conquistaram".
- Fundo `bg-background` com transição suave do navy.
- Mostra todas as 4 imagens (loop), reforça prova social.

### 3. ForWhoSection — adicionar imagem no topo de cada card
- Acima de cada ícone, uma faixa de imagem `h-40 object-cover rounded-t-lg` (com o card perdendo o `rounded-lg` puro e ganhando overflow-hidden).
- Mapeamento conforme tabela acima.
- Mantém ícone + título + descrição inalterados abaixo da imagem.
- Hover atual (lift + 3D tilt) preservado.

## Detalhes técnicos

**Arquivos a alterar:**
- `src/assets/hero-image.jpg` — substituído pela Imagem 1 (copiar de `user-uploads://Gemini_Generated_Image_pxis97pxis97pxis.png`).
- `src/assets/cars-suvs.jpg`, `cars-pickups.jpg`, `cars-compact.jpg`, `cars-crossovers.jpg` — copiar as 4 imagens para a pasta de assets.
- `src/components/ForWhoSection.tsx` — adicionar `image` no array `profiles`, renderizar `<img>` no topo do card, ajustar padding/overflow.
- `src/components/GallerySection.tsx` (novo) — marquee com as 4 imagens, usando `animate-marquee` já existente.
- `src/pages/Index.tsx` — importar e inserir `<GallerySection />` entre `<HowItWorks />` e `<ForWhoSection />`.

**Estilo visual:** mantém o existing pattern — `ScrollReveal` para entrada, `motion.div` com hover, bordas `border-primary/20`, `rounded-lg`, fundo alternando navy/background entre seções para ritmo.

Confirma essa distribuição que eu já implemento?
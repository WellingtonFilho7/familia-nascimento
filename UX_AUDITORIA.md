# Auditoria criteriosa — Landing Page e Página de Obrigado

## Escopo analisado
- `familia-nascimento/index.html` (landing page principal)
- `familia-nascimento/obrigado.html` (pós-conversão)

## Diagnóstico executivo
A base visual e narrativa é forte (tom pastoral, identidade calorosa, boa consistência tipográfica), mas há gargalos relevantes em **performance**, **acessibilidade**, **fricção de conversão** e **clareza operacional do fluxo de doação**.

Se resolvidos, estes pontos tendem a melhorar: taxa de carregamento útil, taxa de clique no CTA principal, conclusão de contribuição e confiança do usuário.

---

## 1) Problemas críticos (prioridade alta)

### 1.1 Hero com imagem em `data:image/jpeg;base64` gigante (performance severa)
**Onde**: `index.html` no `style` inline de `.hero-bg`.

**Problema**:
- O HTML carrega uma imagem muito extensa embutida no documento.
- Isso aumenta o peso inicial da página, atrasa First Contentful Paint (FCP), e dificulta cache granular de ativos.

**Impacto**:
- Mais abandono em rede móvel.
- Pior score de Core Web Vitals.

**Como resolver**:
- Extrair imagem para arquivo estático (`/assets/hero.webp` + fallback jpg).
- Usar `<picture>` ou CSS com imagem externa.
- Comprimir em WebP/AVIF e preparar versões responsivas.

---

### 1.2 Ausência de hierarquia semântica explícita para navegação assistiva
**Onde**: principalmente `index.html`.

**Problema**:
- Estrutura é visualmente boa, mas faltam landmarks claros e robustos (`<main>`, `nav` para blocos-chave, etc.) para leitores de tela.
- Não há link de pulo de conteúdo (“skip to content”).

**Impacto**:
- Navegação cansativa para usuários com tecnologias assistivas.
- Risco de não conformidade WCAG em pontos básicos.

**Como resolver**:
- Envolver conteúdo principal em `<main id="conteudo">`.
- Inserir link de acessibilidade no topo: “Pular para conteúdo”.
- Revisar títulos por seção para manter sequência lógica de headings.

---

### 1.3 CTA flutuante pode competir com ações principais e cobrir conteúdo
**Onde**: `.float-cta` em `index.html`.

**Problema**:
- Botão fixo no canto inferior pode conflitar com área de toque, teclado mobile e elementos de fim de página.
- Sem regra de "safe area" para dispositivos com barra inferior/notch.

**Impacto**:
- Possível irritação de uso e cliques acidentais.
- Queda de qualidade percebida no mobile.

**Como resolver**:
- Ajustar com `bottom: max(20px, env(safe-area-inset-bottom));`
- Ocultar/reposicionar próximo do rodapé.
- Testar gatilho de aparição por profundidade real de scroll + intenção.

---

### 1.4 Fluxo de contribuição pouco orientado para decisão rápida
**Onde**: bloco de tiers/PIX na landing.

**Problema**:
- Existe informação, mas falta uma micro-orientação objetiva de escolha (“comece com R$ X”).
- Falta reforço de segurança/transparência imediatamente antes da ação crítica.

**Impacto**:
- Mais indecisão, menor taxa de clique em contribuição.

**Como resolver**:
- Destacar 1 opção “recomendada” (ex.: R$ 50/mês).
- Exibir microcopy de confiança junto ao CTA: “Você pode ajustar, pausar ou cancelar a qualquer momento.”
- Inserir bloco curto “Como usamos sua contribuição este mês”.

---

## 2) Problemas importantes (prioridade média)

### 2.1 Densidade textual alta em alguns trechos
**Onde**: landing, várias seções longas.

**Problema**:
- Texto emocionalmente forte, porém longo para leitura em mobile.

**Como resolver**:
- Quebrar blocos longos em parágrafos curtos.
- Inserir bullets de escaneabilidade nos trechos operacionais (metas, próximos passos, prestação de contas).

---

### 2.2 Estados de foco e acessibilidade de teclado podem ser reforçados
**Onde**: links e botões em ambas páginas.

**Problema**:
- Há `:hover`, mas falta destaque explícito robusto para `:focus-visible`.

**Como resolver**:
- Aplicar anel de foco de alto contraste consistente:
  - `outline: 2px solid #E8A580; outline-offset: 2px;`
- Garantir foco visível em todos os elementos interativos.

---

### 2.3 Página de obrigado depende de embed sem fallback claro
**Onde**: `obrigado.html` (Typeform).

**Problema**:
- Se script falhar/bloquear, usuário pode ficar sem caminho alternativo de cadastro.

**Como resolver**:
- Incluir fallback com link direto para o formulário externo.
- Exibir mensagem de contingência: “Se o formulário não carregar, clique aqui”.

---

### 2.4 Falta de confirmação objetiva do que acontece após enviar dados
**Onde**: `obrigado.html`.

**Problema**:
- Página agradece bem, mas poderia deixar explícito o “próximo passo” após o preenchimento.

**Como resolver**:
- Acrescentar uma seção curta: “Após o envio, você receberá...”.
- Definir expectativa de frequência (ex.: 1 atualização por mês).

---

## 3) Melhorias táticas de UX/UI (baixo esforço, alto impacto)

1. **Barra de progresso narrativa** na landing (ex.: “1. Chamado → 2. Plano → 3. Como contribuir”).
2. **Âncora fixa de navegação leve** no topo para pular seções longas.
3. **Prova social ética**: depoimento curto de parceiro (se houver autorização).
4. **Prestação de contas resumida** trimestral com 3 números-chave.
5. **Teste A/B** de headline do hero e texto do CTA principal.

---

## 4) Backlog priorizado (ordem sugerida)

### Sprint 1 (rápido)
- Externalizar/comprimir hero image.
- Adicionar `:focus-visible` global.
- Criar fallback do Typeform.
- Ajustar CTA flutuante para safe area.

### Sprint 2
- Revisar semântica (`main`, skip link, headings).
- Simplificar blocos longos com escaneabilidade.
- Inserir microcopy de confiança no bloco de contribuição.

### Sprint 3
- Rodar experimento A/B de CTA e hero.
- Implantar mini bloco recorrente de transparência mensal.

---

## 5) Métricas para validar melhora
- CTR do CTA principal.
- Taxa de conclusão da contribuição.
- Taxa de conclusão da página de obrigado (envio Typeform).
- Tempo até interação no mobile.
- Profundidade média de scroll por seção.

---

## Conclusão
A experiência já transmite verdade, calor humano e propósito. O próximo salto está em reduzir fricção técnica/comportamental e transformar uma narrativa forte em uma jornada mais direta, acessível e previsível para o usuário.

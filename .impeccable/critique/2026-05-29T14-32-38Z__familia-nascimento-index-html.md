---
target: familia-nascimento/index.html
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-05-29T14-32-38Z
slug: familia-nascimento-index-html
---
### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Float-CTA scroll behavior is smart; no in-page feedback for external MP links |
| 2 | Match System / Real World | 4 | Portuguese pastoral vocabulary throughout; zero jargon |
| 3 | User Control and Freedom | 3 | Single-scroll page — no traps; MP opens new tab |
| 4 | Consistency and Standards | 4 | Terracotta CTAs, rule, label/sec-ctx pattern applied uniformly |
| 5 | Error Prevention | 3 | No user-input forms; tier links and PIX key are static and correct |
| 6 | Recognition Rather Than Recall | 4 | All decisions are visible; tier amounts labeled; no navigation to memorize |
| 7 | Flexibility and Efficiency of Use | 3 | Two giving paths (MP + PIX); WhatsApp fallback; float CTA always available |
| 8 | Aesthetic and Minimalist Design | 3 | Generally clean; donation section slightly dense; "Como você acompanha" after CTA dilutes persuasive momentum |
| 9 | Error Recovery | 3 | No forms; PIX note provides recovery context |
| 10 | Help and Documentation | 3 | PIX note and partner-note are well-written guidance; no FAQ |
| **Total** | | **33/40** | **Good — address weak areas before the next growth push** |

### Anti-Patterns Verdict

**LLM assessment**: Does not read as AI-generated. Voice is specific and earned. Alegreya + olive-deep/terracotta carries the land identity without generic "warm nonprofit" template feel. detect.mjs returned 0 findings.

**Deterministic scan**: 0 findings — clean.

### Overall Impression

Well-built page with distinctive narrative-first architecture. Single biggest opportunity: move "Como você acompanha" before the donation block so visitors have the relationship context before deciding.

### What's Working

1. **Narrative-first architecture.** Seven sections of context before the ask. "Uma visita abençoa. Presença forma." is genuine conviction, not pitch.
2. **Authentic numbers.** "120 viagens", "35 pessoas", "8 anos de cuidado de mulheres saindo de exploração" — create trust precisely because they don't feel curated.
3. **Donation section implementation.** Olive-deep contrast marks the action zone. Float-CTA scroll logic is smart and well-coded.

### Priority Issues

**[P1] "Como você acompanha" appears after the donation block**
- What: Persuasive sequencing error — partner communication info sits after the CTA
- Why it matters: Visitors evaluating a monthly commitment need "what's the relationship like?" answered before clicking tiers, not after
- Fix: Move "Como você acompanha" and the accountability quote to before #contribuir
- Suggested command: $impeccable layout

**[P2] Donation section is the densest decision environment on the page**
- What: 7-item helps list + 5 tiers + partner-note + PIX block = 13+ information items at once
- Why it matters: Working memory ceiling (~4 items) exceeded; visitors skim or abandon
- Fix: Collapse ul.helps to 4 items maximum; merge redundant bullet points
- Suggested command: $impeccable distill

**[P2] closing-h declares font-weight: 300 (Alegreya doesn't have this weight)**
- What: Line 181 — font-weight: 300 not in Alegreya face; browser synthesizes faux-light
- Why it matters: Footer closing heading renders subtly degraded at the emotional peak
- Fix: Change to font-weight: 400
- Suggested command: $impeccable typeset

**[P3] Float CTA animation not suppressed by prefers-reduced-motion**
- What: .float-cta transition not in the reduce-motion media query
- Fix: Add .float-cta { transition: none; } to the reduced-motion block
- Suggested command: $impeccable audit

**[P3] 10px labels below recommended minimum for mobile legibility**
- What: .pix-lbl, .goal-lbl, .pilot-lbl, .helps-lbl, .front-lbl, .tier-unit all 10px
- Fix: Raise to 11-12px minimum
- Suggested command: $impeccable audit

### Persona Red Flags

**Jordan (Confused First-Timer)**: Arrives, reads hero, finds #contribuir, asks "what do I get?" — answer is past the tiers. Conversion moment has a sequencing gap.

**Casey (Distracted Mobile User)**: Tap areas adequate. Float CTA thumb-accessible. Long narrative scroll is unavoidable but WhatsApp fallback covers bail-out path.

**"Parceiro em potencial" (project-specific)**: Accountability signal ("Caminhamos com prestação de contas...") is visually de-emphasized — single italic sentence. "Brasil de Joelhos" mentioned without link or explanation for unfamiliar visitors.

### Minor Observations

- gurinhem.webp as background-image in img-break has no alt/visually-hidden text for screen readers
- PIX label uses em dash (&mdash;) — brand voice says no em dashes; use colon instead
- "Brasil de Joelhos" referenced without a link for visitors who don't know the ministry

# Patas Felizes

Site institucional do Patas Felizes, pet shop com banho, tosa, tosa higiênica, tratamentos na pelagem, vacinação, farmácia veterinária, adestramento e venda de produtos. Landing page de página única com apresentação dos serviços, estrutura do espaço, depoimentos e agendamento direto pelo Instagram.

Site no ar: **https://patas-felizes-drab.vercel.app**

## Destaques

- Revelação de conteúdo ao rolar a página com uma única instância de `IntersectionObserver` compartilhada (`plugins/revelar.js`), exposta como diretiva `v-revelar`, usada em todas as seções da home.
- Fallback de acessibilidade sem JavaScript: `<noscript>` no `app.vue` neutraliza a animação de revelação caso o `IntersectionObserver` não rode.
- Imagem principal do hero com `<picture>`/`srcset` em WebP com variante para mobile, além de `<link rel="preload">` com `fetchpriority="high"` para acelerar o carregamento da imagem de maior destaque (LCP).
- `scrollBehavior` customizado no router (`app/router.options.js`) para navegação suave por âncora entre seções, com folga de espaço para a navegação fixa não cobrir o topo da seção de destino.
- Navegação fixa que reage ao scroll e menu mobile com `aria-label` dinâmico (abrir/fechar).
- Design tokens centralizados em SASS (`assets/css/variaveis.sass`): paleta de cores e escala tipográfica fluida com `clamp()` como variáveis CSS.
- Seções separadas por divisores em onda (SVG), com o mesmo vocabulário decorativo (patas, ossos, corações) reaproveitado entre blocos.

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, Vue Router) com SSR habilitado
- SASS indentado (`sass-embedded`) como pré-processador de estilos
- [Pinia](https://pinia.vuejs.org/) para estado global
- [@nuxt/image](https://image.nuxt.com/) (módulo configurado no projeto)
- [@edusites/icons](https://www.npmjs.com/package/@edusites/icons) como biblioteca de ícones/SVGs
- Axios (utilitário de requisição incluso no boilerplate)
- pnpm como gerenciador de pacotes

## Estrutura

```
app/                router.options.js — scroll suave por âncora
assets/css/         tokens (variáveis), fontes, normalize, animações, scrollbar
components/global/    header, footer, elementos de UI (botão, campo, onda) e ícones
components/pages/     seções da home (hero, serviços, estrutura, espaço, depoimentos, agendamento, contatos)
pages/                 rotas: home e página de política
layouts/               layout base (nav + main + footer)
plugins/               revelação no scroll, ícones, emitter de eventos, cliente HTTP
middleware/            tratamento de rota não encontrada (404)
helpers/               funções utilitárias de formatação
utils/                 links externos do negócio (Instagram, mapa, assinatura do desenvolvedor)
stores/                store Pinia
public/                favicons, fontes, imagens (com variantes WebP) e manifest
```

## Rodando localmente

Projeto usa pnpm (há `pnpm-lock.yaml` no repositório).

```bash
pnpm install

# ambiente de desenvolvimento
pnpm dev

# build de produção
pnpm build

# preview do build de produção
pnpm preview
```

---

Desenvolvido por [Gustavo Bernardi](https://github.com/guubernardi).

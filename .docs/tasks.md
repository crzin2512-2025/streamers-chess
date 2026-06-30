# Tasks — Streamers Chess

> Lista de tarefas derivada do [prd.md](./prd.md).  
> Marque como concluída substituindo `[ ]` por `[x]`.

**Legenda:** cada item é uma unidade de trabalho clara. Siga a ordem das fases sempre que possível.

---

## Fase 0 — Limpeza do template Vite

Preparar o projeto antes de construir a feature.

- [x] Remover conteúdo boilerplate de `src/App.tsx` (counter, logos, seções do template)
- [x] Remover ou esvaziar `src/App.css` (estilos passarão para tokens e componentes)
- [x] Remover assets não utilizados do template (`react.svg`, `vite.svg`, `hero.png`) se não forem reutilizados
- [x] Garantir que `main.tsx` continua montando o app corretamente

---

## Fase 1 — Fundação (estrutura + domínio + dados)

### 1.1 Estrutura de pastas

Criar a árvore definida no PRD (seção 8):

- [x] `src/app/App.tsx`
- [x] `src/pages/StreamerListPage/`
- [x] `src/components/layout/Header/`
- [x] `src/components/layout/Container/`
- [x] `src/components/streamers/StreamerCard/`
- [x] `src/components/streamers/StreamerGrid/`
- [x] `src/components/streamers/LiveBadge/`
- [x] `src/components/feedback/LoadingSpinner/`
- [x] `src/components/feedback/ErrorMessage/`
- [x] `src/components/feedback/EmptyState/`
- [x] `src/components/ui/Pagination/`
- [x] `src/hooks/`
- [x] `src/services/`
- [x] `src/types/`
- [x] `src/utils/`
- [x] `src/config/`
- [x] `src/styles/`

### 1.2 Tipos e constantes (camada Domain)

- [x] Criar `src/types/streamer.ts` com `Streamer`, `StreamerPlatform` e `StreamersResponse`
- [x] Criar `src/config/constants.ts` com `STREAMERS_API_URL` e `ITEMS_PER_PAGE` (valor padrão: 12)
- [x] Criar `src/utils/pagination.ts` com `getTotalPages()` e `getPageSlice()` (funções puras, sem React)

### 1.3 Design tokens e estilos globais

- [x] Criar `src/styles/tokens.css` com variáveis: cores, radius, espaçamento, `--font-family`
- [x] Criar `src/styles/global.css` com reset básico, `body`, `#root` e fundo cinza escuro
- [x] Importar Inter via Google Fonts (`index.html` ou `@import` no CSS)
- [x] Atualizar `src/index.css` para importar `tokens.css` e `global.css` (remover estilos do template antigo)

### 1.4 Serviço da API (camada Infrastructure)

- [x] Criar `src/services/streamersService.ts` com função `fetchStreamers()`
- [x] Validar `response.ok` e lançar erro com mensagem clara em caso de falha HTTP
- [x] Retornar JSON tipado como `StreamersResponse`
- [x] Garantir que nenhum componente de UI chama `fetch` diretamente — apenas o service

### 1.5 Hook de dados (camada Application)

- [x] Criar `src/hooks/useStreamers.ts`
- [x] Estados: `streamers`, `isLoading`, `error`
- [x] `useEffect` no mount chama `fetchStreamers()`
- [x] Expor `refetch()` para tentar novamente após erro
- [x] Tratar resposta sem campo `streamers` como array vazio
- [x] (Opcional) Usar `AbortController` no cleanup do effect para cancelar fetch pendente

---

## Fase 2 — UI core (componentes de apresentação)

### 2.1 Layout

- [x] **Header** — título "Streamers-chess", fonte grande, centralizado, estilo minimalista
- [x] **Container** — largura máxima ~1200px, centralizado, padding horizontal responsivo
- [x] Cada layout com arquivo `.css` co-localizado na pasta do componente

### 2.2 Estados de feedback

- [x] **LoadingSpinner** — exibido enquanto `isLoading === true`
- [x] **ErrorMessage** — recebe `message` e `onRetry`; botão "Tentar novamente" chama `refetch`
- [x] **EmptyState** — mensagem amigável quando a lista de streamers está vazia

### 2.3 StreamerCard

- [x] Receber prop `streamer: Streamer` (componente puro, sem fetch)
- [x] Layout em linha: avatar à esquerda (~56px), informações em coluna à direita
- [x] Exibir `username` como título do card
- [x] Link para perfil no chess.com (`streamer.url`) — texto legível (ex.: "Perfil no Chess.com")
- [x] Link para stream (`streamer.twitch_url`) — label genérico "Assistir live"
- [x] Links externos com `target="_blank"` e `rel="noopener noreferrer"`
- [x] `alt` descritivo no avatar (ex.: avatar de {username})
- [x] Classe/modificador `offline` quando `is_live === false`: grayscale, menor contraste, sem badge live
- [x] Fallback quando avatar falha ao carregar (`onError` → placeholder ou iniciais)

### 2.4 LiveBadge

- [x] Exibir apenas quando `streamer.is_live === true`
- [x] Ponto vermelho + texto "AO VIVO"
- [x] Animação `pulse` em CSS (somente no estado live)

### 2.5 StreamerGrid

- [x] Receber prop `streamers: Streamer[]`
- [x] Mapear lista renderizando `StreamerCard` com `key={streamer.username}`
- [x] CSS Grid: 4 colunas (desktop), 3 (tablet), 1 (mobile)
- [x] Gap consistente entre cards (`~1.25rem`)

### 2.6 Estilo dos cards

- [x] Fundo do card mais claro que o background da página (`--color-surface`)
- [x] Cantos arredondados (`--radius-card`)
- [x] Card offline usa `--color-surface-offline` e aparência desaturada

---

## Fase 3 — Paginação e página principal

### 3.1 Hook de paginação

- [x] Criar `src/hooks/usePagination.ts`
- [x] Receber `items` e `itemsPerPage`
- [x] Expor: `page`, `totalPages`, `paginatedItems`, `setPage`, `nextPage`, `prevPage`
- [x] Resetar `page` para 1 quando a lista `items` mudar (ex.: após novo fetch)

### 3.2 Componente Pagination

- [x] Botões "Anterior" e "Próximo"
- [x] Indicador de texto: "Página X de Y"
- [x] Desabilitar "Anterior" na primeira página e "Próximo" na última
- [x] Ocultar paginação quando `totalItems <= itemsPerPage`

### 3.3 StreamerListPage (orquestração)

- [x] Criar `src/pages/StreamerListPage/StreamerListPage.tsx`
- [x] Usar `useStreamers()` e `usePagination(streamers, ITEMS_PER_PAGE)`
- [x] Ordem de renderização condicional:
  1. Loading
  2. Erro (+ retry)
  3. Lista vazia
  4. Grid + Pagination
- [x] Compor: `Header` → `Container` → conteúdo condicional

### 3.4 App raiz

- [x] Simplificar `src/app/App.tsx` para renderizar apenas `StreamerListPage`
- [x] Atualizar import em `main.tsx` se o caminho de `App` mudar

---

## Fase 4 — Edge cases e infraestrutura

- [x] Testar chamada à API no browser; se CORS bloquear, configurar proxy em `vite.config.ts`
- [x] Documentar no README como rodar o projeto e eventual configuração de proxy
- [x] Verificar que streamers offline mantêm links clicáveis
- [x] Verificar foco visível em botões e links (acessibilidade básica)

---

## Fase 5 — Validação final

### Build e lint

- [x] `npm run build` passa sem erros TypeScript
- [x] `npm run lint` passa sem erros
- [x] Nenhum uso de `any` nos arquivos novos

### Testes manuais

- [x] Ao abrir o app, streamers da API aparecem no grid
- [x] Estado de loading visível durante o fetch
- [ ] Simular erro (DevTools → Offline) e confirmar `ErrorMessage` + retry funcional
- [ ] Lista vazia exibe `EmptyState` (se possível simular)
- [x] Streamers com `is_live: true` mostram `LiveBadge`
- [x] Streamers offline aparecem acinzentados, sem badge
- [x] Cada card mostra avatar, username, link chess.com e link de stream
- [x] Com mais de 12 streamers, paginação navega corretamente entre páginas
- [x] Layout responsivo: 4 colunas (≥1024px), 3 colunas (768–1023px), 1 coluna (<768px)
- [x] Fundo cinza escuro e fonte Inter aplicados em toda a aplicação
- [x] Header "Streamers-chess" centralizado e minimalista

### Critérios de aceite (checklist do PRD)

- [x] RF-01 — Carregar streamers com loading e retry em erro
- [x] RF-02 — Card exibe username, avatar, links e indicador de live
- [x] RF-03 — Card offline com aparência acinzentada
- [x] RF-04 — Paginação client-side com 12 itens por página
- [x] RF-05 — Grid responsivo com container centralizado
- [x] RNF-02 — Lógica de fetch apenas em hooks/service, não em componentes de UI
- [x] RNF-03 — Tipos TypeScript alinhados ao contrato da API
- [x] RNF-04 — Acessibilidade básica (alt, contraste, foco)
- [x] RNF-05 — Código ESLint-clean

---

## Backlog (fora do escopo v1)

Tarefas futuras — não bloqueiam a entrega inicial.

- [ ] Filtro "somente ao vivo"
- [ ] Busca por username
- [ ] Auto-refresh a cada N minutos
- [ ] Ícone da plataforma via `platforms[].type`
- [ ] Testes unitários (`pagination`, `streamersService`)
- [ ] Testes E2E
- [ ] PWA / favicon customizado
- [ ] Internacionalização (i18n)

---

## Referências

- [prd.md](./prd.md) — requisitos completos e arquitetura
- [brain_dump.md](./brain_dump.md) — ideia original do projeto

# Streamers Chess

Aplicação web que lista streamers de xadrez do [chess.com](https://www.chess.com), com indicador de status ao vivo, links para perfil e stream, e paginação client-side.

## Stack

- React 19 + Vite 8 + TypeScript
- CSS puro com design tokens (sem biblioteca de UI)

## Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

Abra [http://localhost:5173](http://localhost:5173) após `npm run dev`.

## API

Os dados vêm de `GET https://api.chess.com/pub/streamers` (API pública, sem autenticação).

## Proxy (CORS)

Se o browser bloquear a requisição por CORS em desenvolvimento, o projeto já inclui um proxy no Vite. Para usá-lo, altere `STREAMERS_API_URL` em `src/config/constants.ts`:

```typescript
export const STREAMERS_API_URL = '/api/streamers'
```

O proxy está configurado em `vite.config.ts` e redireciona `/api/streamers` para `https://api.chess.com/pub/streamers`.

> Em produção, se CORS continuar bloqueando, será necessário um proxy no servidor de hospedagem ou um backend intermediário.

## Estrutura

```
src/
├── app/           # Composição raiz
├── pages/         # Páginas (orquestração)
├── components/    # UI (layout, streamers, feedback, ui)
├── hooks/         # useStreamers, usePagination
├── services/      # fetch da API
├── types/         # Tipos TypeScript
├── utils/         # Funções puras (paginação)
├── config/        # Constantes
└── styles/        # Design tokens e estilos globais
```

## Documentação

- [.docs/prd.md](.docs/prd.md) — requisitos e arquitetura
- [.docs/tasks.md](.docs/tasks.md) — lista de tarefas de implementação

# mypage-counter

Worker do Cloudflare para contar visitantes únicos do site.

## Deploy (via Dashboard — 2 minutos)

1. Acessa [dash.cloudflare.com](https://dash.cloudflare.com/) → **Workers & Pages**
2. Clica **Create Worker**, escolhe o plano **Free**
3. Apaga o código padrão, cola o conteúdo de `src/index.js`
4. Vai na aba **KV** → **Create a Namespace** com o nome `COUNTER`
5. Volta no worker, aba **Settings** → **Variables** → **KV Namespace Bindings**
6. Clica **Add binding**: `COUNTER` = namespace que criaste
7. Clica **Deploy**
8. Copia a URL do worker (ex: `https://mypage-counter.seu-subdomain.workers.dev`)

## Configurar no site

Em `docs/script.js`, muda a constante:

```js
const COUNTER_API = 'https://mypage-counter.seu-subdomain.workers.dev';
```

Commita, pusha, pronto.

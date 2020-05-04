## Mustache template render

[mustache.js](https://github.com/janl/mustache.js)

![test](https://github.com/alosaur/mustache/workflows/test/badge.svg)

### How to use renderer in Alosaur

```ts
import { renderFile } from 'https://deno.land/x/mustache/mod.ts';

app.useViewRender({
    type: 'mustache',
    basePath: `${Deno.cwd()}/views/`, // path to folder views
    getBody: (path: string, model: Object, config: ViewRenderConfig) =>
        renderFile(normalize(`${config.basePath}${path}.html`), model),
});
```

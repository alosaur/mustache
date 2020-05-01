import { assertEquals } from 'https://deno.land/std@v0.42.0/testing/asserts.ts';
import { renderFile } from '../mod.ts';
const { test } = Deno;

test({
    name: 'Basic render test',
    async fn() {
        const text = await renderFile(`${Deno.cwd()}/tests/index.html`, { title: 'Alosaur', calc: 5 });
        assertEquals('Alosaur spends 5', text);
    },
});

import mustache from './mustache.mjs';

export async function renderFile(path: string, model: Object | undefined) {
    return mustache.render(new TextDecoder().decode(await Deno.readFile(path)), model);
}

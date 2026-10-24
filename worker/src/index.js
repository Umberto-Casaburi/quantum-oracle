// Shared memory for entangled phrase groups (see ENTANGLED in ../app.js).
//
// POST /draw { pair: "martina+salvatore", group: "martina", slot: 3 }
// If a phrase is waiting for `group`, it is returned (and consumed). Otherwise `slot`,
// the phrase the browser drew, is kept and queued for the partner. Answer: { slot }.
//
// One Durable Object per pair, so reads and writes are strongly consistent.

import { DurableObject } from "cloudflare:workers";

const PAIRS = { "martina+salvatore": ["martina", "salvatore"] };
const MAX_SLOT = 50;
const MAX_QUEUE = 10;
// Waiting phrases expire, so tests before the party leave nothing behind.
const TTL_MS = 3 * 60 * 60 * 1000;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

export class Pair extends DurableObject {
  async draw(group, partner, slot) {
    const now = Date.now();
    const fresh = async (key) => ((await this.ctx.storage.get(key)) || []).filter((e) => now - e.at < TTL_MS);
    const mine = await fresh(group);
    if (mine.length) {
      const next = mine.shift();
      await this.ctx.storage.put(group, mine);
      return next.slot;
    }
    const theirs = await fresh(partner);
    theirs.push({ slot, at: now });
    await this.ctx.storage.put(partner, theirs.slice(-MAX_QUEUE));
    return slot;
  }
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/draw") return json({ error: "not found" }, 404);

    let body;
    try { body = await request.json(); } catch { return json({ error: "bad json" }, 400); }
    const { pair, group, slot } = body || {};
    const members = PAIRS[pair];
    if (!members || !members.includes(group) || !Number.isInteger(slot) || slot < 0 || slot > MAX_SLOT) {
      return json({ error: "bad request" }, 400);
    }
    const partner = members.find((m) => m !== group);
    const stub = env.PAIRS.get(env.PAIRS.idFromName(pair));
    return json({ slot: await stub.draw(group, partner, slot) });
  }
};

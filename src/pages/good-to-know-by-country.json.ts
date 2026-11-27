/**
 * The "good to know" tips at the address the live guide pages read (/good-to-know-by-country.json).
 * One source: src/data/good-to-know.json. Carried-over guides (W6) fetch it like today;
 * structured guides build it into the page.
 */
import type { APIRoute } from "astro";
import data from "../data/good-to-know.json";

export const GET: APIRoute = () => new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json; charset=utf-8" } });

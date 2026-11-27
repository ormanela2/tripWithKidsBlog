// @ts-check
import { defineConfig } from "astro/config";

// Static site for GitHub Pages. `build.format: "file"` keeps today's URLs (/austria.html, /about.html, …)
// so nothing changes for Google, shared links or partners.
export default defineConfig({
  site: "https://mataytasim.co.il",
  build: { format: "file" },
  trailingSlash: "ignore",
});

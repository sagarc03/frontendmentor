import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sagarc03.github.io",
  base: "/frontendmentor",
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap()]
});
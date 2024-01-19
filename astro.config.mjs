import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "es", "pt-br"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
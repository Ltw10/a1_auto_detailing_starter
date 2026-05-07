import { defineConfig } from "vite";

const repoName = "a1_auto_detailing_starter";

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        pricing: "pricing.html",
        community: "community.html",
        contact: "contact.html",
      },
    },
  },
});

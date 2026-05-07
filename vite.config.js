import { defineConfig } from "vite";

const repoName = "a1_auto_detailing_starter";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGithubActions ? `/${repoName}/` : "/",
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

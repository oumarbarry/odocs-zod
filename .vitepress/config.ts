import { defineConfig } from "vitepress"

export default defineConfig({
  titleTemplate: false,
  title: "Zod | Documentation",
  description: "TypeScript-first schema validation with static type inference.",

  cleanUrls: true,
  rewrites: { "README.md": "index.md" },

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],

  themeConfig: {
    // editLink: { pattern: 'https://github.com/colinhacks/zod/edit/master/:path' },

    siteTitle: "Zod",
    logo: { src: "/logo.svg" },

    search: { provider: "local" },

    outline: { level: "deep" },

    socialLinks: [
      { icon: "github", link: "https://github.com/colinhacks/zod" },
      { icon: "x", link: "https://twitter.com/colinhacks" },
      { icon: "discord", link: "https://discord.gg/RcG33DQJdf" },
    ],
  },
})
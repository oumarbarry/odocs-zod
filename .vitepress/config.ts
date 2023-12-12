import { defineConfig } from "vitepress"

export default defineConfig({
  titleTemplate: false,
  title: "Zod | Documentation",
  description: "TypeScript-first schema validation with static type inference.",

  cleanUrls: true,
  // ignoreDeadLinks: true,
  rewrites: { "README.md": "index.md" },

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],

  themeConfig: {
    // editLink: { pattern: 'https://github.com/colinhacks/zod/edit/master/:path' },
    editLink: { pattern: "https://github.com/oumarbarry/odocs-zod/edit/main/:path" },

    search: { provider: "local" },

    outline: { level: "deep" },

    socialLinks: [
      { icon: "github", link: "https://github.com/colinhacks/zod" },
      { icon: "x", link: "https://twitter.com/colinhacks" },
      { icon: "discord", link: "https://discord.gg/RcG33DQJdf" },
    ],
  },
})

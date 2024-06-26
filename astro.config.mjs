import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astroverse.inote.xyz/",
  trailingSlash: "always",
  output: "static",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  experimental: {
    contentCollectionCache: true
  },
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "*.unsplash.com"
    }]
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime]
  },
  integrations: [mdx(), sitemap(), pagefind(), partytown({
    config: {
      forward: ["dataLayer.push"],
      debug: false
    }
  }), icon({
    include: {
      tabler: ["*"],
      "flat-color-icons": ["template", "gallery", "approval", "document", "advertising", "currency-exchange", "voice-presentation", "business-contact", "database"]
    }
  }), tailwind(), react()]
});
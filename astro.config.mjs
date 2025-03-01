// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import APP_CONFIG from "./src/config/config";
import i18n from "@astrolicious/i18n";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = APP_CONFIG.SITE.URL;
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
const BASE_URL = isBuild ? LIVE_URL : LOCALHOST_URL;

export default defineConfig({
  trailingSlash: "ignore",
  site: BASE_URL,
  server: {
    port: SERVER_PORT,
  },
  integrations: [
    icon(),
    react(),
    partytown(),
    tailwind({
      applyBaseStyles: false,
    }),
    i18n({
      defaultLocale: APP_CONFIG.I18N.DEFAULT_LOCALE,
      locales: APP_CONFIG.I18N.LOCALES_ARRAY,
      strategy: "prefixExceptDefault",
      client: {
        data: true,
        paths: true,
      },
      pages: {
        "/o-nas": {
          cs: "/o-nas",
          en: "/about-us",
          de: "/uber-uns",
        },
        "/kontakt": {
          cs: "/kontakt",
          en: "/contact",
          de: "/kontakt",
        },
        "/sluzby": {
          cs: "/sluzby",
          en: "/services",
          de: "/dienstleistungen",
        },
        "/dekujeme": {
          cs: "/dekujeme",
          en: "/thank-you",
          de: "/danke",
        },
        "/galerie": {
          cs: "/galerie",
          en: "/gallery",
          de: "/galerie",
        },
        "/reference": {
          cs: "/reference",
          en: "/references",
          de: "/referenzen",
        },
        "/blog/[slug]": {
          cs: "/blog/[slug]",
          en: "/blog/[slug]",
          de: "/blog/[slug]",
        },
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: [
            "/admin",
            "/thank-you",
            "/dekujeme",
            "/dekuji",
            "/danke",
            "/~partytown/",
          ],
        },
      ],
    }),
    sitemap({
      i18n: {
        defaultLocale: APP_CONFIG.I18N.DEFAULT_LOCALE,
        locales: APP_CONFIG.I18N.LOCALES,
      },
      filter: (page) =>
        !page.includes("admin") &&
        !page.includes("thank-you") &&
        !page.includes("dekujeme") &&
        !page.includes("dekuji") &&
        !page.includes("danke") &&
        !page.includes("menu"),
    }),
  ],
});

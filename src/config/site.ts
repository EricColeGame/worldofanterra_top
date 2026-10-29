export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "World of Anterra Wiki",
  shortName: "World of Anterra",
  logoText: "W",
  tagline: "Open-World Fantasy RPG Guides, Races & Bosses",
  description: "Fan-made World of Anterra wiki covering races, bosses, builds, crafting, exploration, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://worldofanterra.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://worldofanterra.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2402470/World_of_Anterra/",
  heroVideoId: "gYCpgXP3XAs", // World of Anterra Trailer 2 — official 81monkeys video
  social: {
    discord: "https://discord.com/servers/867775819967102986",
    youtube: "https://www.youtube.com/@81monkeysStudio",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

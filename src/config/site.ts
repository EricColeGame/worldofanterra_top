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
    steamCommunity?: string;
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
  tagline: "Open-World Fantasy RPG Guides, Quests & Combat",
  description: "Explore World of Anterra with guides to quests, combat, character builds, crafting, exploration, secrets, and progression in its open-world fantasy RPG.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://worldofanterra.top",
  supportEmail: "support@worldofanterra.top",
  gameUrl: "https://store.steampowered.com/app/2402470/World_of_Anterra/",
  heroVideoId: "gYCpgXP3XAs", // World of Anterra Trailer 2 — official 81monkeys video
  social: {
    discord: "https://discord.com/servers/867775819967102986",
    youtube: "https://www.youtube.com/@81monkeysStudio",
    steamCommunity: "https://steamcommunity.com/app/2402470",
  },
  locales: ["en", "es", "de", "fr"],
  defaultLocale: "en",
};

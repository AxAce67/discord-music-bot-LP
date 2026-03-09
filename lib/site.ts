const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

const normalizedSiteUrl = rawSiteUrl
  ? rawSiteUrl.startsWith("http")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`
  : "https://kanade.akiz.dev";

export const siteConfig = {
  name: "Kanade",
  title: "Kanade | Discordで音楽を流せるMusic Bot",
  description:
    "Discord のボイスチャットで音楽を再生できる Music Bot。曲名検索、URL再生、プレイリスト、キュー操作に対応。",
  url: normalizedSiteUrl,
  ogImage: "/ogp-kanade.png",
  githubUrl: "https://github.com/AxAce67/discord-music-bot",
  keywords: [
    "Discord Music Bot",
    "Discord 音楽 Bot",
    "Discord music bot",
    "Kanade",
    "Discord bot",
    "音楽 bot",
    "日本語対応",
    "playlist",
    "queue UI"
  ]
} as const;

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
  title: "Kanade — Discord Music Bot",
  description:
    "Discord の中だけで完結する、埋め込み UI 付き音楽 Bot。スラッシュ・プレフィックス対応、キュー永続化、多言語 UI、プレイリスト読込に対応。",
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

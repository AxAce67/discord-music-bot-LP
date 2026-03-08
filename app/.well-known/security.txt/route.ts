import { siteConfig } from "../../../lib/site";

export function GET() {
  const body = [
    "Contact: https://github.com/AxAce67/discord-music-bot/issues",
    `Canonical: ${siteConfig.url}/.well-known/security.txt`,
    "Preferred-Languages: ja, en",
    `Policy: ${siteConfig.url}/privacy`,
    "Acknowledgments: https://github.com/AxAce67/discord-music-bot",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

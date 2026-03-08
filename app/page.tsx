"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { flushSync } from "react-dom";
import { siteConfig } from "../lib/site";

type Locale = "ja" | "en";
type Theme = "light" | "dark";

const copy = {
  ja: {
    navFeatures: "機能",
    navHow: "使い方",
    navCommands: "コマンド",
    navAdd: "サーバーに追加",
    heroTitleA: "ボイスチャットで",
    heroTitleB: "好きな音楽を流そう",
    heroReleaseKicker: "2026年3月公開",
    heroReleaseText: "Discord Music Bot Kanade",
    heroSub: "プレイリスト、キュー UI、多言語表示に対応。Kanade を追加して、曲名を入力するだけで再生が始まります。",
    heroPrimary: "サーバーに追加する",
    heroSecondary: "使い方を見る",
    featureHeading: "みんなで聴ける、かんたん操作",
    featureLead: "ボイスチャンネルのみんなと一緒に、好きな曲を楽しめます。",
    featureA1Title: "ボイチャでそのまま再生",
    featureA1Body: "ボイスチャンネルに参加して曲名を入力するだけ。URL を貼ればそのまま直接再生もできます。",
    featureA2Title: "曲名で検索、タップで再生",
    featureA2Body: "曲名やアーティスト名で検索。候補から選ぶだけで再生がスタートします。",
    featureA3Title: "ボタンで直感操作",
    featureA3Body: "再生・停止・スキップ・リピートをボタンひとつで。/ コマンドと ! コマンドの両方に対応。",
    featureB1Title: "キューで順番を管理",
    featureB1Body: "聴きたい曲をどんどん追加。次に流す曲の確認や並び替えもチャット内で完結。",
    featureB2Title: "プレイリストを一発読み込み",
    featureB2Body: "YouTube プレイリストの URL を貼るだけで全曲を一括でキューに追加できます。",
    featureB3Title: "日本語 & 英語対応",
    featureB3Body: "Bot の表示言語をサーバーごとに切り替え。日本語でも英語でもストレスなく使えます。",
    howHeading: "3ステップではじめる",
    howLead: "むずかしい設定は一切不要。/play でも !play でもすぐに使い始められます。",
    step1Title: "Bot をサーバーに招待",
    step1Body: "「サーバーに追加する」ボタンを押して、あなたの Discord サーバーに Kanade を招待。",
    step2Title: "ボイスチャンネルに参加",
    step2Body: "音楽を聴きたいボイスチャンネルに入って、Bot を呼び出します。",
    step3Title: "/play または !play で再生",
    step3Body: "テキストチャンネルで /play 曲名 や !play URL を入力するだけ。再生スタート！",
    commandsHeading: "主なコマンド",
    commandsLead: "スラッシュコマンドと ! コマンドの両方に対応。/play と !play のどちらでも曲名検索や URL 直接再生ができます。",
    commands: [
      { name: "/play {query}", desc: "曲名検索または URL で再生・追加" },
      { name: "/skip", desc: "今の曲をスキップ" },
      { name: "/queue", desc: "キューを表示" },
      { name: "/pause", desc: "一時停止・再開" },
      { name: "/stop", desc: "再生を停止" },
      { name: "/playlist {url}", desc: "プレイリストを読み込む" },
      { name: "/join", desc: "ボイスチャンネルに参加" },
      { name: "/leave", desc: "ボイスチャンネルから退出" },
      { name: "/lang {ja|en}", desc: "言語を切り替え（日/英）" }
    ],
    ctaHeading: "あなたのサーバーに、\n音楽を。",
    ctaBody: "Kanade を追加すれば、曲名検索も URL 直接再生も、/ と ! の両方のコマンドで Discord の中で完結します。",
    ctaPrimary: "サーバーに追加する",
    ctaSecondary: "コマンドを見る",
    footerLabel: "Discord Music Bot",
    themeLight: "Light",
    themeDark: "Dark"
  },
  en: {
    navFeatures: "Features",
    navHow: "How it works",
    navCommands: "Commands",
    navAdd: "Add to Server",
    heroTitleA: "Play music",
    heroTitleB: "inside voice chat",
    heroReleaseKicker: "Launched in March 2026",
    heroReleaseText: "Discord Music Bot Kanade",
    heroSub: "Includes playlists, queue UI, and multilingual display. Add Kanade, type a song name, and playback starts right inside your voice channel.",
    heroPrimary: "Add to Server",
    heroSecondary: "View Guide",
    featureHeading: "Simple control, shared listening",
    featureLead: "Enjoy music together with everyone in the voice channel.",
    featureA1Title: "Play directly in voice chat",
    featureA1Body: "Join a voice channel, type a song name, and playback starts right away. Pasting a URL plays it directly too.",
    featureA2Title: "Search by title and tap to play",
    featureA2Body: "Search by song or artist, then pick from the results to start playback.",
    featureA3Title: "Direct controls with buttons",
    featureA3Body: "Pause, stop, skip, and repeat from buttons, with both slash commands and ! commands supported.",
    featureB1Title: "Manage the queue in chat",
    featureB1Body: "Add tracks freely, then inspect and reorder what plays next from Discord.",
    featureB2Title: "Load playlists in one step",
    featureB2Body: "Paste a YouTube playlist URL and add the whole list to the queue at once.",
    featureB3Title: "Japanese and English support",
    featureB3Body: "Switch the bot display language per server and keep the UI comfortable for everyone.",
    howHeading: "Start in three steps",
    howLead: "No complex setup. You can start with either /play or !play right away.",
    step1Title: "Invite the bot",
    step1Body: "Press the add button and invite Kanade to your Discord server.",
    step2Title: "Join a voice channel",
    step2Body: "Enter the voice channel where you want to listen and call the bot.",
    step3Title: "Play with /play or !play",
    step3Body: "Type /play with a song title or !play with a direct URL and playback begins.",
    commandsHeading: "Main commands",
    commandsLead: "Supports both slash commands and ! commands. You can search by title or play directly from a URL with /play or !play.",
    commands: [
      { name: "/play {query}", desc: "Search by title or play directly from a URL" },
      { name: "/skip", desc: "Skip the current track" },
      { name: "/queue", desc: "Open the queue UI" },
      { name: "/pause", desc: "Pause or resume playback" },
      { name: "/stop", desc: "Stop playback" },
      { name: "/playlist {url}", desc: "Load a playlist" },
      { name: "/join", desc: "Join a voice channel" },
      { name: "/leave", desc: "Leave the voice channel" },
      { name: "/lang {ja|en}", desc: "Switch language" }
    ],
    ctaHeading: "Bring music\nto your server.",
    ctaBody: "Kanade keeps title search, direct URL playback, and both slash and ! commands entirely inside Discord.",
    ctaPrimary: "Add to Server",
    ctaSecondary: "View Commands",
    footerLabel: "Discord Music Bot",
    themeLight: "Light",
    themeDark: "Dark"
  }
} as const;

const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=36700160&scope=bot%20applications.commands";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ja");
  const [theme, setTheme] = useState<Theme>("light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("kanade-landing-locale");
    const savedTheme = window.localStorage.getItem("kanade-landing-theme");
    if (savedLocale === "ja" || savedLocale === "en") {
      setLocale(savedLocale);
    } else {
      const browserLocale = window.navigator.language.toLowerCase();
      setLocale(browserLocale.startsWith("ja") ? "ja" : "en");
    }

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.dataset.theme = systemTheme;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kanade-landing-locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("kanade-landing-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [locale]);

  const t = copy[locale];
  const nextTheme = theme === "light" ? "dark" : "light";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Discord",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    sameAs: [siteConfig.githubUrl],
  };

  const handleThemeToggle = (nextValue: Theme, event: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    root.dataset.transition = "theme";
    const rect = event.currentTarget.getBoundingClientRect();
    root.style.setProperty("--theme-origin-x", `${rect.left + rect.width / 2}px`);
    root.style.setProperty("--theme-origin-y", `${rect.top + rect.height / 2}px`);

    if (!("startViewTransition" in document)) {
      setTheme(nextValue);
      delete root.dataset.transition;
      return;
    }

    const transition = (document as Document & {
      startViewTransition: (callback: () => void) => { ready: Promise<void> };
    }).startViewTransition(() => {
      flushSync(() => {
        setTheme(nextValue);
      });
    });

    transition.ready.finally(() => {
      window.setTimeout(() => {
        delete root.dataset.transition;
      }, 0);
    });
  };

  const handleLocaleToggle = (nextValue: Locale) => {
    const root = document.documentElement;
    root.dataset.transition = "locale";

    if (!("startViewTransition" in document)) {
      setLocale(nextValue);
      delete root.dataset.transition;
      return;
    }

    const transition = (document as Document & {
      startViewTransition: (callback: () => void) => { ready: Promise<void> };
    }).startViewTransition(() => {
      flushSync(() => {
        setLocale(nextValue);
      });
    });

    transition.ready.finally(() => {
      window.setTimeout(() => {
        delete root.dataset.transition;
      }, 0);
    });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={isScrolled ? "nav-wrap is-scrolled" : "nav-wrap"}>
        <nav className="nav container">
          <div className="nav-left">
            <div className="logo">
              <img src="/logo-kanade.png" alt="" className="logo-mark" />
              <span>Kanade</span>
            </div>
            <div className="nav-links">
              <a href="#features">{t.navFeatures}</a>
              <a href="#how">{t.navHow}</a>
              <a href="#commands">{t.navCommands}</a>
            </div>
          </div>
          <div className="nav-right">
            <div className="toolbar" aria-label="landing controls">
              <div className="segmented" aria-label="locale switch">
                <button
                  type="button"
                  className={locale === "ja" ? "segmented-btn is-active" : "segmented-btn"}
                  onClick={() => handleLocaleToggle("ja")}
                >
                  JA
                </button>
                <button
                  type="button"
                  className={locale === "en" ? "segmented-btn is-active" : "segmented-btn"}
                  onClick={() => handleLocaleToggle("en")}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                className="theme-toggle"
                aria-label={nextTheme === "dark" ? t.themeDark : t.themeLight}
                onClick={(event) => handleThemeToggle(nextTheme, event)}
              >
                {theme === "light" ? (
                  <MoonStar aria-hidden="true" className="theme-toggle-icon" strokeWidth={1.8} />
                ) : (
                  <SunMedium aria-hidden="true" className="theme-toggle-icon" strokeWidth={1.8} />
                )}
              </button>
            </div>
            <a className="nav-btn nav-btn-primary" href={inviteUrl} target="_blank" rel="noreferrer">
              {t.navAdd}
            </a>
          </div>
        </nav>
      </div>

      <main className="container">
        <section className="hero">
          <h1 className="hero-title" data-reveal>
            {t.heroTitleA}
            <br />
            {t.heroTitleB}
          </h1>

          <div className="hero-update-line reveal-delay-1" aria-label="release note" data-reveal>
            <span className="hero-update-kicker">{t.heroReleaseKicker}</span>
            <span className="hero-update-sep" aria-hidden="true">
              /
            </span>
            <span className="hero-update-text">{t.heroReleaseText}</span>
          </div>

          <p className="hero-sub reveal-delay-2" data-reveal>{t.heroSub}</p>

          <div className="hero-btns reveal-delay-3" data-reveal>
            <a className="btn-pill btn-fill" href={inviteUrl} target="_blank" rel="noreferrer">
              {t.heroPrimary}
            </a>
            <a className="btn-pill btn-ghost" href="#how">
              {t.heroSecondary}
            </a>
          </div>
        </section>

        <div className="hero-img-wrap reveal-delay-4" data-reveal>
          <div className="hero-img-frame">
            <img
              src="/hero-screenshot.png"
              alt="Discord でコントロールパネルが表示されたスクリーンショット"
              className="hero-img"
            />
          </div>
        </div>

        <section className="sec" id="features">
          <div className="sec-head" data-reveal>
            <h2>{t.featureHeading}</h2>
            <p>{t.featureLead}</p>
          </div>

          <div className="feature-row" data-reveal>
            <div className="feature-text">
              <div className="f-item">
                <div className="f-icon">🎧</div>
                <div>
                  <h3>{t.featureA1Title}</h3>
                  <p>{t.featureA1Body}</p>
                </div>
              </div>
              <div className="f-item">
                <div className="f-icon">🔎</div>
                <div>
                  <h3>{t.featureA2Title}</h3>
                  <p>{t.featureA2Body}</p>
                </div>
              </div>
              <div className="f-item">
                <div className="f-icon">🎛️</div>
                <div>
                  <h3>{t.featureA3Title}</h3>
                  <p>{t.featureA3Body}</p>
                </div>
              </div>
            </div>
            <div className="feature-media feature-media-search">
              <img
                src="/feature-search.png"
                alt="検索結果ピッカーが表示されている Discord のスクリーンショット"
                className="feature-image"
              />
            </div>
          </div>

          <div className="feature-row reverse" data-reveal>
            <div className="feature-media feature-media-queue">
              <img
                src="/feature-queue.png"
                alt="キュービューワーが表示されている Discord のスクリーンショット"
                className="feature-image"
              />
            </div>
            <div className="feature-text">
              <div className="f-item">
                <div className="f-icon">📋</div>
                <div>
                  <h3>{t.featureB1Title}</h3>
                  <p>{t.featureB1Body}</p>
                </div>
              </div>
              <div className="f-item">
                <div className="f-icon">📂</div>
                <div>
                  <h3>{t.featureB2Title}</h3>
                  <p>{t.featureB2Body}</p>
                </div>
              </div>
              <div className="f-item">
                <div className="f-icon">🌐</div>
                <div>
                  <h3>{t.featureB3Title}</h3>
                  <p>{t.featureB3Body}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="how">
          <div className="sec-head" data-reveal>
            <h2>{t.howHeading}</h2>
            <p>{t.howLead}</p>
          </div>

          <div className="steps">
            <div className="step" data-reveal>
              <div className="step-num">1</div>
              <h3>{t.step1Title}</h3>
              <p>{t.step1Body}</p>
            </div>
            <div className="step reveal-delay-1" data-reveal>
              <div className="step-num">2</div>
              <h3>{t.step2Title}</h3>
              <p>{t.step2Body}</p>
            </div>
            <div className="step reveal-delay-2" data-reveal>
              <div className="step-num">3</div>
              <h3>{t.step3Title}</h3>
              <p>{t.step3Body}</p>
            </div>
          </div>
        </section>

        <section className="sec" id="commands">
          <div className="sec-head" data-reveal>
            <h2>{t.commandsHeading}</h2>
            <p>{t.commandsLead}</p>
          </div>

          <div className="cmd-grid">
            {t.commands.map((cmd) => (
              <div className="cmd-card" key={cmd.name} data-reveal>
                <div className="cmd-card-name">{cmd.name}</div>
                <div className="cmd-card-desc">{cmd.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-panel" data-reveal>
            <h2>
              {t.ctaHeading.split("\n").map((line, index, array) => (
                <span key={`${line}-${index}`} className="cta-heading-line">
                  {line}
                  {index < array.length - 1 ? <br /> : null}
                </span>
              ))}
            </h2>
            <p className="cta-copy">{t.ctaBody}</p>
            <div className="cta-actions">
              <a className="btn-pill btn-fill" href={inviteUrl} target="_blank" rel="noreferrer">
                {t.ctaPrimary}
              </a>
              <a className="btn-pill btn-ghost cta-ghost" href="#commands">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner container">
          <div className="footer-left">
            <img src="/logo-kanade.png" alt="" className="footer-logo-mark" />
            <strong>Kanade</strong>
            <span>· {t.footerLabel}</span>
          </div>
          <div className="footer-right">
            <a href="/terms">利用規約</a>
            <a href="/privacy">プライバシーポリシー</a>
            <a href="https://github.com/AxAce67/discord-music-bot" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

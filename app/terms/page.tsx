import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Kanade の利用条件、禁止事項、免責事項等を定める利用規約です。",
};

const sections = [
  {
    title: "1. 適用",
    body: "本規約は、Kanade（以下「本Bot」）の利用条件を定めるものです。利用者は、本Botを Discord サーバーに導入し、または利用した時点で、本規約に同意したものとみなされます。"
  },
  {
    title: "2. 提供内容",
    body: "本Botは、Discord 上で音楽再生、キュー管理、言語設定、プレイリスト読込等の機能を提供します。機能の全部または一部は、Discord、YouTube、その他外部サービスの仕様変更、通信障害、API 制限等により利用できなくなる場合があります。"
  },
  {
    title: "3. 利用条件",
    body: "利用者は、Discord の利用規約、Discord Developer Terms、Discord Developer Policy、各サーバーのルールおよび適用される法令を遵守しなければなりません。音源やコンテンツの利用については、利用者自身の責任で適法性を確認してください。"
  },
  {
    title: "4. 禁止事項",
    body: "本Botの利用にあたり、法令または公序良俗に反する行為、第三者の権利を侵害する行為、不正アクセス、過度な負荷を与える行為、本Botまたは関連サービスの運営を妨害する行為、リバースエンジニアリングその他不正利用を禁止します。"
  },
  {
    title: "5. 外部サービス",
    body: "本Botは Discord および外部配信サービスと連携して動作します。これら外部サービスの利用には、各サービスの利用規約・ポリシーが適用されます。外部サービスの障害、仕様変更、コンテンツ削除、地域制限等により本Botの機能が制限される場合があります。"
  },
  {
    title: "6. 停止・変更",
    body: "開発者は、保守、障害対応、仕様変更、セキュリティ対応その他の理由により、本Botの全部または一部を予告なく変更、停止または終了することがあります。"
  },
  {
    title: "7. 免責",
    body: "開発者は、本Botの完全性、正確性、継続性、特定目的適合性を保証しません。本Botの利用または利用不能により生じた損害について、開発者は故意または重過失がある場合を除き責任を負いません。外部サービス由来の不具合、再生不能、データ消失、接続障害もこれに含まれます。"
  },
  {
    title: "8. 規約の変更",
    body: "本規約は、必要に応じて改定されることがあります。改定後の内容は本ページに掲載した時点で効力を生じます。重要な変更がある場合は、可能な範囲で告知を行います。"
  },
  {
    title: "9. お問い合わせ",
    body: "本Botに関するお問い合わせは、GitHub リポジトリまたは開発者が案内する連絡手段を通じて受け付けます。法務・契約上の確認が必要な場合は、公開リポジトリ上で扱えないことがあります。"
  }
];

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <a href="/" className="legal-back">
          ← Kanade に戻る
        </a>

        <header className="legal-head">
          <p className="legal-meta">最終更新日: 2026年3月8日</p>
          <h1>利用規約</h1>
          <p>Kanade の利用条件、禁止事項、免責事項等を定める規約です。</p>
        </header>

        <div className="legal-sections">
          {sections.map((section) => (
            <section className="legal-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

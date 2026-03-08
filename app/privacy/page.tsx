import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Kanade が取得・保存する情報と、その取扱い方針を定めるプライバシーポリシーです。",
};

const sections = [
  {
    title: "1. 取得する情報",
    body: "Kanade は、Bot の提供に必要な範囲で、Discord サーバー ID、チャンネル ID、メッセージ ID、ユーザー ID、キュー情報、再生状態、言語設定、エラーログ等を取得または保存する場合があります。"
  },
  {
    title: "2. 利用目的",
    body: "取得した情報は、音楽再生、キュー管理、再起動後の状態復元、言語設定の保持、障害調査、セキュリティ対応、サービス改善のために利用します。これらの目的を超えて、不要に個人情報を利用することはありません。"
  },
  {
    title: "3. 保存期間",
    body: "保存情報は、本Botの運用上必要な期間保持されます。再生状態や一部の設定は継続利用のために保存される場合がありますが、運用停止、仕様変更、保守対応等に伴い削除または初期化されることがあります。"
  },
  {
    title: "4. 第三者提供",
    body: "法令に基づく場合を除き、取得した情報を第三者へ販売または提供することはありません。ただし、Discord や再生元サービスとの通信、ホスティング、監視、解析等に必要な範囲で外部サービスが関与する場合があります。"
  },
  {
    title: "5. 外部サービスとの関係",
    body: "Kanade は Discord および外部音源サービスと連携して動作します。これら外部サービスにおける情報の取扱いについては、各サービスのプライバシーポリシーおよび利用規約が適用されます。"
  },
  {
    title: "6. セキュリティ",
    body: "開発者は、保存情報の漏えい、滅失、毀損の防止に努めます。ただし、インターネット通信および外部サービス連携を伴う性質上、完全な安全性を保証するものではありません。"
  },
  {
    title: "7. 利用者の権利",
    body: "保存情報の削除や取扱いについて問い合わせを行いたい場合は、GitHub リポジトリまたは開発者が案内する連絡手段を通じて相談できます。ただし、技術的・法的・運用上の理由により、すべての要求に対応できるとは限りません。"
  },
  {
    title: "8. ポリシーの変更",
    body: "本ポリシーは、必要に応じて改定されることがあります。改定後の内容は本ページに掲載した時点で効力を生じます。"
  }
];

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <a href="/" className="legal-back">
          ← Kanade に戻る
        </a>

        <header className="legal-head">
          <p className="legal-meta">最終更新日: 2026年3月8日</p>
          <h1>プライバシーポリシー</h1>
          <p>Kanade が取得・保存する情報と、その取扱い方針を定めるポリシーです。</p>
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

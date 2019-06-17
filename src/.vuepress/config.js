module.exports = {
  // サイト名
  title: "tech lunch box",
  themeConfig: {
    // サイトロゴ
    logo: '/lunchbox-logo.png',
    // 記事にサイドバーで目次を表示する
    sidebar: "auto",
    sidebarDepth: 2,
    // 記事に最終更新日を自動表示する
    lastUpdated: 'Last Updated'
  },
  // ビルド後ファイル出力先
  dest: "docs",
  // カスタムドメインを使用しない場合はbaseにgithubのリポジトリ名を設定
  // base: '/tech-lunch-box/',
  markdown: {
    // ソースコードに行数を表示する。
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'ja',
    }
  }
}
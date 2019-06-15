module.exports = {
  // サイト名
  title: "tech lunch box",
  themeConfig: {
    logo: '/lunchbox-logo.png',
    sidebar: "auto",
    sidebarDepth: 2,
  },
  // ビルド後ファイル出力先
  dest: "docs",
  // カスタムドメインを使用しない場合はbaseにgithubのリポジトリ名を設定
  // base: '/tech-lunch-box/',
  markdown: {
    // ソースコードに行数を表示する。
    lineNumbers: true
  }
}
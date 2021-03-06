const feed_options = {
  canonical_base: "https://webmasterish.com"
};

module.exports = {
  // サイト名
  title: "tech lunch box",
  description: " ",
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "apple-touch-icon.png" }]
  ],
  plugins: [
    ["feed", feed_options],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-146509751-1"
      }
    ],
    [
      "sitemap",
      {
        hostname: 'https://lunchbox.qnv.pw/',
        changefreq: "weekly"
      }
    ],
    [
      'seo', {
        description: ($page, $site) => $page.frontmatter.description || ($page.excerpt && $page.excerpt.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")) || $site.description || "",
        title: ($page, $site) => $page.title || $site.title,
      }
    ]
  ],
  themeConfig: {
    domain: 'https://lunchbox.qnv.pw',
    // サイトロゴ
    logo: "/lunchbox-logo.png",
    // 記事にサイドバーで目次を表示する
    sidebar: "auto",
    sidebarDepth: 2,
    // 記事に最終更新日を自動表示する
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts.html" },
      { text: "Github", link: "https://github.com/qnaiv"}
      // { text: "About\ me", link: "https://portfolio.forkwell.com/@qnaiv" }
    ]
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
    "/": {
      lang: "ja"
    }
  }
};

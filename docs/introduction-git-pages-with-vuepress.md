# vuepressを使った静的サイトをGithub pagesで公開するまで

## このページで分かること
- 1からvuepressの導入する方法・基本的な使い方
- Github pagesで静的サイトを公開する方法

## vuepressを導入する
```powershell
# gitclone
git clone [url]

# package.json作成
npm init

# vuepressインストール
npm install -D vuepress

# docディレクトリ作成
mkdir docs

# テストページ作成
echo '# Hello VuePress' > README.md

# 設定ファイルを格納するディレクトリ作成
mkdir docs/.vuepress
```

## 設定ファイル作成
`docs/.vuepress/`に`config.js`を作成し、以下の設定を記述する。
```js
module.exports = {
    // サイト名
    title: "tech lunch box",
    markdown: {
        // ソースコードに行数を表示する。
        lineNumbers: true
      }
}
```
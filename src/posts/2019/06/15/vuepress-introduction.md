---
category: "vuepress"
tags: ["vuepress", "Github pages"]
createAt: 2019-06-15 09:00
---
# vuepressで作った静的サイトをGithub pagesで公開するまで

## このページで分かること
- 1からvuepressの導入する方法・基本的な使い方
- Github pagesで静的サイトを公開する方法


## 前提条件
- nodejsを導入する
- githubにリポジトリを用意する

## vuepressを導入する

### 1. 以下のコマンドを実行
```sh
# gitclone
git clone [リポジトリのurl]

# package.json作成
npm init

# vuepressインストール
npm install -D vuepress

# 設定ファイルを格納するディレクトリ作成
mkdir .vuepress
```

### 2. ページを作成する
プロジェクトルートに`index.md`を作成する。
index.md
``` md
# Hello Vuepress!
Top page.
```

### 3. package.json編集
`package.json`の`scripts`に以下の記述を追加する
```json
"scripts": {
  "dev": "vuepress dev src",
  "build": "vuepress build src"
},
```

### 4. vuepress設定ファイル作成
`.vuepress/`に`config.js`を作成し、以下の設定を記述する。
```js
module.exports = {
    // サイト名
    title: "Vuepress introduction",
    
    // githubのリポジトリ名を指定する。カスタムドメインを使う場合は不要。
    base: '/vuepress-introduction',
    
    // markdown: {
    //   // ソースコードに行数を表示する。
    //   lineNumbers: true
    // }
}
```

### 5. 動作確認
`npm run dev`を実行して[http://localhost:8080/vuepress-introduction](http://localhost:8080/vuepress-introduction)を開き、ページが表示されることを確認する。

完了。ここまででcommit & pushしておく。

## Github pagesの設定 ~ サイト公開

### 1. gh-pagesリポジトリを作成する
![githubpages](./vuepress-introduction-1.png)

### 2. リポジトリの設定を変更する
githubリポジトリの設定ページでsourceを`gh-pages branch`にする。
![githubpages](./vuepress-introduction-2.png)

### 3. ビルドしてgh-pagesリポジトリにpushする
``` sh
npm run build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:qnaiv/vuepress-introduction.git master:gh-pages

cd ../..
```

## 完了
https://`ユーザ名`.github.io/`リポジトリ名`/でページが表示される。

[https://qnaiv.github.io/vuepress-introduction/](https://qnaiv.github.io/vuepress-introduction/)


## 今回のソース
[https://github.com/qnaiv/vuepress-introduction](https://github.com/qnaiv/vuepress-introduction)
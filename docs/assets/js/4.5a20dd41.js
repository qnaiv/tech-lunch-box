(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(s,a,t){s.exports=t.p+"assets/img/github-pages-setting-1.5bb4a297.png"},189:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vuepressを使った静的サイトをgithub-pagesで公開するまで"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepressを使った静的サイトをgithub-pagesで公開するまで","aria-hidden":"true"}},[s._v("#")]),s._v(" vuepressを使った静的サイトをGithub pagesで公開するまで")]),s._v(" "),n("h2",{attrs:{id:"このページで分かること"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#このページで分かること","aria-hidden":"true"}},[s._v("#")]),s._v(" このページで分かること")]),s._v(" "),n("ul",[n("li",[s._v("1からvuepressの導入する方法・基本的な使い方")]),s._v(" "),n("li",[s._v("Github pagesで静的サイトを公開する方法")])]),s._v(" "),n("h2",{attrs:{id:"vuepressを導入する"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepressを導入する","aria-hidden":"true"}},[s._v("#")]),s._v(" vuepressを導入する")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitclone")]),s._v("\ngit clone "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[url]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# package.json作成")]),s._v("\nnpm init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vuepressインストール")]),s._v("\nnpm install "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("D vuepress\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docディレクトリ(ビルド後ファイルの出力先)作成")]),s._v("\nmkdir docs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# srcディレクトリ作成")]),s._v("\nmkdir src\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# テストページ作成")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" > README"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 設定ファイルを格納するディレクトリ作成")]),s._v("\nmkdir src"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"package-json編集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json編集","aria-hidden":"true"}},[s._v("#")]),s._v(" package.json編集")]),s._v(" "),n("p",[n("code",[s._v("package.json")]),s._v("の"),n("code",[s._v("scripts")]),s._v("に以下の記述を追加する")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"scripts": {\n  "dev": "vuepress dev src",\n  "build": "vuepress build src"\n},\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"vuepress設定ファイル作成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress設定ファイル作成","aria-hidden":"true"}},[s._v("#")]),s._v(" vuepress設定ファイル作成")]),s._v(" "),n("p",[n("code",[s._v("docs/.vuepress/")]),s._v("に"),n("code",[s._v("config.js")]),s._v("を作成し、以下の設定を記述する。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// サイト名")]),s._v("\n    title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"サイト名"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ビルド後ファイル出力先")]),s._v("\n    dest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// カスタムドメインを使用しない場合はbaseにgithubのリポジトリ名を設定")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// base: '/リポジトリ名/',")]),s._v("\n    markdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ソースコードに行数を表示する。")]),s._v("\n      lineNumbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("ここまでの内容をcommit & pushする。")]),s._v(" "),n("h2",{attrs:{id:"github-pagesの設定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-pagesの設定","aria-hidden":"true"}},[s._v("#")]),s._v(" Github pagesの設定")]),s._v(" "),n("p",[s._v("githubリポジトリの設定ページでsourceを"),n("code",[s._v("master branch/docs folder")]),s._v("にする。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(184),alt:"githubpages"}})]),s._v(" "),n("h2",{attrs:{id:"完了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完了","aria-hidden":"true"}},[s._v("#")]),s._v(" 完了")]),s._v(" "),n("p",[s._v("https://"),n("code",[s._v("ユーザ名")]),s._v(".github.io/"),n("code",[s._v("リポジトリ名")]),s._v("/で表示される。")])])},[],!1,null,null,null);a.default=e.exports}}]);
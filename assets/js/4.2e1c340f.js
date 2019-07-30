(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{321:function(t,a,s){t.exports=s.p+"assets/img/vuepress-automate-deployment-with-travis-1.74fe6a0c.png"},322:function(t,a,s){t.exports=s.p+"assets/img/vuepress-automate-deployment-with-travis-2.11d6d82d.png"},323:function(t,a,s){t.exports=s.p+"assets/img/vuepress-automate-deployment-with-travis-3.f8b7216a.png"},324:function(t,a,s){t.exports=s.p+"assets/img/vuepress-automate-deployment-with-travis-4.df31e68d.png"},325:function(t,a,s){t.exports=s.p+"assets/img/vuepress-automate-deployment-with-travis-5.5ecc9675.png"},326:function(t,a,s){t.exports=s.p+"assets/img/vuepress-automate-deployment-with-travis-6.dc09d9a1.png"},348:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"このページでわかること"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#このページでわかること","aria-hidden":"true"}},[t._v("#")]),t._v(" このページでわかること")]),t._v(" "),e("ul",[e("li",[t._v("Travis CIの基礎")]),t._v(" "),e("li",[t._v("markdownファイルをpushされたとき、Vuepressサイトが自動ビルドする手順")])]),t._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),e("p",[t._v("以下の作業が完了していること"),e("br"),t._v(" "),e("router-link",{attrs:{to:"/posts/2019/06/15/vuepress-introduction.html"}},[t._v("vuepressで作った静的サイトをGithub pagesで公開するまで")])],1),t._v(" "),e("h2",{attrs:{id:"travis-ciとは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#travis-ciとは","aria-hidden":"true"}},[t._v("#")]),t._v(" Travis CIとは")]),t._v(" "),e("p",[t._v("Githubのpublicリポジトリなら無料で利用できるCI/CDサービス")]),t._v(" "),e("blockquote",[e("h4",{attrs:{id:"ci-cd-継続的インテグレーション-デリバリー-とは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-継続的インテグレーション-デリバリー-とは","aria-hidden":"true"}},[t._v("#")]),t._v(" CI/CD(継続的インテグレーション/デリバリー)とは")]),t._v(" "),e("p",[t._v("ビルドやテスト、デプロイを自動化してバグの早期発見、開発効率の工場を図る仕組みのこと。")])]),t._v(" "),e("p",[e("code",[t._v(".travis.yml")]),t._v("をGithubリポジトリに含めるだけでジョブの設定が可能。")]),t._v(" "),e("h2",{attrs:{id:"travis-ymlについて"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#travis-ymlについて","aria-hidden":"true"}},[t._v("#")]),t._v(" .travis.ymlについて")]),t._v(" "),e("h3",{attrs:{id:"ジョブのライフサイクル"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ジョブのライフサイクル","aria-hidden":"true"}},[t._v("#")]),t._v(" ジョブのライフサイクル")]),t._v(" "),e("p",[t._v("ライフサイクルは以下のフェーズで構成されている。\n上から順に実行されるので、好きなフェーズをチョイスしてymlに書く。")]),t._v(" "),e("ol",[e("li",[t._v("[任意] "),e("code",[t._v("apt addons")])]),t._v(" "),e("li",[t._v("[任意] "),e("code",[t._v("cache components")])]),t._v(" "),e("li",[e("code",[t._v("before_install")])]),t._v(" "),e("li",[e("code",[t._v("install")])]),t._v(" "),e("li",[e("code",[t._v("before_script")])]),t._v(" "),e("li",[e("code",[t._v("script")])]),t._v(" "),e("li",[t._v("[任意] "),e("code",[t._v("before_cache")]),t._v(" (for cleaning up cache)")]),t._v(" "),e("li",[e("code",[t._v("after_success")]),t._v(" or "),e("code",[t._v("after_failure")])]),t._v(" "),e("li",[t._v("[任意] "),e("code",[t._v("before_deploy")])]),t._v(" "),e("li",[t._v("[任意] "),e("code",[t._v("deploy")])]),t._v(" "),e("li",[t._v("[任意] "),e("code",[t._v("after_deploy")])]),t._v(" "),e("li",[e("code",[t._v("after_script")])])]),t._v(" "),e("h2",{attrs:{id:"導入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#導入","aria-hidden":"true"}},[t._v("#")]),t._v(" 導入")]),t._v(" "),e("h3",{attrs:{id:"_1-アカウントを作成する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-アカウントを作成する","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. アカウントを作成する")]),t._v(" "),e("p",[t._v("Githubアカウントでログイン可能。")]),t._v(" "),e("h3",{attrs:{id:"_2-リポジトリを有効化する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-リポジトリを有効化する","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. リポジトリを有効化する")]),t._v(" "),e("p",[t._v("右上のSettingsから設定画面を開き、デプロイ自動化したいリポジトリを有効化する。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(321),alt:"image1"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(322),alt:"image2"}})]),t._v(" "),e("h3",{attrs:{id:"_3-githubのアクセストークンを取得してtravisに登録する。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-githubのアクセストークンを取得してtravisに登録する。","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. GIthubのアクセストークンを取得してTravisに登録する。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Githubのユーザ設定 > Developer settings > Personal access tokens画面を開く")])]),t._v(" "),e("li",[e("p",[t._v("Generate new tokenを押す。")])]),t._v(" "),e("li",[e("p",[t._v("Noteに好きな識別子を入力し、public_repoにチェックを入れる。\n"),e("img",{attrs:{src:s(323),alt:"image3"}})])]),t._v(" "),e("li",[e("p",[t._v("緑色の部分にアクセストークンが表示されるのでコピーする。\n"),e("img",{attrs:{src:s(324),alt:"image4"}})])]),t._v(" "),e("li",[e("p",[t._v("Travis CIのリポジトリ設定画面を開き、"),e("code",[t._v("Environment Variables")]),t._v("の"),e("code",[t._v("name")]),t._v("を好きな文字列に、"),e("code",[t._v("value")]),t._v("を先ほどコピーしたtokenを入力する。\n"),e("img",{attrs:{src:s(325),alt:"image5"}})])])]),t._v(" "),e("h3",{attrs:{id:"_4-travis-ymlを作成する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-travis-ymlを作成する","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. "),e("code",[t._v(".travis.yml")]),t._v("を作成する")]),t._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $github_token\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep_history")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local-dir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .vuepress/dist\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h3",{attrs:{id:"_5-完了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-完了","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 完了")]),t._v(" "),e("p",[e("code",[t._v(".travis.yml")]),t._v("をpushした瞬間から、自動デプロイが動くようになる。\n"),e("img",{attrs:{src:s(326),alt:"image6"}})]),t._v(" "),e("h2",{attrs:{id:"今回のソース"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#今回のソース","aria-hidden":"true"}},[t._v("#")]),t._v(" 今回のソース")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/qnaiv/automate-deploy-with-travis",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/qnaiv/automate-deploy-with-travis"),e("OutboundLink")],1)])])},[],!1,null,null,null);a.default=r.exports}}]);
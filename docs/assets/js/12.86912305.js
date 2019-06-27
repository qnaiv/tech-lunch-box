(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{338:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"gitで過去コミットのauthorとcommiterを変更する"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitで過去コミットのauthorとcommiterを変更する","aria-hidden":"true"}},[t._v("#")]),t._v(" gitで過去コミットのauthorとcommiterを変更する")]),t._v(" "),r("p",[t._v("GitのAuthor, Comitterの設定を初期設定のまま使うと、PC名になってしまう。\n（そのため、意図せずAuthorが本名でコミットされたりする。)\nここでは後からAuthorやComitterを変える方法を記す。")]),t._v(" "),r("h2",{attrs:{id:"このページで分かること"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#このページで分かること","aria-hidden":"true"}},[t._v("#")]),t._v(" このページで分かること")]),t._v(" "),r("ul",[r("li",[t._v("過去のコミットのAuthorとcomitterを変更する方法")]),t._v(" "),r("li",[t._v("コミットする際に適用されるcommiterを変更する方法")])]),t._v(" "),r("h2",{attrs:{id:"過去のauthor-comitterを変更"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#過去のauthor-comitterを変更","aria-hidden":"true"}},[t._v("#")]),t._v(" 過去のAuthor / Comitterを変更")]),t._v(" "),r("p",[t._v("名前とメアドの部分を置き換えること。")]),t._v(" "),r("div",{staticClass:"danger custom-block"},[r("p",[t._v("このコマンドを実行するとすべてのコミットが置き換わる。（自分のコミット分以外も）\nなので個人的なリポジトリ以外では非推奨。")])]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" filter-branch -f --env-filter "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"GIT_AUTHOR_NAME='変更後名前'; GIT_AUTHOR_EMAIL='変更後メールアドレス'; GIT_COMMITTER_NAME='変更後名前'; GIT_COMMITTER_EMAIL='変更後メールアドレス';\"")]),t._v(" HEAD \n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h2",{attrs:{id:"今後のコミット時のauthorとcomitterを変更する"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#今後のコミット時のauthorとcomitterを変更する","aria-hidden":"true"}},[t._v("#")]),t._v(" 今後のコミット時のAuthorとComitterを変更する")]),t._v(" "),r("p",[t._v("以下のコマンドを実行する。")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name 名前\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email メールアドレス\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);
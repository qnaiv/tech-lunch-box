(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{372:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-compose-を-centos8-に導入するまで"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-を-centos8-に導入するまで","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose を CentOS8 に導入するまで")]),s._v(" "),e("h2",{attrs:{id:"リポジトリの追加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#リポジトリの追加","aria-hidden":"true"}},[s._v("#")]),s._v(" リポジトリの追加")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"containerd-io-インストール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#containerd-io-インストール","aria-hidden":"true"}},[s._v("#")]),s._v(" containerd.io インストール")]),s._v(" "),e("p",[s._v("以下から、新しいバージョンの containerd.io の URL を入手し、インストールする。\n"),e("a",{attrs:{href:"https://download.docker.com/linux/centos/7/x86_64/stable/Packages/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://download.docker.com/linux/centos/7/x86_64/stable/Packages/"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最新バージョン")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"docker-インストール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-インストール","aria-hidden":"true"}},[s._v("#")]),s._v(" docker インストール")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"docker-compose-インストール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-インストール","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose インストール")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# インストール")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.24.1/docker-compose-'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 実行権限付与")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudoで実行できるようにシンボリックリンクを張る")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 実行確認")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker-compose --version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("参考: https://docs.docker.com/compose/install/")])])},[],!1,null,null,null);a.default=t.exports}}]);
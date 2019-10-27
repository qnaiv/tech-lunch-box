(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{372:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vps-をレンタルしたときの初期設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vps-をレンタルしたときの初期設定","aria-hidden":"true"}},[s._v("#")]),s._v(" VPS をレンタルしたときの初期設定")]),s._v(" "),t("p",[s._v("conoha を借りて初期設定をしたのでメモ。")]),s._v(" "),t("h2",{attrs:{id:"手順"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手順","aria-hidden":"true"}},[s._v("#")]),s._v(" 手順")]),s._v(" "),t("ol",[t("li",[s._v("SSH 接続する")]),s._v(" "),t("li",[s._v("ユーザ作成")]),s._v(" "),t("li",[s._v("SSH 鍵作成")]),s._v(" "),t("li",[s._v("sshd_config 編集")])]),s._v(" "),t("h2",{attrs:{id:"_1-ssh-接続する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-ssh-接続する","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. SSH 接続する")]),s._v(" "),t("p",[t("router-link",{attrs:{to:"/posts/2019/10/26/ssh-connection-with-vscode.html"}},[s._v("VSCode で SSH 接続する")])],1),s._v(" "),t("h2",{attrs:{id:"_2-ユーザ作成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-ユーザ作成","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. ユーザ作成")]),s._v(" "),t("p",[s._v("レンタルした直後は root ユーザしかないので新しいユーザを作る")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("adduser 新規ユーザ名 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ユーザ作成")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" 新規ユーザ名 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#パスワード設定")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("そして wheel グループに追加")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("gpasswd -a 新規ユーザ名 wheel\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" 新規ユーザ名\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudoできるか確認")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("wheel ユーザ")]),s._v(" "),t("p",[s._v("sudo 権限を持つグループ")])]),s._v(" "),t("h2",{attrs:{id:"_2-ssh-鍵作成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssh-鍵作成","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. SSH 鍵作成")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新規ユーザで行う")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" ~/.ssh\nssh-keygen -t rsa -b 4096\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" id_rsa.pub authorized_keys "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#公開鍵のほうをauthorized_keysにリネーム")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 600 authorized_keys\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_3-ssh-秘密鍵をクライアント側にダウンロードする"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-ssh-秘密鍵をクライアント側にダウンロードする","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. SSH 秘密鍵をクライアント側にダウンロードする")]),s._v(" "),t("p",[s._v("id_rsa(秘密鍵)のほうをクライアントの.ssh ディレクトリに置く。")]),s._v(" "),t("p",[s._v("config ファイルを編集し、"),t("code",[s._v("IdentityFile")]),s._v("に秘密鍵のパスを指定する。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Host 任意の接続名\nHostName ホスト名\nUser ユーザー名\nPort ポート番号\nIdentityFile 鍵の場所(例: ~/.ssh/test.key)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_3-sshd-config-変更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-sshd-config-変更","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. sshd_config 変更")]),s._v(" "),t("p",[s._v("sshd_config で以下の項目を変更する。")]),s._v(" "),t("ul",[t("li",[s._v("鍵認証設定")]),s._v(" "),t("li",[s._v("SSH ポート変更(デフォルトの 22 だと攻撃されまくるので変更する)")]),s._v(" "),t("li",[s._v("root ログインを禁止する")]),s._v(" "),t("li",[s._v("パスワードログイン禁止")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Port 22")]),s._v("\nPort 49152 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#49152〜65535 がいいらしい。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PermitRootLogin yes")]),s._v("\nPermitRootLogin no "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rootログイン禁止")]),s._v("\n\nRSAAuthentication "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#追記")]),s._v("\n\nPubkeyAuthentication "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#コメントアウト解除")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#パスワードログイン禁止")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PasswordAuthentication yes")]),s._v("\nPasswordAuthentication no "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#パスワードログイン禁止")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("sshd を再起動する。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart sshd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("次に、firewalld のポート開放設定を変更する。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/firewalld/services/ssh.xml\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --reload "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 設定反映")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.conoha.jp/guide/addusersshkey.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.conoha.jp/guide/addusersshkey.php"),t("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);
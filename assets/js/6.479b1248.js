(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{327:function(t,a,r){t.exports=r.p+"assets/img/jwt-introduction-1-97138c8a-beae-4774-ac49-d038425739e5.207e8d39.png"},328:function(t,a,r){t.exports=r.p+"assets/img/jwt-introduction-2-585aa0e0-8479-4f5e-8724-27756f782341.f5c9780c.png"},329:function(t,a,r){t.exports=r.p+"assets/img/jwt-introduction-3-91af68e8-f0fd-414f-81c8-94bf85d1525c.758270f5.png"},330:function(t,a,r){t.exports=r.p+"assets/img/jwt-introduction-4-6d8dce6d-e682-414b-9330-d5d074cd301e.a46a81bc.png"},331:function(t,a,r){t.exports=r.p+"assets/img/jwt-introduction-4-79083ea9-7059-426a-81c4-2976ea7f9742.0061e250.png"},354:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jwt-についてまとめ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-についてまとめ","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT についてまとめ")]),t._v(" "),e("p",[t._v("仕事で初めて JWT に触れる機会があったので、まとめる。")]),t._v(" "),e("h2",{attrs:{id:"jwt-json-web-token-とは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-json-web-token-とは","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT(Json Web Token)とは")]),t._v(" "),e("p",[t._v("主に"),e("strong",[t._v("認証が必要な REST API")]),t._v("や、"),e("strong",[t._v("シングルサインオン")]),t._v("を実装する際にアクセストークンとして利用される。")]),t._v(" "),e("p",[t._v("トークンの中に任意の情報（Claim）を格納できる。（認証したユーザの ID やトークンの有効期限など）")]),t._v(" "),e("p",[t._v("トークン生成時に"),e("strong",[t._v("署名")]),t._v("を付けることができ、それにより正規に生成されたトークンかどうかを検証することが可能。⇒"),e("strong",[t._v("改ざん検知")]),t._v("できる。")]),t._v(" "),e("h3",{attrs:{id:"利用例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用例","aria-hidden":"true"}},[t._v("#")]),t._v(" 利用例")]),t._v(" "),e("p",[t._v("ログインしてからプライベート API を実行するシンプルなケース。\n"),e("img",{attrs:{src:r(327),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"jwt-を触ってみる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-を触ってみる","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT を触ってみる")]),t._v(" "),e("p",[t._v("以下のサイトの「Debugger」で、JWT の生成/検証を試せる。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jwt.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT.IO"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"①jwt-を生成してみる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#①jwt-を生成してみる","aria-hidden":"true"}},[t._v("#")]),t._v(" ①JWT を生成してみる")]),t._v(" "),e("p",[t._v("以下の手順で JWT を生成することができる。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(328),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"②jwt-を検証してみる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#②jwt-を検証してみる","aria-hidden":"true"}},[t._v("#")]),t._v(" ②JWT を検証してみる")]),t._v(" "),e("p",[t._v("不正な JWT を生成し、検証する。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(329),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"構造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#構造","aria-hidden":"true"}},[t._v("#")]),t._v(" 構造")]),t._v(" "),e("p",[t._v("JWT は HEADER, PAYLOAD, SIGNATURE の 3 つの要素で構成され、「.(ピリオド)」で区切られている。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(330),alt:""}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("HEADER")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("署名生成のアルゴリズムを格納する。")]),t._v(" "),e("p",[t._v('{\n"alg" : "HS256",\n"typ" : "JWT"\n}')])])])]),t._v(" "),e("li",[e("p",[t._v("PAYLOAD")]),t._v(" "),e("ul",[e("li",[t._v("ログインしているユーザの ID や権限など、サーバサイドに受け渡したい情報を格納する。")]),t._v(" "),e("li",[t._v("PAYLOAD には好きな情報を入れられるが、RFC 標準で定義されている項目もある。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.notion.so/b66c66c541ea4a8da2aa0b2697a3ba38",target:"_blank",rel:"noopener noreferrer"}},[t._v("標準で定義されている PAYLOAD 項目(一部)"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("※PAYLOAD は暗号化されておらず、JWT を盗聴されると簡単に中身を確認可能なのでパスワード等の情報は入れないこと。")])]),t._v(" "),e("p",[e("img",{attrs:{src:r(331),alt:""}})])])])]),t._v(" "),e("li",[e("p",[t._v("VERIFY SIGNATURE")]),t._v(" "),e("ul",[e("li",[t._v("署名情報を格納する。")])])])]),t._v(" "),e("h2",{attrs:{id:"メリット"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#メリット","aria-hidden":"true"}},[t._v("#")]),t._v(" メリット")]),t._v(" "),e("h3",{attrs:{id:"ステートレス"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ステートレス","aria-hidden":"true"}},[t._v("#")]),t._v(" ステートレス")]),t._v(" "),e("p",[t._v("サーバ側は送られてきた JWT を検証するだけでよいため、セッション管理する必要がない。")]),t._v(" "),e("p",[t._v("ロードバランサによる分散環境や、他システムとのシングルサインオンの際に、セッション情報を同期する必要がなく便利。")]),t._v(" "),e("h3",{attrs:{id:"db-アクセスの削減"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-アクセスの削減","aria-hidden":"true"}},[t._v("#")]),t._v(" DB アクセスの削減")]),t._v(" "),e("p",[t._v("PAYLOAD にユーザの権限情報などを乗せておけば、DB に問い合わせるコストを削減できる。")]),t._v(" "),e("h2",{attrs:{id:"デメリット"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#デメリット","aria-hidden":"true"}},[t._v("#")]),t._v(" デメリット")]),t._v(" "),e("h3",{attrs:{id:"セキュリティ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#セキュリティ","aria-hidden":"true"}},[t._v("#")]),t._v(" セキュリティ")]),t._v(" "),e("p",[t._v("一度発行してしまった JWT はサーバ側で制御ができない。盗聴された JWT を無効化することができない。")]),t._v(" "),e("h3",{attrs:{id:"通信コスト"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信コスト","aria-hidden":"true"}},[t._v("#")]),t._v(" 通信コスト")]),t._v(" "),e("p",[t._v("リクエストのたびに JWT を付加するため、PAYLOAD に情報を乗せすぎると通信コストがかさむ。")]),t._v(" "),e("h2",{attrs:{id:"その他ポイント"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#その他ポイント","aria-hidden":"true"}},[t._v("#")]),t._v(" その他ポイント")]),t._v(" "),e("h3",{attrs:{id:"クライアント側での-jwt-の扱い方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#クライアント側での-jwt-の扱い方","aria-hidden":"true"}},[t._v("#")]),t._v(" クライアント側での JWT の扱い方")]),t._v(" "),e("p",[t._v("発行された JWT は、基本的には LocalStorage 等に保持し、リクエストのたびにインターセプタで Authorization ヘッダに付加する。")]),t._v(" "),e("p",[e("code",[t._v("Authorization: Bearer [JWT文字列]")])])])},[],!1,null,null,null);a.default=s.exports}}]);
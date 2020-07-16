(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{381:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracleの日付型についてまとめ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracleの日付型についてまとめ"}},[t._v("#")]),t._v(" Oracleの日付型についてまとめ")]),t._v(" "),a("p",[t._v("Oracle11g以降の情報。")]),t._v(" "),a("h2",{attrs:{id:"日付型の種類"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日付型の種類"}},[t._v("#")]),t._v(" 日付型の種類")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("データ型")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("DATE")]),t._v(" "),a("td",[t._v("年月日＋時分秒")])]),t._v(" "),a("tr",[a("td",[t._v("TIMESTAMP")]),t._v(" "),a("td",[t._v("年月日＋時分秒＋少数秒")])]),t._v(" "),a("tr",[a("td",[t._v("TIMESTAMP WITH TIME ZONE")]),t._v(" "),a("td",[t._v("TIMESTAMP ＋　タイムゾーン")])]),t._v(" "),a("tr",[a("td",[t._v("TIMESTAMP WITH LOCAL TIME ZONE")]),t._v(" "),a("td",[t._v("DBのタイムゾーンで補完されたTIMESTAMP")])])])]),t._v(" "),a("h2",{attrs:{id:"現在時刻の取得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#現在時刻の取得"}},[t._v("#")]),t._v(" 現在時刻の取得")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("関数")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("sysdate")]),t._v(" "),a("td",[t._v("OSの現在日時をDATE型で取得できる。")])]),t._v(" "),a("tr",[a("td",[t._v("current_date")]),t._v(" "),a("td",[t._v("セッションのタイムゾーンでの現在日時をDATE型で取得できる。")])]),t._v(" "),a("tr",[a("td",[t._v("systimestamp")]),t._v(" "),a("td",[t._v("OSの現在日時をtimestamp型で取得できる。")])]),t._v(" "),a("tr",[a("td",[t._v("current_timestamp")]),t._v(" "),a("td",[t._v("セッションのタイムゾーンでの現在日時を"),a("strong",[t._v("タイムゾーン付き")]),t._v("のtimestamp型で取得できる。")])]),t._v(" "),a("tr",[a("td",[t._v("localtimestamp")]),t._v(" "),a("td",[t._v("セッションのタイムゾーンでの現在日時を"),a("strong",[t._v("タイムゾーンなし")]),t._v("のtimestamp型で取得できる。")])])])]),t._v(" "),a("h2",{attrs:{id:"文字列からの変換"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文字列からの変換"}},[t._v("#")]),t._v(" 文字列からの変換")]),t._v(" "),a("h3",{attrs:{id:"文字列⇛date型-to-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文字列⇛date型-to-date"}},[t._v("#")]),t._v(" 文字列⇛DATE型 TO_DATE")]),t._v(" "),a("p",[t._v("TO_DATE(変換対象の文字列, 変換元の日付フォーマット)")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TO_DATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020/04/15 09:00:10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY/MM/DD HH24:MI:SS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"文字列⇛timestamp型-to-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文字列⇛timestamp型-to-timestamp"}},[t._v("#")]),t._v(" 文字列⇛TIMESTAMP型 TO_TIMESTAMP")]),t._v(" "),a("p",[t._v("TO_TIMESTAMP(変換対象の文字列, 変換元の日付フォーマット)")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TO_TIMESTAMP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020/04/15 09:00:10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY/MM/DD HH24:MI:SS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"文字列⇛timestamp-with-time-zone型-to-timestamp-tz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文字列⇛timestamp-with-time-zone型-to-timestamp-tz"}},[t._v("#")]),t._v(" 文字列⇛TIMESTAMP WITH TIME ZONE型 TO_TIMESTAMP_TZ")]),t._v(" "),a("p",[t._v("TO_TIMESTAMP_TZ(変換対象のタイムゾーン付き文字列, 変換元の日付フォーマット)")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TO_TIMESTAMP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020/04/15 09:00:10 +09:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY/MM/DD HH24:MI:SS TZH:TZM'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"日付型の四則演算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日付型の四則演算"}},[t._v("#")]),t._v(" 日付型の四則演算")]),t._v(" "),a("h3",{attrs:{id:"日付型からn日を加算・除算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日付型からn日を加算・除算"}},[t._v("#")]),t._v(" 日付型からn日を加算・除算")]),t._v(" "),a("p",[t._v("date型でもtimestamp型でも同じようにn/24で時間を足し引き出来る。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" systimestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"日付型からn時間を加算・除算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日付型からn時間を加算・除算"}},[t._v("#")]),t._v(" 日付型からn時間を加算・除算")]),t._v(" "),a("p",[t._v("date型でもtimestamp型でも同じようにn/24で時間を足し引き出来る。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" systimestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" sysdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"日付型同士の計算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日付型同士の計算"}},[t._v("#")]),t._v(" 日付型同士の計算")]),t._v(" "),a("p",[t._v("WIP")]),t._v(" "),a("h2",{attrs:{id:"日付型の比較"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日付型の比較"}},[t._v("#")]),t._v(" 日付型の比較")]),t._v(" "),a("p",[t._v("WIP")])])}),[],!1,null,null,null);s.default=r.exports}}]);
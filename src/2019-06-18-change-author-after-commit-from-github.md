---
category: "vuepress"
tags: ["vuepress", "Github pages"]
---
# gitで過去コミットのauthorとcommiterを変更する
GitのAuthor, Comitterの設定を初期設定のまま使うと、PC名になってしまう。
（そのため、意図せずAuthorが本名でコミットされたりする。)
ここでは後からAuthorやComitterを変える方法を記す。
## このページで分かること
- 過去のコミットのAuthorとcomitterを変更する方法
- コミットする際に適用されるcommiterを変更する方法

## 手順
名前とメアドの部分を置き換えること。
:::danger
このコマンドを実行するとすべてのコミットが置き換わる。（自分のコミット分以外も）
なので個人的なリポジトリ以外では非推奨。
:::
``` powershell
$ git filter-branch -f --env-filter "GIT_AUTHOR_NAME='変更後名前'; GIT_AUTHOR_EMAIL='変更後メールアドレス'; GIT_COMMITTER_NAME='変更後名前'; GIT_COMMITTER_EMAIL='変更後メールアドレス';" HEAD 
```
---
tags: ["Github"]
createAt: 2019-09-16 16:00
---

# git push 時のコミッター名が Github アカウントと一致しない問題

Github に`git push`する際、Github のアカウント名義でコミットするのに手間取ったのでメモ。

![image1](./change-git-committer1.png)

## git config でメールアドレスを設定する

以下のコマンドで user.email を設定する。

全ての設定を変える場合:

`git config --global user.email="メールアドレス"`

リポジトリ単位で設定する場合:

`git config --local user.email="メールアドレス"`

## 重要ポイント

user.email に設定するアドレスを間違えててつまずいた。

Github でメールアドレスを…

**公開状態にしている場合**

- Github に登録したメールアドレスをそのまま設定する。

**非公開状態にしている場合**

- noreply メールアドレスを設定する。

## noreply メールアドレスの確認方法

**Keep my email addressses private**(メールアドレスを非公開にする)にチェックがついている場合、赤枠で囲んだ部分に書かれているメールアドレスを`user.email`に設定する必要がある。
![image2](./change-git-committer2.png)

---
tags: ["Linux", "VPS", "Conoha"]
createAt: 2019-10-26 20:00
---

# VPS をレンタルしたときの初期設定

conoha を借りて初期設定をしたのでメモ。

## 手順

1. ユーザ作成
2. SSH 鍵設定 & root ログイン禁止
3. SSH ポート変更
4. VSCode に SSH 接続の設定をする

## 1. ユーザ作成

レンタルした直後は root ユーザしかないので新しいユーザを作る

```sh
adduser ユーザ名
passwd ユーザ名
```

そして wheel グループに追加

```sh
gpasswd -a ユーザ名 wheel
```

## 2. SSH 鍵設定 & root ログイン禁止

暗号鍵を作成し、作ったユーザに設定する。

下記の記事の通り、鍵を作り SCP で配置した。
この記事には、root ログ禁止まで手順が書いてある。
が、やる前に作ったユーザで鍵認証でログインできるか確認しよう。
[https://www.conoha.jp/guide/addusersshkey.php:embed:cite]

## 3. SSH ポート変更

SSH ポートがデフォルトの 22 だと攻撃されまくるので変更する。

まずは ssh で使うポートを変更する。

```sh
sudo vi /etc/ssh/sshd_config
```

以下のように書き換える。

```sh
[-]Port 22
[+]Port 49152 #49152〜65535 がいいらしい。
```

sshd を再起動する。

```sh
sudo systemctl restart sshd
```

次に、firewalld のポート開放設定を変更する。
ssh.xml を/etc/firewalld/services/にコピーし、中に書いてある port 設定部分を書き換える。

```sh
sudo cp /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/
sudo vi /etc/firewalld/services/ssh.xml
sudo firewall-cmd --reload # 設定反映
```

## 4. VSCode に SSH 接続の設定をする

以下を参照。

[VSCode で SSH 接続する](/posts/2019/10/26/ssh-connection-with-vscode.html)

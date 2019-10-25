---
tags: ["VSCode", "SSH"]
createAt: 2019-10-26 00:00
---

# VSCode で SSH 接続する

## 拡張機能をインストール

Remote - SSH
[https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)

## SSH 接続先を追加

左下のアイコンをクリックし、`Open Configuration file...`をクリック
![image1](./ssh-connection-with-vscode-1.png)

config ファイルを作成されるので、下記の内容を記述する。

```
Host 任意の接続名
HostName ホスト名
User ユーザー名
Port ポート番号
IdentityFile 鍵の場所(例: ~/.ssh/test.key)
```

## SSH で接続する

1. 左下のアイコンをクリック
2. `Connect to Host...`をクリック
   ![image2](./ssh-connection-with-vscode-2.png)

3. 接続先の接続名を選択
   ![image3](./ssh-connection-with-vscode-3.png)

### ターミナルから操作する

`Ctrl + @`で SSH 接続先のターミナルが表示される。
![image4](./ssh-connection-with-vscode-4.png)

### エクスプローラに接続先のディレクトリを表示する

`フォルダーを開く`をクリック
![image5](./ssh-connection-with-vscode-5.png)

ルートにするディレクトリを選択して`OK`をクリック
![image6](./ssh-connection-with-vscode-6.png)

SSH 接続先のディレクトリがエクスプローラに表示される。
![image7](./ssh-connection-with-vscode-7.png)

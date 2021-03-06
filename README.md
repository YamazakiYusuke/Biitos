# README
## 音楽マッチングアプリ Biitos
![Biitos-top](https://user-images.githubusercontent.com/65487142/97261141-94aa1180-1861-11eb-9318-a331c43133fb.png)
### リンク
https://biitos.com/
### 概要
Biitosはあなたの声に必要な曲、曲に必要な声を探せるアプリです。
投稿からお気に入りの音源を探してユーザーをフォロー。マッチ後曲を渡しあうことができます。
### コンセプト
気に入った作曲者、ボーカリスト、ラッパーなどと素早く音楽製作を始められる。
### ログイン用ユーザー
DM(ダイレクトメール)機能を確認する際にお使いください。
ヘッダーのユーザー名からDM(ダイレクトメール)一覧に飛びます。
- email: number4@tuner.com pass: password
- email: number0@voicer.com pass: password
### 使用技術
- Ruby 2.6.5
- Ruby on Rails 5.2.4
- jQuery
- Bootstrap4
- PostgreSQL
- AWS(VPC, RDS, ES2, S3, ALB, Route53, ACM)
- Docker/docker-compose
### 機能一覧
- 音楽投稿機能
- 音楽再生
- 投稿一覧
- 投稿検索
- ログイン機能
- フォロー機能
- ユーザー詳細
- お気に入り機能(Ajax)
- 通知機能
- DM機能
- 音楽ダウンロード機能
- コメント機能
- グループチャット
- タグ機能
  投稿にタグ付けが可能
- ジャンル機能
### システム構成
![システム構成](https://user-images.githubusercontent.com/65487142/97112337-13e6fa80-1727-11eb-8490-6afd2d994770.jpg)
### 制作背景
現在音楽シーンにおいてSNSは切っても切り離せないツールです。音楽製作においてもそれは同じであり、
SoundCloud, Instagram, Twitterなどからアーティストやプロデューサーを知り、直接連絡を取って音楽を製作することもあります。
しかし、音楽ファイルのやり取りについてはメールや別のクラウドストレージを使うなどしてアプリを複数使ってのやり取りとなります。
この煩雑さを解消し、その場で見つけたミュージシャン同士のコミュニケーションをスムーズに行えるアプリを作りたいと考えました。
### このアプリで解決できること
投稿された音楽から、気に入ったユーザーをフォローし、相手のユーザーもフォローした状態(マッチングが成立した場合)でDMにて音楽を渡す(ダウンロード)ことができる。
従来のSNSのように様々なミュージシャンの作品を閲覧でき、マッチングした相手とアプリ内で素早く曲を渡しあえることができる。
### こだわりポイント
ダイレクトメッセージの画面で音楽の共有のためにS3に保存した音楽ファイルをダウンロードできる機能を付けています。
他のクラウドストレージサービスを使うことなく音楽の共有ができます。
### ER図
![20201011ER図](https://user-images.githubusercontent.com/65487142/98086594-585e5d00-1ec2-11eb-9f3e-c05834ebd955.png)
### 使用Gem
- carrierwave
- mini_magick
- devise
- ransack
- audiojs-rails
- carrierwave-audio
- slim-rails
- font-awesome-sass
### カタログ設計
https://docs.google.com/spreadsheets/d/16wwKR8sxm-Q8o30x6buVFDllLR5vcxwePHugEuG_kWQ/edit?usp=sharing
### テーブル定義
https://docs.google.com/spreadsheets/d/1Dt5IyWLdRef8ePar9VVMylWH2-7twJJG2WjFJ9Gy780/edit?usp=sharing
### 画面遷移図
https://docs.google.com/spreadsheets/d/10jI90SKZRfCtVRQqNBoIjIcfjp_pAgeD56lA4QoShzM/edit?usp=sharing
### ワイヤーフレーム
https://docs.google.com/spreadsheets/d/1gpwRvZRek0DiApa-pT1f58Lk7cLqKueKPlFY5robQmM/edit?usp=sharing
### Dependency
- SoX
- Bash (for process substitution combiner strategy)
- Chromaprint (only to run tests)
#### Ubuntu / Debian
`apt-get install libsox-fmt-all sox libchromaprint-dev`
#### Mac
※macの場合パッケージ管理ツールであるportsが必要です。下記リンクからご自身の環境に合ったバージョンをインストールしてください。

https://github.com/macports/macports-base/releases/tag/v2.6.3
```
# One of the following
# Notes:
# * chromaprint is not available in MacPorts as of this writing
# * flac must be installed before sox so it will link during compilation
sudo port install flac sox && brew install chromaprint
brew install flac sox chromaprint
```

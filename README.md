# Newclone_youtube

YouTubeライクな動画共有アプリです。

## 概要

動画のアップロード・一覧表示・再生機能を実装したWebアプリケーションです。


## 使用技術

### フロントエンド

- React
- TypeScript
- Vite
- CSS

### バックエンド

- AWS Lambda

### インフラ

- AWS S3
- AWS IAM

## 主な機能

- 動画アップロード
- 動画一覧表示
- 動画再生
- Presigned URL発行
- ファイル管理

## ディレクトリ構成

text . ├── src │   ├── App.tsx │   ├── Upload.tsx │   ├── indexVideo.tsx │   └── main.tsx ├── public ├── lambda │   └── getPresignedUrl.ts ├── package.json └── README.md 

## セットアップ

### リポジトリの取得

bash git clone https://github.com/gurabushu/Newclone_youtube.git cd Newclone_youtube 

### パッケージインストール

bash npm install 

### 開発サーバー起動

bash npm run dev 

### ビルド

bash npm run build 

## 工夫した点

- TypeScriptを利用し型安全性を確保
- Reactコンポーネントを責務ごとに分離
- Presigned URLを利用しサーバー負荷を抑えたアップロード方式を採用
- GitHubを利用したブランチ運用


## 今後の改善予定

- ユーザー認証機能
- コメント機能
- 動画検索機能
- サムネイル生成機能
- レスポンシブ対応強化
- CloudFrontによる配信最適化

## 開発者

- GitHub: https://github.com/gurabushu
- Author: Atsuki Okiyama
```
:::



- 開発背景
- ER図
- 画面キャプチャ
- システム構成図
- 苦労した点と解決方法


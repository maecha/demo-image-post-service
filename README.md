これは、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)を使って立ち上げた[Next.js](https://nextjs.org/)プロジェクトです。

## はじめに

このプロジェクトは「[Next.js 14 アプリ開発のあらすじ](https://zenn.dev/nino/books/30e21d37af73b5)」を参考にして作られた、Next.js の素振り用アプリです。

デモページ[こちら](https://demo-image-post-service.vercel.app/)。

### 主な技術スタック

- [Vercel](https://vercel.com)
  - ホスティング、DB（PostgreSQL）として利用
- [Cloudflare R2](https://www.cloudflare.com/ja-jp/developer-platform/r2/)
  - 画像サーバーとして利用
- [Clerk](https://clerk.dev)
  - ユーザーの認証サービスとして利用
- [shadcn-ui/ui](https://ui.shadcn.com)
  - コンポーネントライブラリとして利用
- [Tailwind CSS](https://tailwindcss.com)
  - CSS フレームワークとして利用

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

## その他

素振りはまだまだ続く。

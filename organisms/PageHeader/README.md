# PageHeader

アプリのページ上部ヘッダー。ブランド名・ナビゲーション・右端アクションを横並びに配置する。

## 使用元プロジェクト

- （未使用）

## 依存

- なし（React のみ）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `brand` | `string` | 必須 | ブランド名テキスト |
| `brandHref` | `string` | `'/'` | ブランドリンク先URL |
| `nav` | `Array<{ label: string; href: string; active?: boolean }>` | `undefined` | ナビゲーションリンクの配列 |
| `actions` | `React.ReactNode` | `undefined` | 右端に配置するUI（UserMenuなど） |

## 移植時の注意

- `<a>` タグは Next.js の `Link` ではなく通常のタグを使用している。Next.js で使う場合は `<Link>` に差し替えること。
- Next.js で使う場合はファイル先頭に `'use client'` を追加すること（インタラクションがないため Server Component のままでも動作する）。
- ヘッダー高さは CSS で `60px` に固定している。変更する場合は `.inner` の `height` を調整すること。
- モバイル対応（ハンバーガーメニュー等）は実装していない。必要な場合は `HamburgerButton` atom と組み合わせて拡張すること。

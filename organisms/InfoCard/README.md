# InfoCard

ダッシュボードのカード1枚分。ラベル・値・補足テキスト・アイコンを表示する情報表示カード。

## 使用元プロジェクト

- （未使用）

## 依存

- なし（React のみ）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | 必須 | カード上部のラベル |
| `value` | `React.ReactNode` | 必須 | メインの値。文字列・数値・カスタムJSX可 |
| `description` | `string` | `undefined` | 補足テキスト |
| `icon` | `React.ReactNode` | `undefined` | 右上に配置するSVGアイコン等 |
| `variant` | `'default' \| 'accent'` | `'default'` | accent は背景を --color-accent にしてテキストを白に |
| `fullWidth` | `boolean` | `false` | `width: 100%` にする。グリッドで横断させる場合に使用 |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加すること（インタラクションがないため Server Component のままでも動作する）。
- `accent` バリアント時のラベル・description の文字色に `rgba(255, 255, 255, 0.75)` を使用している。デザインシステムに該当トークンが存在しないため直接指定しており、コメントで理由を明示している。
- グリッドで並べる場合は親側で `display: grid; grid-template-columns: repeat(3, 1fr)` 等を指定すること。

# Spinner

読み込みインジケーター Atom。3サイズ・3カラーに対応し、`prefers-reduced-motion` でアニメーションを停止する。

## 使用元プロジェクト

- なし（新規追加）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | サイズ（sm=16px / md=24px / lg=32px） |
| `color` | `'current' \| 'accent' \| 'white'` | `'current'` | スピナーの色（current=親要素の color を継承） |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `color="current"` は親要素の `color` プロパティを継承するため、テキストと同色のスピナーが必要な場面で便利
- ボタン内に組み込む場合は `size="sm"` が推奨
- `prefers-reduced-motion: reduce` 時はアニメーションが停止し、不透明度が下がる
- スクリーンリーダーには `role="status"` と `aria-label="読み込み中"` で「読み込み中」と通知する

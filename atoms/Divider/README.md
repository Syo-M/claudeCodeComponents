# Divider

区切り線 Atom。水平・垂直、ラベルあり・なしの4パターンに対応する。

## 使用元プロジェクト

- なし（新規追加）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 区切り線の向き |
| `label` | `string` | — | 中央に表示するテキスト（`horizontal` のみ有効） |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `orientation="vertical"` を使う場合、親要素を `display: flex` にして `align-items: stretch` または `align-self: stretch` が機能するようにする
- `label` は `horizontal` のみ有効。`vertical` に `label` を渡しても表示されない
- ラベルなし `horizontal` は `<hr>` 要素を使用しているため、ブラウザのデフォルトスタイルをリセット済み（`border-top: 1px solid var(--color-border)` のみ）
- `role="separator"` と `aria-orientation` により支援技術で正しく識別される

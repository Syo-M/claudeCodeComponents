# EmptyState

データが0件のときに表示する空状態UI。アイコン・タイトル・説明文・CTAを縦並びで表示する。

## 使用元プロジェクト
- なし（新規追加）

## 依存
- なし（React のみ）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `icon` | `React.ReactNode` | デフォルトアイコン（書類SVG） | 表示するアイコン。SVGやemojiを渡す |
| `title` | `string` | — | タイトル（必須） |
| `description` | `string` | — | 説明文 |
| `action` | `React.ReactNode` | — | CTAエリア（ボタン等） |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | コンポーネントのサイズ感。paddingやアイコンサイズに影響 |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- CSS変数（`--color-muted`、`--color-text` 等）がプロジェクト側で定義されている必要がある
- `action` には外部からボタン等を渡す形式のため、スタイルは呼び出し側で制御する

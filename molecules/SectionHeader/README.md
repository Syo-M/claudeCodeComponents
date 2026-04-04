# SectionHeader

セクションタイトル・サブタイトル・右側アクションボタン領域を組み合わせたヘッダーコンポーネント。

## 使用元プロジェクト
- なし（新規追加）

## 依存
- なし（React のみ）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `title` | `string` | — | タイトル（必須） |
| `subtitle` | `string` | — | サブタイトル。タイトルの下に小さく表示 |
| `action` | `React.ReactNode` | — | 右側に配置するアクション領域（ボタン等） |
| `level` | `1 \| 2 \| 3 \| 4` | `2` | 見出しタグのレベル（h1〜h4）。font-size も連動して変化 |
| `divider` | `boolean` | `false` | `true` にすると下部に `border-bottom` を表示 |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- CSS変数（`--color-text`、`--color-border` 等）がプロジェクト側で定義されている必要がある
- `action` に渡すボタン等のスタイルは呼び出し側で制御する

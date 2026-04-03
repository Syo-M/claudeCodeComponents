# ChipGroup

ラベル付きの選択可能チップグループ Molecule。`atoms/Chip` を内包。

## 使用元

- `organisms/FavoritesBar` のベース構造
- ZITPromptMaker の CategorySection に相当

## Props

| Prop | 型 | 説明 |
|---|---|---|
| `label` | `string` | グループのラベル（大文字・小文字変換あり） |
| `options` | `ChipOption[]` | 選択肢一覧 `{ id: number, label: string }` |
| `selectedIds` | `number[]` | 選択中の ID 一覧 |
| `onToggle` | `(id: number) => void` | チップのトグルコールバック |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `atoms/Chip` への相対パスに注意

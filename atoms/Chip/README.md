# Chip

チップ Atom。3つのバリアントを持つ。

| バリアント | 用途 |
|---|---|
| `selectable` | 選択トグル。`aria-pressed` 対応 |
| `deletable` | 名前表示＋×削除ボタン |
| `static` | 表示のみ（タグ・ラベルなど） |

## 使用元プロジェクト

- `organisms/FavoritesBar`
- `molecules/ChipGroup`

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する

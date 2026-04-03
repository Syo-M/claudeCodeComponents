# FavoritesBar

`Chip(deletable)` を並べたお気に入り一覧バー Organism。`hooks/useFavorites` とセットで使用する。

## 使用元プロジェクト

- `repositorys/ZITPromptMaker`

## 依存

- `atoms/Chip`
- `hooks/useFavorites`（または同等のフック）

## Props

| Prop | 型 | 説明 |
|---|---|---|
| `favorites` | `Favorite[]` | 保存済みお気に入り一覧 |
| `onRestore` | `(fav: Favorite) => void` | ラベルクリック時の復元コールバック |
| `onDelete` | `(id: string) => void` | × クリック時の削除コールバック |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `Favorite.selection` の型はプロジェクトに合わせて変更可（`Record<string, any>` として定義）

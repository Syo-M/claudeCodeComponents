# Button

汎用ボタン Atom。primary / secondary / ghost / danger の4バリアント、sm / md の2サイズ。

## 使用元プロジェクト

- 全プロジェクト共通

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | 見た目 |
| `size` | `'sm' \| 'md'` | `'md'` | サイズ（md は min-height 44px でタッチ対応） |
| `disabled` | `boolean` | `false` | 無効状態 |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML の type 属性 |
| `onClick` | `() => void` | — | クリックハンドラ |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- アイコンのみのボタンには必ず `aria-label` を指定する

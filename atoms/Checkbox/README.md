# Checkbox

カスタムデザインのチェックボックス Atom。通常・中間（indeterminate）・エラー・無効状態に対応。

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | 必須 | ラベルテキスト |
| `checked` | `boolean` | 必須 | チェック状態 |
| `onChange` | `(checked: boolean) => void` | 必須 | 変更ハンドラ |
| `disabled` | `boolean` | `false` | 無効状態 |
| `error` | `string` | — | エラーメッセージ |
| `hint` | `string` | — | ヒントテキスト |
| `indeterminate` | `boolean` | `false` | 中間状態（一部選択） |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する

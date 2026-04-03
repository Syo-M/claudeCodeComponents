# Input

テキスト入力 Atom。ラベル・エラーメッセージ・ヒントテキストを内包。

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | — | ラベル（省略するとラベル非表示） |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'search' \| 'url'` | `'text'` | input の type |
| `value` | `string` | 必須 | 入力値 |
| `onChange` | `(value: string) => void` | 必須 | 変更ハンドラ |
| `placeholder` | `string` | — | プレースホルダー |
| `disabled` | `boolean` | `false` | 無効状態 |
| `error` | `string` | — | エラーメッセージ（指定するとエラー状態） |
| `hint` | `string` | — | ヒントテキスト（errorがある場合は非表示） |
| `required` | `boolean` | `false` | 必須マーク表示 + aria |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `id` を省略するとラベルから自動生成される（日本語を含む場合は明示的に指定を推奨）

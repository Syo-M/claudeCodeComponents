# RadioGroup

ラジオボタングループ Atom。`fieldset` + `legend` で意味的に正しくグルーピング。

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `name` | `string` | 必須 | input の name 属性（グループ識別子） |
| `options` | `RadioOption[]` | 必須 | 選択肢一覧 |
| `value` | `string` | 必須 | 現在の選択値 |
| `onChange` | `(value: string) => void` | 必須 | 変更ハンドラ |
| `legend` | `string` | — | グループのラベル |
| `error` | `string` | — | エラーメッセージ |
| `inline` | `boolean` | `false` | 横並び表示 |

### RadioOption 型

```ts
{ value: string; label: string; hint?: string; disabled?: boolean }
```

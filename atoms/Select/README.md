# Select

セレクトボックス Atom。`optgroup` によるグループ化、プレースホルダー、エラー、ヒントに対応。

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `options` | `(SelectOption \| SelectGroup)[]` | 必須 | 選択肢（グループ化可） |
| `value` | `string` | 必須 | 選択中の値 |
| `onChange` | `(value: string) => void` | 必須 | 変更ハンドラ |
| `label` | `string` | — | ラベル |
| `placeholder` | `string` | — | 未選択時に表示するテキスト |
| `required` | `boolean` | `false` | 必須 |
| `disabled` | `boolean` | `false` | 無効状態 |
| `error` | `string` | — | エラーメッセージ |
| `hint` | `string` | — | ヒントテキスト |

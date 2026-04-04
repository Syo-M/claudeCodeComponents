# FormField

label + 任意の入力要素 + error + hint を縦に並べるラッパーコンポーネント。

## 使用元プロジェクト
- なし（新規追加）

## 依存
- なし（React のみ）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | （必須） | フィールドのラベルテキスト |
| `htmlFor` | `string` | `undefined` | label の `for` 属性。内包する入力要素の `id` と合わせる |
| `error` | `string` | `undefined` | エラーメッセージ。指定するとヒントは非表示になる |
| `hint` | `string` | `undefined` | ヒントテキスト。エラーがある場合は非表示 |
| `required` | `boolean` | `false` | `true` の場合、ラベル横に `*` を表示する |
| `children` | `ReactNode` | （必須） | Input・Select・Checkbox など任意のフォーム要素 |

## 使い方

```tsx
<FormField label="メールアドレス" htmlFor="email" required error="正しい形式で入力してください">
  <input id="email" type="email" />
</FormField>
```

## 移植時の注意
- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `error` と `hint` は排他。エラーがある場合は hint は表示されない
- エラーテキストには `role="alert"` が付与されており、スクリーンリーダーで読み上げられる
- 必須マークの `*` は `aria-hidden="true"` のため、スクリーンリーダーには読まれない。別途 `required` 属性を入力要素に付与すること

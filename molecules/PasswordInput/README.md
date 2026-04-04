# PasswordInput

パスワードの表示/非表示トグル付き入力欄コンポーネント。

## 使用元プロジェクト
- なし（新規追加）

## 依存
- なし（React のみ）

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `value` | `string` | （必須） | 入力値 |
| `onChange` | `(value: string) => void` | （必須） | 値変更ハンドラ |
| `label` | `string` | `undefined` | ラベルテキスト |
| `id` | `string` | `undefined` | input 要素の id |
| `placeholder` | `string` | `undefined` | プレースホルダー |
| `disabled` | `boolean` | `false` | 無効状態 |
| `error` | `string` | `undefined` | エラーメッセージ |
| `required` | `boolean` | `false` | 必須マーク表示 |
| `autoComplete` | `string` | `'current-password'` | オートコンプリート属性 |

## 使い方

```tsx
const [password, setPassword] = useState('')

<PasswordInput
  label="パスワード"
  id="password"
  value={password}
  onChange={setPassword}
  placeholder="8文字以上"
  required
  autoComplete="new-password"
/>
```

## 移植時の注意
- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `useState` を内包しているためクライアントコンポーネントとして使う必要がある
- トグルボタンのアイコンは自前の SVG で実装しており、外部ライブラリ不要
- 新規登録フォームで使う場合は `autoComplete="new-password"` を指定することを推奨
- エラーテキストには `role="alert"` が付与されており、スクリーンリーダーで読み上げられる

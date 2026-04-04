# AuthCard

認証ページ（ログイン・新規登録・メール確認など）で使うカードレイアウト。

## 使用元プロジェクト

- `repositorys/clerk-auth-demo`

## 依存

- なし（React のみ）

## Props

| Prop | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | `string` | ✓ | カードのタイトル |
| `brand` | `string` | — | カード上部に表示するブランド名 |
| `subtitle` | `ReactNode` | — | タイトル下のサブテキスト |
| `totalSteps` | `number` | — | ステップ数（2以上でインジケーターを表示） |
| `currentStep` | `number` | — | 現在のステップ（1始まり、デフォルト: 1） |
| `children` | `ReactNode` | ✓ | フォームや操作UIなどのコンテンツ |

## 使用例

```tsx
import { AuthCard } from '@/components/molecules/AuthCard/AuthCard'

// ログインページ
<AuthCard brand="My App" title="ログイン" subtitle="アカウントにサインインしてください">
  <form>...</form>
</AuthCard>

// 2ステップ新規登録（ステップ1）
<AuthCard
  brand="My App"
  title="新規登録"
  subtitle="メールアドレスとパスワードを設定してください"
  totalSteps={2}
  currentStep={1}
>
  <form>...</form>
</AuthCard>
```

## 移植時の注意

- デザイントークン（CSS変数）が定義された CSS を読み込んでいること
- `children` にフォームや操作UIをそのまま渡せる。ボタン・入力欄のスタイルは呼び出し側で定義する（`AuthLayout.module.css` のクラスを参照）

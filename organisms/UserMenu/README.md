# UserMenu

ヘッダーに配置するドロップダウンユーザーメニュー。

## 使用元プロジェクト

- `repositorys/clerk-auth-demo`

## 依存

- なし（React のみ）

## Props

| Prop | 型 | 必須 | 説明 |
|---|---|---|---|
| `displayName` | `string` | ✓ | 表示名 |
| `email` | `string` | ✓ | メールアドレス |
| `avatarUrl` | `string` | — | アバター画像URL。未指定時は表示名の頭文字を表示 |
| `onSignOut` | `() => void` | ✓ | サインアウト処理 |
| `onOpenSettings` | `() => void` | — | アカウント設定を開く処理。未指定時はメニュー項目を非表示 |

## 使用例

```tsx
'use client'

import { UserMenu } from '@/components/organisms/UserMenu/UserMenu'

<UserMenu
  displayName="山田 太郎"
  email="taro@example.com"
  avatarUrl={user.imageUrl}
  onSignOut={() => { signOut(); router.push('/sign-in') }}
  onOpenSettings={() => openUserProfile()}
/>
```

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `<img>` タグを使用しているため、Next.js では `<Image>` に差し替えると最適化される
- ドロップダウンは `position: absolute` のため、親要素に `position: relative` が必要（内部で `.wrapper` が持っている）
- デザイントークン（CSS変数）が定義された CSS を読み込んでいること

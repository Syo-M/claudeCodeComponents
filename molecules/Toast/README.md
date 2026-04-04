# Toast

通知トーストコンポーネント + 管理フック `useToast` のセット。

## 使用元プロジェクト
- なし（新規追加）

## 依存
- なし（React のみ）

## Props / API

### `Toast` コンポーネント

| Prop | 型 | 必須 | デフォルト | 説明 |
|---|---|---|---|---|
| `id` | `string` | ✓ | — | Toast の識別子 |
| `message` | `string` | ✓ | — | 表示するメッセージ |
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | — | `'info'` | 見た目のバリアント |
| `onClose` | `(id: string) => void` | ✓ | — | 閉じる処理 |
| `duration` | `number` | — | `4000` | 自動閉じまでのミリ秒。`0` で無効 |

### `ToastContainer` コンポーネント

| Prop | 型 | 必須 | 説明 |
|---|---|---|---|
| `toasts` | `ToastItem[]` | ✓ | 表示する Toast の配列 |
| `onClose` | `(id: string) => void` | ✓ | 閉じる処理 |

### `useToast` フック

```ts
const { toasts, show, close } = useToast()

// 通知を追加
show(message: string, variant?: ToastVariant, duration?: number)

// 通知を削除
close(id: string)
```

### `ToastItem` 型

```ts
type ToastItem = {
  id: string
  message: string
  variant?: ToastVariant
  duration?: number
}
```

## 移植時の注意

- `ToastContainer` は `position: fixed` で画面右下（bottom: 24px / right: 24px）に固定表示されます。スタッキングコンテキストに注意してください。
- Next.js で使う場合は `'use client'` ディレクティブを先頭に追加してください。
- `useToast` フックは `Toast.tsx` 内にエクスポートされています。別ファイルへの分離が必要な場合は移動してください。
- フェードイン/フェードアウトアニメーションは `prefers-reduced-motion` でオフになります。

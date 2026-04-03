# HamburgerButton

ドロワーメニュー用の3本線ボタン Atom。`isOpen` に応じて 3本線 ↔ × にアニメーション切り替え。

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `isOpen` | `boolean` | 必須 | 開閉状態 |
| `onClick` | `() => void` | 必須 | クリックハンドラ |
| `size` | `number` | `44` | ボタンの幅・高さ（px） |
| `label` | `string` | 自動生成 | aria-label（未指定時は開閉状態に応じて自動設定） |

## 使用例

```tsx
const [isOpen, setIsOpen] = useState(false)

<HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(o => !o)} />
```

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- `prefers-reduced-motion` 対応済み（アニメーション無効化）

# useDisclosure

Modal・Drawer・Dropdown・Dialog などの開閉状態を管理するカスタムフック。

## 使用元プロジェクト
- なし（新規追加）

## シグネチャ

```ts
function useDisclosure(initialState?: boolean): {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}
```

## 引数

| 引数 | 型 | デフォルト | 説明 |
|---|---|---|---|
| initialState | `boolean` | `false` | 初期の開閉状態 |

## 戻り値

| プロパティ | 型 | 説明 |
|---|---|---|
| isOpen | `boolean` | 現在の開閉状態 |
| open | `() => void` | `isOpen` を `true` にする |
| close | `() => void` | `isOpen` を `false` にする |
| toggle | `() => void` | `isOpen` を反転させる |

## 使用例

```tsx
import { useDisclosure } from '@/hooks/useDisclosure/useDisclosure'

function ModalExample() {
  const { isOpen, open, close } = useDisclosure()

  return (
    <>
      <button onClick={open}>モーダルを開く</button>
      {isOpen && (
        <dialog open>
          <p>モーダルの内容</p>
          <button onClick={close}>閉じる</button>
        </dialog>
      )}
    </>
  )
}
```

## 移植時の注意
- どのフレームワークでも動作する（React 必須）
- `open` / `close` / `toggle` はすべて `useCallback` で安定化済みのため、依存配列に含めても問題ない

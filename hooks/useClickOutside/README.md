# useClickOutside

指定した要素の外側がクリックされたときにコールバックを呼ぶカスタムフック。

## 使用元プロジェクト
- なし（新規追加）

## シグネチャ

```ts
function useClickOutside<T extends HTMLElement>(
  callback: () => void
): React.RefObject<T>
```

## 引数

| 引数 | 型 | デフォルト | 説明 |
|---|---|---|---|
| callback | `() => void` | — | 対象要素の外側がクリックされたときに呼ばれる関数 |

## 戻り値

| プロパティ | 型 | 説明 |
|---|---|---|
| ref | `React.RefObject<T>` | 監視対象の要素に付与する ref |

## 使用例

```tsx
import { useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside/useClickOutside'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>開く</button>
      {isOpen && (
        <div ref={ref}>
          <p>外側をクリックすると閉じます</p>
        </div>
      )}
    </div>
  )
}
```

## 移植時の注意
- どのフレームワークでも動作する（React 必須）
- `mousedown` イベントを使用。`click` に変更したい場合はソースを修正すること
- callback は `useRef` で安定化しているため、変更のたびにリスナーが再登録されることはない

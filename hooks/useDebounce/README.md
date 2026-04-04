# useDebounce

値が変化してから指定した遅延時間が経過した後に更新される値を返すカスタムフック。

## 使用元プロジェクト
- なし（新規追加）

## シグネチャ

```ts
function useDebounce<T>(value: T, delay?: number): T
```

## 引数

| 引数 | 型 | デフォルト | 説明 |
|---|---|---|---|
| value | `T` | — | デバウンス対象の値 |
| delay | `number` | `300` | 遅延時間（ミリ秒） |

## 戻り値

| プロパティ | 型 | 説明 |
|---|---|---|
| （戻り値） | `T` | `value` が変化してから `delay` ms 後に更新される値 |

## 使用例

```tsx
import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce/useDebounce'

function SearchInput() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery) {
      // 300ms 入力が止まってから API コールを実行
      fetchSearchResults(debouncedQuery)
    }
  }, [debouncedQuery])

  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="検索..."
    />
  )
}
```

## 移植時の注意
- どのフレームワークでも動作する（React 必須）
- ジェネリクス `T` により文字列以外（数値・オブジェクトなど）にも対応
- `delay` が変わった場合もタイマーが正しくリセットされる

// Next.js / Vite / Astro どの環境でも使用可能

import { useState, useEffect } from 'react'

/**
 * 値が変化してから指定した遅延時間が経過した後に更新される値を返すカスタムフック。
 * 入力フォームの検索・バリデーションなど、頻繁に変化する値の処理に使用する。
 *
 * @template T - デバウンスする値の型
 * @param value - デバウンス対象の値
 * @param delay - 遅延時間（ミリ秒）。デフォルト: `300`
 * @returns 遅延後に更新されるデバウンス値
 *
 * @example
 * ```tsx
 * const [query, setQuery] = useState('')
 * const debouncedQuery = useDebounce(query, 300)
 *
 * useEffect(() => {
 *   // debouncedQuery が確定してから API コールを行う
 *   fetchResults(debouncedQuery)
 * }, [debouncedQuery])
 * ```
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // delay ms 後にデバウンス値を更新するタイマーを設定
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // value または delay が変わった場合は前のタイマーをキャンセル
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

// Next.js / Vite / Astro どの環境でも使用可能

import { useState, useEffect, useCallback } from 'react'

/**
 * ローカルストレージと同期した状態管理フック。
 * useState と同じ API でローカルストレージを永続化できる。
 * タブ間の同期（storage イベント）にも対応。
 *
 * @template T - 保存する値の型
 * @param key - ローカルストレージのキー
 * @param initialValue - 初期値（ローカルストレージにデータがない場合に使用）
 * @returns [value, setValue, removeValue] - 値・セッター・削除関数のタプル
 *
 * @example
 * ```tsx
 * const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light')
 * setTheme('dark')
 * removeTheme() // キーを削除してデフォルト値に戻す
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStoredValue(prev => {
          const nextValue =
            typeof value === 'function'
              ? (value as (prev: T) => T)(prev)
              : value
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(nextValue))
          }
          return nextValue
        })
      } catch (e) {
        console.warn(`useLocalStorage: キー "${key}" への書き込みに失敗しました`, e)
      }
    },
    [key]
  )

  const removeValue = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
      setStoredValue(initialValue)
    } catch (e) {
      console.warn(`useLocalStorage: キー "${key}" の削除に失敗しました`, e)
    }
  }, [key, initialValue])

  // タブ間同期
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key) {
        try {
          setStoredValue(
            e.newValue !== null ? (JSON.parse(e.newValue) as T) : initialValue
          )
        } catch {
          setStoredValue(initialValue)
        }
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}

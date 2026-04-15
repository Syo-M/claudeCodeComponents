// Next.js / Vite / Astro どの環境でも使用可能

import { useEffect, useCallback } from 'react'
import { useLocalStorage } from '../useLocalStorage/useLocalStorage'

export type Theme = 'light' | 'dark' | 'system'

/**
 * テーマ（ライト/ダーク/システム）を管理するカスタムフック。
 * localStorage にテーマを保存し、html 要素の data-theme 属性を更新する。
 * CSS で `[data-theme="dark"] { ... }` のように使用できる。
 *
 * @param defaultTheme - デフォルトテーマ（デフォルト: 'system'）
 * @returns { theme, resolvedTheme, setTheme, toggleTheme }
 *
 * @example
 * ```tsx
 * const { resolvedTheme, toggleTheme } = useTheme()
 * return (
 *   <button onClick={toggleTheme}>
 *     {resolvedTheme === 'dark' ? '🌙 ダーク' : '☀️ ライト'}
 *   </button>
 * )
 * ```
 */
export function useTheme(defaultTheme: Theme = 'system') {
  const [theme, setThemeStorage] = useLocalStorage<Theme>('theme', defaultTheme)

  const getSystemDark = () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false

  const resolvedTheme: 'light' | 'dark' =
    theme === 'system' ? (getSystemDark() ? 'dark' : 'light') : theme

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)
  }, [resolvedTheme])

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeStorage(t)
    },
    [setThemeStorage]
  )

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  return { theme, resolvedTheme, setTheme, toggleTheme }
}

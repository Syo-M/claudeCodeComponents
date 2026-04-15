// Next.js / Vite / Astro どの環境でも使用可能

import { useState, useEffect } from 'react'

/**
 * メディアクエリの結果を返すカスタムフック。
 * SSR 対応（サーバーサイドでは false を返す）。
 *
 * @param query - メディアクエリ文字列（例: '(max-width: 768px)'）
 * @returns メディアクエリが一致している場合 true
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const isTablet = useMediaQuery('(max-width: 1024px)')
 * const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
 *
 * // プリセット定数を使う場合
 * import { useMediaQuery, BREAKPOINTS } from './useMediaQuery'
 * const isMobile = useMediaQuery(BREAKPOINTS.sm)
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

/** よく使うメディアクエリのプリセット定数 */
export const BREAKPOINTS = {
  /** スマートフォン（max-width: 639px） */
  sm: '(max-width: 639px)',
  /** タブレット縦（max-width: 767px） */
  md: '(max-width: 767px)',
  /** タブレット横（max-width: 1023px） */
  lg: '(max-width: 1023px)',
  /** デスクトップ（max-width: 1279px） */
  xl: '(max-width: 1279px)',
  /** ダークモード設定 */
  dark: '(prefers-color-scheme: dark)',
  /** アニメーション軽減設定 */
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const

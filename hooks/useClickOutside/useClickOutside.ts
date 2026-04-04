// Next.js / Vite / Astro どの環境でも使用可能

import { useEffect, useRef, useCallback } from 'react'

/**
 * 指定した要素の外側がクリックされたときにコールバックを呼ぶカスタムフック。
 *
 * @template T - ref を付与する HTML 要素の型
 * @param callback - 外側クリック時に呼ばれる関数
 * @returns ref - 監視対象の要素に付与する React ref
 *
 * @example
 * ```tsx
 * const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))
 * return <div ref={ref}>...</div>
 * ```
 */
export function useClickOutside<T extends HTMLElement>(
  callback: () => void
): React.RefObject<T> {
  const ref = useRef<T>(null)

  // callback が変わっても再登録しないよう、最新の callback を ref に保持する
  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const handleMouseDown = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callbackRef.current()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [handleMouseDown])

  return ref
}

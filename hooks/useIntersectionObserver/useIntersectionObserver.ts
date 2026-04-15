// Next.js / Vite / Astro どの環境でも使用可能

import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

type Options = {
  /** 交差判定のしきい値 0〜1（デフォルト: 0） */
  threshold?: number | number[]
  /** ルートの余白（デフォルト: '0px'） */
  rootMargin?: string
  /** 交差した後は監視を停止するか（デフォルト: false） */
  once?: boolean
}

/**
 * Intersection Observer API を使って要素の画面内への出現を検知するフック。
 * 遅延ロード・無限スクロール・スクロールアニメーションのトリガーに使用できる。
 *
 * @template T - 対象要素の型（デフォルト: HTMLDivElement）
 * @param options - Intersection Observer のオプション
 * @returns [ref, isIntersecting, entry] - ref・交差状態・エントリーのタプル
 *
 * @example
 * ```tsx
 * // 要素が画面に入ったらフェードイン
 * const [ref, isVisible] = useIntersectionObserver({ once: true, threshold: 0.1 })
 * return (
 *   <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
 *     コンテンツ
 *   </div>
 * )
 *
 * // 無限スクロール（リストの末尾を監視）
 * const [bottomRef, isBottomVisible] = useIntersectionObserver()
 * useEffect(() => { if (isBottomVisible) loadMore() }, [isBottomVisible])
 * return <div ref={bottomRef} />
 * ```
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: Options = {}
): [RefObject<T>, boolean, IntersectionObserverEntry | null] {
  const { threshold = 0, rootMargin = '0px', once = false } = options
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([e]) => {
        setIsIntersecting(e.isIntersecting)
        setEntry(e)
        if (e.isIntersecting && once) {
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isIntersecting, entry]
}

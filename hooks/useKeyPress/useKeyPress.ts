// Next.js / Vite / Astro どの環境でも使用可能

import { useEffect, useCallback, useRef } from 'react'

type Options = {
  /** 対象要素（省略時は document） */
  target?: React.RefObject<HTMLElement | null>
  /** イベントフェーズ（デフォルト: 'keydown'） */
  event?: 'keydown' | 'keyup'
  /** true のとき callback を実行しない */
  disabled?: boolean
}

/**
 * キーボードショートカットを検出するカスタムフック。
 * 日本語 IME 対応: isComposing 中は callback を実行しない。
 *
 * @param keys - 対象キー（例: 'Escape', 'ArrowUp', ['a', 'A']）
 * @param callback - キーが押された時に呼ばれる関数
 * @param options - オプション設定
 *
 * @example
 * ```tsx
 * // ESC キーでモーダルを閉じる
 * useKeyPress('Escape', () => setOpen(false))
 *
 * // 左右矢印キーでスライド切替
 * useKeyPress(['ArrowLeft', 'ArrowRight'], (e) => {
 *   if (e.key === 'ArrowLeft') prev()
 *   if (e.key === 'ArrowRight') next()
 * })
 *
 * // 特定の要素内のみで発火
 * const containerRef = useRef<HTMLDivElement>(null)
 * useKeyPress('Enter', handleSelect, { target: containerRef })
 * ```
 */
export function useKeyPress(
  keys: string | string[],
  callback: (e: KeyboardEvent) => void,
  options: Options = {}
): void {
  const { target, event = 'keydown', disabled = false } = options
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (disabled) return
      // IME 変換中は発火しない（日本語入力対応）
      if (e.isComposing) return
      const keyList = Array.isArray(keys) ? keys : [keys]
      if (keyList.includes(e.key)) {
        callbackRef.current(e)
      }
    },
    [keys, disabled]
  )

  useEffect(() => {
    const el: EventTarget = target?.current ?? document
    el.addEventListener(event, handler as EventListener)
    return () => el.removeEventListener(event, handler as EventListener)
  }, [target, event, handler])
}

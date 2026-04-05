import { useRef, useCallback } from 'react'

type Direction = 'left' | 'right' | 'up' | 'down'

type Options = {
  /** スワイプと認識する最小移動距離（px）。デフォルト: 30 */
  threshold?: number
  /** 水平のみ / 垂直のみ に絞る場合に指定 */
  axis?: 'horizontal' | 'vertical' | 'both'
  /** スワイプ検知時のコールバック */
  onSwipe: (direction: Direction) => void
}

type Return = {
  /** タッチ開始ハンドラ (onTouchStart) */
  handleTouchStart: (e: React.TouchEvent) => void
  /** タッチ終了ハンドラ (onTouchEnd) */
  handleTouchEnd: (e: React.TouchEvent) => void
  /** マウス押下ハンドラ (onMouseDown) */
  handleMouseDown: (e: React.MouseEvent) => void
  /** マウス離したハンドラ (onMouseUp) */
  handleMouseUp: (e: React.MouseEvent) => void
  /** マウスが要素外に出たハンドラ (onMouseLeave) */
  handleMouseLeave: () => void
}

/**
 * useSwipe – タッチ（スマホスワイプ）とマウスドラッグを統一して検知するカスタムフック。
 * スライダー・カルーセル・天気ウィジェットなどで使う。
 *
 * @example
 * ```tsx
 * const { handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp, handleMouseLeave } =
 *   useSwipe({ onSwipe: (dir) => dir === 'left' ? goNext() : goPrev() })
 *
 * <div
 *   onTouchStart={handleTouchStart}
 *   onTouchEnd={handleTouchEnd}
 *   onMouseDown={handleMouseDown}
 *   onMouseUp={handleMouseUp}
 *   onMouseLeave={handleMouseLeave}
 * >
 *   ...
 * </div>
 * ```
 */
export function useSwipe({ threshold = 30, axis = 'horizontal', onSwipe }: Options): Return {
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const mouseStartX = useRef(0)
  const mouseStartY = useRef(0)
  const isDragging  = useRef(false)

  const detect = useCallback((dx: number, dy: number) => {
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    if (axis === 'horizontal' || (axis === 'both' && absDx >= absDy)) {
      if (absDx >= threshold) {
        onSwipe(dx < 0 ? 'left' : 'right')
      }
    } else if (axis === 'vertical' || (axis === 'both' && absDy > absDx)) {
      if (absDy >= threshold) {
        onSwipe(dy < 0 ? 'up' : 'down')
      }
    }
  }, [threshold, axis, onSwipe])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    detect(dx, dy)
  }, [detect])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    mouseStartX.current = e.clientX
    mouseStartY.current = e.clientY
  }, [])

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    isDragging.current = false
    const dx = e.clientX - mouseStartX.current
    const dy = e.clientY - mouseStartY.current
    detect(dx, dy)
  }, [detect])

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false
  }, [])

  return {
    handleTouchStart,
    handleTouchEnd,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  }
}

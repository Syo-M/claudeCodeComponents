import { useState, useCallback, useRef } from 'react'

type Options = {
  /** コピー済み状態を維持するミリ秒数。デフォルト: 2000 */
  duration?: number
}

type Return = {
  /** 現在コピー済み状態かどうか */
  copied: boolean
  /** テキストをクリップボードにコピーする関数 */
  copy: (text: string) => Promise<void>
}

/**
 * useClipboard – テキストをクリップボードにコピーし、
 * 一定時間 `copied` フラグを true にするカスタムフック。
 *
 * @example
 * ```tsx
 * const { copied, copy } = useClipboard()
 * <button onClick={() => copy('hello')}>
 *   {copied ? 'コピー済み' : 'コピー'}
 * </button>
 * ```
 */
export function useClipboard({ duration = 2000 }: Options = {}): Return {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), duration)
    } catch {
      // clipboard API が使えない環境では何もしない
    }
  }, [duration])

  return { copied, copy }
}

// Next.js / Vite / Astro どの環境でも使用可能

import { useState, useCallback } from 'react'

/** useDisclosure の戻り値の型 */
export type UseDisclosureReturn = {
  /** 現在の開閉状態 */
  isOpen: boolean
  /** 開く */
  open: () => void
  /** 閉じる */
  close: () => void
  /** 開閉を切り替える */
  toggle: () => void
}

/**
 * Modal・Drawer・Dropdown・Dialog などの開閉状態を管理するカスタムフック。
 *
 * @param initialState - 初期状態（デフォルト: `false`）
 * @returns `{ isOpen, open, close, toggle }`
 *
 * @example
 * ```tsx
 * const { isOpen, open, close, toggle } = useDisclosure()
 * return (
 *   <>
 *     <button onClick={open}>開く</button>
 *     {isOpen && <Modal onClose={close} />}
 *   </>
 * )
 * ```
 */
export function useDisclosure(initialState = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  return { isOpen, open, close, toggle }
}

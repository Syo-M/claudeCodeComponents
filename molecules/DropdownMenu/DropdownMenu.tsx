// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useRef, useEffect } from 'react'
import styles from './DropdownMenu.module.css'

type MenuItem = {
  id: string
  label: string
  icon?: React.ReactNode
  onClick: () => void
  disabled?: boolean
  variant?: 'default' | 'danger'
}

type Props = {
  /** メニューを開くトリガー要素 */
  trigger: React.ReactNode
  /** メニューアイテムの配列 */
  items: MenuItem[]
  /** メニューの水平位置（デフォルト: 'left'） */
  align?: 'left' | 'right'
  /** メニューの表示方向（デフォルト: 'bottom'） */
  placement?: 'bottom' | 'top'
}

export function DropdownMenu({
  trigger,
  items,
  align = 'left',
  placement = 'bottom',
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // クリックアウトサイドで閉じる
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // ESC キーで閉じる
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className={styles.container} ref={ref}>
      <div
        onClick={() => setIsOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      {isOpen && (
        <ul
          role="menu"
          className={[styles.menu, styles[align], styles[placement]]
            .filter(Boolean)
            .join(' ')}
        >
          {items.map((item) => (
            <li key={item.id} role="menuitem">
              <button
                className={[
                  styles.item,
                  item.variant === 'danger' ? styles.danger : '',
                  item.disabled ? styles.itemDisabled : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  item.onClick()
                  setIsOpen(false)
                }}
                disabled={item.disabled}
              >
                {item.icon && (
                  <span className={styles.icon} aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

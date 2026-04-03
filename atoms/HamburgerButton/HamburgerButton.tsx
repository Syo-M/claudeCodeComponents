// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './HamburgerButton.module.css'

type Props = {
  isOpen: boolean
  onClick: () => void
  /** ボタンのサイズ（px）デフォルト: 44 */
  size?: number
  /** aria-label（デフォルト: 開いているときは"メニューを閉じる"、閉じているときは"メニューを開く"） */
  label?: string
  className?: string
}

export function HamburgerButton({
  isOpen,
  onClick,
  size = 44,
  label,
  className,
}: Props) {
  const ariaLabel = label ?? (isOpen ? 'メニューを閉じる' : 'メニューを開く')

  return (
    <button
      type="button"
      className={[styles.btn, isOpen ? styles.open : '', className].filter(Boolean).join(' ')}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      style={{ width: size, height: size }}
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  )
}

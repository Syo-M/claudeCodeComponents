// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './IconButton.module.css'

export type IconButtonVariant = 'default' | 'ghost' | 'filled'
export type IconButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  children: React.ReactNode
  /** ボタンの用途を示すラベル（必須） */
  'aria-label': string
  variant?: IconButtonVariant
  size?: IconButtonSize
  /** トグル状態（アクティブ/非アクティブ） */
  active?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function IconButton({
  children,
  'aria-label': ariaLabel,
  variant = 'default',
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  className,
}: Props) {
  return (
    <button
      type="button"
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        active ? styles.active : '',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}

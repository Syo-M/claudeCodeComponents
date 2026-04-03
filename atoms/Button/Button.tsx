// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

type Props = {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  /** アイコンのみのボタン用（size="icon" のときに必ず指定） */
  'aria-label'?: string
  /** フル幅表示 */
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  type = 'button',
  onClick,
  className,
  'aria-label': ariaLabel,
  fullWidth = false,
}: Props) {
  return (
    <button
      type={type}
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        isLoading ? styles.loading : '',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading}
    >
      {isLoading && (
        <span className={styles.spinner} aria-hidden="true" />
      )}
      <span className={isLoading ? styles.loadingText : undefined}>
        {children}
      </span>
    </button>
  )
}

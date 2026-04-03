import styles from './Badge.module.css'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info'

type Props = {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'default', className }: Props) {
  return (
    <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import type { ReactNode } from 'react'
import styles from './Card.module.css'

type Variant = 'default' | 'outlined' | 'elevated'
type Padding = 'sm' | 'md' | 'lg' | 'none'

type Props = {
  children: ReactNode
  variant?: Variant
  padding?: Padding
  onClick?: () => void
  className?: string
}

const paddingClass: Record<Padding, string> = {
  none: styles.padnone,
  sm: styles.padsm,
  md: styles.padmd,
  lg: styles.padlg,
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
  className,
}: Props) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      className={[
        styles.card,
        styles[variant],
        paddingClass[padding],
        onClick ? styles.clickable : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Tag>
  )
}

Card.Header = function CardHeader({
  children,
  action,
}: {
  children: ReactNode
  action?: ReactNode
}) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>{children}</div>
      {action && <div className={styles.headerAction}>{action}</div>}
    </div>
  )
}

Card.Body = function CardBody({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>
}

Card.Footer = function CardFooter({ children }: { children: ReactNode }) {
  return <div className={styles.footer}>{children}</div>
}

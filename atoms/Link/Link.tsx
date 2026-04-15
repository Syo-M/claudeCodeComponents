// Next.js で使う場合は先頭に 'use client' を追加すること

import React from 'react'
import styles from './Link.module.css'

type Props = {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'subtle' | 'button'
  external?: boolean
  disabled?: boolean
  className?: string
}

export function Link({
  href,
  children,
  variant = 'default',
  external = false,
  disabled = false,
  className,
}: Props) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  const cls = [
    styles.link,
    variant === 'subtle' ? styles.subtle : '',
    variant === 'button' ? styles.button : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ].filter(Boolean).join(' ')

  return (
    <a
      href={disabled ? undefined : href}
      className={cls}
      aria-disabled={disabled || undefined}
      {...externalProps}
    >
      {children}
      {external && (
        <svg
          className={styles.externalIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      )}
    </a>
  )
}

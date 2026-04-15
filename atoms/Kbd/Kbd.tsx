// Next.js で使う場合は先頭に 'use client' を追加すること

import React from 'react'
import styles from './Kbd.module.css'

type Props = {
  children: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
}

export function Kbd({
  children,
  size = 'md',
  className,
}: Props) {
  return (
    <kbd
      className={[
        styles.kbd,
        size === 'sm' ? styles.sm : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
    >
      {children}
    </kbd>
  )
}

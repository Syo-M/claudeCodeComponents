// Next.js で使う場合は先頭に 'use client' を追加すること

import React from 'react'
import styles from './Tooltip.module.css'

type Props = {
  children: React.ReactNode
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  disabled?: boolean
}

export function Tooltip({
  children,
  content,
  placement = 'top',
  disabled = false,
}: Props) {
  const tooltipId = React.useId()

  const placementClass =
    placement === 'top' ? styles.top :
    placement === 'bottom' ? styles.bottom :
    placement === 'left' ? styles.left :
    styles.right

  return (
    <span
      className={[styles.wrapper, disabled ? styles.wrapperDisabled : ''].filter(Boolean).join(' ')}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<{ 'aria-describedby'?: string }>, {
            'aria-describedby': disabled ? undefined : tooltipId,
          })
        : children}
      {!disabled && (
        <span
          id={tooltipId}
          role="tooltip"
          className={[styles.tooltip, placementClass].filter(Boolean).join(' ')}
        >
          {content}
        </span>
      )}
    </span>
  )
}

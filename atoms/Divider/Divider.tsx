// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Divider.module.css'

export type DividerOrientation = 'horizontal' | 'vertical'

type Props = {
  /** 区切り線の向き */
  orientation?: DividerOrientation
  /** 中央に表示するテキスト（horizontal のみ有効） */
  label?: string
}

export function Divider({ orientation = 'horizontal', label }: Props) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={styles.vertical}
      />
    )
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        aria-label={label}
        className={styles.withLabel}
      >
        <span className={styles.line} aria-hidden="true" />
        <span className={styles.labelText}>{label}</span>
        <span className={styles.line} aria-hidden="true" />
      </div>
    )
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={styles.horizontal}
    />
  )
}

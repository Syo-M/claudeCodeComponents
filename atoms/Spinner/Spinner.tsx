// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Spinner.module.css'

export type SpinnerSize = 'sm' | 'md' | 'lg'
export type SpinnerColor = 'current' | 'accent' | 'white'

type Props = {
  /** スピナーのサイズ（sm=16px / md=24px / lg=32px） */
  size?: SpinnerSize
  /** スピナーの色（current=継承 / accent=アクセントカラー / white=白） */
  color?: SpinnerColor
}

export function Spinner({ size = 'md', color = 'current' }: Props) {
  return (
    <span
      role="status"
      aria-label="読み込み中"
      className={[styles.spinner, styles[size], styles[color]].join(' ')}
    />
  )
}

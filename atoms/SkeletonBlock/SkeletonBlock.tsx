// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './SkeletonBlock.module.css'

type Props = {
  /** 幅（CSS 値。例: '100%', '120px'）。デフォルト: '100%' */
  width?: string
  /** 高さ（CSS 値。例: '1em', '40px'）。デフォルト: '1em' */
  height?: string
  /** 角丸の強さ。'sm' | 'md' | 'lg' | 'full' */
  radius?: 'sm' | 'md' | 'lg' | 'full'
  className?: string
}

/**
 * SkeletonBlock – ローディング中のコンテンツ領域を示す骨格プレースホルダー Atom。
 * width / height / radius を Props で制御できるため、テキスト行・カード・アバターなど
 * 様々な形状に対応する。
 */
export function SkeletonBlock({
  width = '100%',
  height = '1em',
  radius = 'md',
  className,
}: Props) {
  return (
    <span
      role="status"
      aria-label="読み込み中"
      className={[styles.skeleton, styles[radius], className].filter(Boolean).join(' ')}
      style={{ width, height }}
    />
  )
}

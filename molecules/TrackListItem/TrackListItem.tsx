// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './TrackListItem.module.css'

type Props = {
  /** 左端に表示する番号やインデックス */
  index?: number | string
  /** メインテキスト（トラック名・項目名など） */
  label: string
  /** サブテキスト（アーティスト名・補足情報など） */
  sub?: string
  /** 選択状態 */
  active?: boolean
  /** アクティブ時に表示するインジケーター */
  activeIndicator?: React.ReactNode
  /** 右端に表示するコンテンツ（時間表示やアイコンなど） */
  trailing?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function TrackListItem({
  index,
  label,
  sub,
  active = false,
  activeIndicator = '♪',
  trailing,
  onClick,
  className,
}: Props) {
  return (
    <button
      type="button"
      className={[
        styles.item,
        active ? styles.active : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {index !== undefined && (
        <span className={styles.index}>{index}</span>
      )}
      <span className={styles.body}>
        <span className={styles.label}>{label}</span>
        {sub && <span className={styles.sub}>{sub}</span>}
      </span>
      {active && (
        <span className={styles.indicator} aria-hidden="true">{activeIndicator}</span>
      )}
      {trailing && (
        <span className={styles.trailing}>{trailing}</span>
      )}
    </button>
  )
}

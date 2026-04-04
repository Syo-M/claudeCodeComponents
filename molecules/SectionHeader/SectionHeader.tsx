// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './SectionHeader.module.css'

type Level = 1 | 2 | 3 | 4

type Props = {
  /** タイトル（必須） */
  title: string
  /** サブタイトル（タイトル下に小さく表示） */
  subtitle?: string
  /** 右側に配置するアクション領域（ボタン等） */
  action?: React.ReactNode
  /** 見出しタグのレベル（h1〜h4）。デフォルト: 2 */
  level?: Level
  /** 下部に border-bottom を表示するか。デフォルト: false */
  divider?: boolean
}

/** level に対応する font-size クラス名を返すユーティリティ */
function levelClass(level: Level): string {
  const map: Record<Level, string> = {
    1: styles.titleH1,
    2: styles.titleH2,
    3: styles.titleH3,
    4: styles.titleH4,
  }
  return map[level]
}

export function SectionHeader({
  title,
  subtitle,
  action,
  level = 2,
  divider = false,
}: Props) {
  // 指定された level の見出しタグを動的に生成
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'

  return (
    <div className={`${styles.container} ${divider ? styles.divider : ''}`}>
      <div className={styles.left}>
        <Tag className={`${styles.title} ${levelClass(level)}`}>{title}</Tag>
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>
      {action && (
        <div className={styles.action}>{action}</div>
      )}
    </div>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './EmptyState.module.css'

// デフォルトの書類系アイコン（inbox/ファイルっぽいSVG）
function DefaultIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 4h10l6 6v18H8V4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 4v6h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 14h8M12 18h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

type Size = 'sm' | 'md' | 'lg'

type Props = {
  /** アイコン（SVG や emoji など）。未指定時はデフォルトの書類アイコンを表示 */
  icon?: React.ReactNode
  /** タイトル（必須） */
  title: string
  /** 説明文 */
  description?: string
  /** CTAエリア（ボタン等） */
  action?: React.ReactNode
  /** コンポーネントのサイズ感。padding 等に影響 */
  size?: Size
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  size = 'md',
}: Props) {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <div className={styles.iconWrap}>
        {icon ?? <DefaultIcon />}
      </div>
      <p className={styles.title}>{title}</p>
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      {action && (
        <div className={styles.action}>{action}</div>
      )}
    </div>
  )
}

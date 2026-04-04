// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './ErrorMessage.module.css'

type Props = {
  /** エラーメッセージのコンテンツ */
  children: React.ReactNode
  /** スクリーンリーダー連携用ID（aria-describedby から参照される） */
  id?: string
}

/** 警告アイコン（SVG） */
function WarningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={styles.icon}
    >
      <path
        d="M8 1.5L1 14.5h14L8 1.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="8"
        y1="6.5"
        x2="8"
        y2="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

export function ErrorMessage({ children, id }: Props) {
  return (
    <div role="alert" id={id} className={styles.container}>
      <WarningIcon />
      <span className={styles.message}>{children}</span>
    </div>
  )
}

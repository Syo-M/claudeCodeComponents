// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './InfoCard.module.css'

type Props = {
  /** カード上部のラベル（必須） */
  label: string
  /** メインの値（文字列・数値・カスタムJSX可）（必須） */
  value: React.ReactNode
  /** 補足テキスト */
  description?: string
  /** 右上に配置するSVGアイコン等 */
  icon?: React.ReactNode
  /** カードのバリアント。accent は背景を --color-accent にしてテキストを白に */
  variant?: 'default' | 'accent'
  /** width: 100% にする。グリッドで横断させる場合に使用 */
  fullWidth?: boolean
}

export function InfoCard({
  label,
  value,
  description,
  icon,
  variant = 'default',
  fullWidth = false,
}: Props) {
  return (
    <article
      className={[
        styles.card,
        variant === 'accent' ? styles.cardAccent : '',
        fullWidth ? styles.cardFullWidth : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* 上部：ラベル + アイコン */}
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
      </div>

      {/* 中部：メイン値 */}
      <div className={styles.value}>{value}</div>

      {/* 下部：補足テキスト（任意） */}
      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </article>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './AuthCard.module.css'

type Props = {
  /** ブランド名（カード上部に小さく表示） */
  brand?: string
  /** タイトル */
  title: string
  /** サブタイトル */
  subtitle?: React.ReactNode
  /** ステップ数（2以上で進捗バーを表示） */
  totalSteps?: number
  /** 現在のステップ（1始まり） */
  currentStep?: number
  /** カード内のコンテンツ */
  children: React.ReactNode
}

export function AuthCard({
  brand,
  title,
  subtitle,
  totalSteps,
  currentStep = 1,
  children,
}: Props) {
  const showSteps = totalSteps !== undefined && totalSteps >= 2

  return (
    <div className={styles.page}>
      {brand && <p className={styles.brand}>{brand}</p>}

      <div className={styles.card}>
        {/* ヘッダー */}
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* ステップインジケーター */}
        {showSteps && (
          <div className={styles.steps}>
            {Array.from({ length: totalSteps! }).map((_, i) => (
              <div
                key={i}
                className={`${styles.step} ${i < currentStep ? styles.stepActive : ''}`}
              />
            ))}
          </div>
        )}

        {/* コンテンツ */}
        {children}
      </div>
    </div>
  )
}

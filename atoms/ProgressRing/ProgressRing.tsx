// Next.js で使う場合は先頭に 'use client' を追加すること

type Props = {
  /** 進捗率（0〜1） */
  progress: number
  /** SVG の直径（px）。デフォルト: 64 */
  size?: number
  /** ストローク幅（px）。デフォルト: 6 */
  strokeWidth?: number
  /** 進捗部分の色。デフォルト: var(--color-accent) */
  color?: string
  /** トラック（背景円）の色。デフォルト: var(--color-muted) */
  trackColor?: string
  /** 中央に表示するコンテンツ（テキスト・JSX） */
  children?: React.ReactNode
  className?: string
}

/**
 * ProgressRing – SVG を使った円形プログレスインジケーター Atom。
 * ポモドーロタイマー・ファイルアップロード・スキルチャートなど
 * 進捗を円弧で表現したい場面に使う。
 */
export function ProgressRing({
  progress,
  size = 64,
  strokeWidth = 6,
  color = 'var(--color-accent)',
  trackColor = 'var(--color-muted)',
  children,
  className,
}: Props) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const clampedProgress = Math.min(1, Math.max(0, progress))
  const dashoffset = circumference * (1 - clampedProgress)
  const center = size / 2

  return (
    <div
      className={className}
      style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}
      role="progressbar"
      aria-valuenow={Math.round(clampedProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
        {/* トラック（背景円） */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* 進捗弧 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          style={{ stroke: color }}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      {children && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

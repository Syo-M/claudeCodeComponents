// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Slider.module.css'

type Props = {
  /** 現在の値 */
  value: number
  /** 最小値 */
  min?: number
  /** 最大値 */
  max?: number
  /** ステップ */
  step?: number
  /** 値変更時のコールバック */
  onChange: (value: number) => void
  /** 進捗バーの色。デフォルト: var(--color-accent) */
  color?: string
  /** トラック（背景）の色。デフォルト: var(--color-muted) */
  trackColor?: string
  disabled?: boolean
  'aria-label'?: string
  className?: string
}

export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  color,
  trackColor,
  disabled = false,
  'aria-label': ariaLabel,
  className,
}: Props) {
  const ratio = max > min ? (value - min) / (max - min) : 0
  const percent = Math.min(1, Math.max(0, ratio)) * 100

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
      style={{
        '--slider-fill': color,
        '--slider-track': trackColor,
      } as React.CSSProperties}
    >
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
      <input
        type="range"
        className={styles.input}
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={ariaLabel}
      />
    </div>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './PlayButton.module.css'

export type PlayButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  /** 再生中かどうか */
  isPlaying: boolean
  onClick: () => void
  size?: PlayButtonSize
  disabled?: boolean
  className?: string
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={styles.icon}>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={styles.icon}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}

export function PlayButton({
  isPlaying,
  onClick,
  size = 'md',
  disabled = false,
  className,
}: Props) {
  return (
    <button
      type="button"
      className={[
        styles.btn,
        styles[size],
        isPlaying ? styles.playing : '',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
      aria-label={isPlaying ? '一時停止' : '再生'}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useCallback } from 'react'
import styles from './CopyButton.module.css'

type Props = {
  /** コピーするテキスト */
  text: string
  /** コピー前のラベル。デフォルト: 'コピー' */
  label?: string
  /** コピー成功後のラベル。デフォルト: 'コピー済み' */
  copiedLabel?: string
  /** コピー済み状態を維持するミリ秒数。デフォルト: 2000 */
  duration?: number
  /** ボタンのサイズ */
  size?: 'sm' | 'md'
  /** 非活性（コピー対象テキストが空など） */
  disabled?: boolean
  className?: string
}

/**
 * CopyButton – テキストをクリップボードにコピーし、一定時間「コピー済み」フィードバックを表示する Molecule。
 * PromptPreview・シェアURLコピーなど「テキストをコピーする」場面全般に使える。
 */
export function CopyButton({
  text,
  label = 'コピー',
  copiedLabel = 'コピー済み',
  duration = 2000,
  size = 'md',
  disabled = false,
  className,
}: Props) {
  const [copied, setCopied] = useState(false)

  const handleClick = useCallback(async () => {
    if (disabled || !text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), duration)
    } catch {
      // clipboard API が使えない場合は何もしない
    }
  }, [text, disabled, duration])

  return (
    <button
      type="button"
      className={[
        styles.btn,
        styles[size],
        copied ? styles.copied : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={handleClick}
      disabled={disabled || !text}
      aria-live="polite"
      aria-label={copied ? copiedLabel : label}
    >
      <span className={styles.icon} aria-hidden="true">
        {copied ? '✓' : '⎘'}
      </span>
      <span className={styles.label}>{copied ? copiedLabel : label}</span>
    </button>
  )
}

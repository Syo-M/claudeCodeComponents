// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useEffect } from 'react'
import styles from './DateTime.module.css'

type Props = {
  /** 日付フォーマットのロケール（デフォルト: ja-JP） */
  locale?: string
  /** 秒を表示するか（デフォルト: true） */
  showSeconds?: boolean
}

function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  })
}

function formatTime(date: Date, locale: string, showSeconds: boolean): string {
  return date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    ...(showSeconds ? { second: '2-digit' } : {}),
  })
}

export function DateTime({ locale = 'ja-JP', showSeconds = true }: Props) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className={styles.datetime}>
      <span className={styles.date}>{formatDate(now, locale)}</span>
      <span className={styles.divider}>|</span>
      <span className={styles.time}>{formatTime(now, locale, showSeconds)}</span>
    </span>
  )
}

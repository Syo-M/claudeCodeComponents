// Next.js で使う場合は先頭に 'use client' を追加すること

import { useEffect, useState } from 'react'
import styles from './Toast.module.css'

/* ── 型定義 ── */

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export type ToastItem = {
  id: string
  message: string
  variant?: ToastVariant
  duration?: number
}

/* ── アイコン SVG ── */

function SuccessIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 8l2.5 2.5 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5L14.5 13H1.5L8 1.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 6v3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11" r="0.75" fill="currentColor" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 7v4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  )
}

const ICONS: Record<ToastVariant, React.ReactNode> = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
}

const VARIANT_LABELS: Record<ToastVariant, string> = {
  success: '成功',
  error: 'エラー',
  warning: '警告',
  info: '情報',
}

/* ── Toast 単体コンポーネント ── */

type ToastProps = {
  id: string
  message: string
  variant?: ToastVariant
  onClose: (id: string) => void
  /** ミリ秒。0 で自動閉じなし（デフォルト: 4000） */
  duration?: number
}

export function Toast({
  id,
  message,
  variant = 'info',
  onClose,
  duration = 4000,
}: ToastProps) {
  const [closing, setClosing] = useState(false)

  // 自動クローズ
  useEffect(() => {
    if (duration === 0) return

    const timer = setTimeout(() => {
      setClosing(true)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  // フェードアウト後に onClose を呼ぶ
  const handleAnimationEnd = () => {
    if (closing) {
      onClose(id)
    }
  }

  const handleClose = () => {
    setClosing(true)
  }

  return (
    <div
      className={`${styles.toast} ${styles[variant]} ${closing ? styles.closing : ''}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onAnimationEnd={handleAnimationEnd}
    >
      {/* 左アイコン */}
      <span
        className={`${styles.icon} ${styles[`icon_${variant}`]}`}
        aria-label={VARIANT_LABELS[variant]}
      >
        {ICONS[variant]}
      </span>

      {/* メッセージ */}
      <p className={styles.message}>{message}</p>

      {/* 閉じるボタン */}
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="通知を閉じる"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M11 3L3 11M3 3l8 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

/* ── ToastContainer ── */

type ToastContainerProps = {
  toasts: ToastItem[]
  onClose: (id: string) => void
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  if (toasts.length === 0) return null

  return (
    <div
      className={styles.container}
      aria-label="通知エリア"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={onClose}
          duration={toast.duration}
        />
      ))}
    </div>
  )
}

/* ── useToast フック ── */

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const show = (
    message: string,
    variant?: ToastVariant,
    duration?: number
  ) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    setToasts((prev) => [...prev, { id, message, variant, duration }])
  }

  const close = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return { toasts, show, close }
}

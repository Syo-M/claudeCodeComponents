// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState } from 'react'
import styles from './PasswordInput.module.css'

type Props = {
  /** 入力値（必須） */
  value: string
  /** 値変更ハンドラ（必須） */
  onChange: (value: string) => void
  /** ラベルテキスト */
  label?: string
  /** input 要素の id */
  id?: string
  /** プレースホルダー */
  placeholder?: string
  /** 無効状態 */
  disabled?: boolean
  /** エラーメッセージ */
  error?: string
  /** 必須マーク表示 */
  required?: boolean
  /** オートコンプリート属性 */
  autoComplete?: string
}

/** 目を開いたアイコン（パスワード表示中） */
function IconEyeOpen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* 外側の目の形 */}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      {/* 瞳 */}
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

/** 斜線入りの目アイコン（パスワード非表示中） */
function IconEyeOff() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* 斜線 */}
      <line x1="1" y1="1" x2="23" y2="23" />
      {/* 外側の目の形（上半分） */}
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 7 11 7a13.16 13.16 0 0 1-1.67 2.68" />
      {/* 外側の目の形（下半分） */}
      <path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 7 11 7a9.74 9.74 0 0 0 5.39-1.61" />
      {/* 瞳の下部 */}
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    </svg>
  )
}

export function PasswordInput({
  value,
  onChange,
  label,
  id,
  placeholder,
  disabled = false,
  error,
  required = false,
  autoComplete = 'current-password',
}: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const inputId = id ?? (label ? `password-input-${label}` : 'password-input')
  const errorId = `${inputId}-error`

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {/* input とトグルボタンを重ねるコンテナ */}
      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          type={isVisible ? 'text' : 'password'}
          className={[styles.input, error ? styles.inputError : ''].filter(Boolean).join(' ')}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />

        {/* 表示/非表示トグルボタン */}
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setIsVisible((prev) => !prev)}
          disabled={disabled}
          aria-label={isVisible ? 'パスワードを隠す' : 'パスワードを表示'}
        >
          {isVisible ? <IconEyeOpen /> : <IconEyeOff />}
        </button>
      </div>

      {/* エラーメッセージ */}
      {error && (
        <p id={errorId} className={styles.errorText} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Textarea.module.css'

type Props = {
  label?: string
  id?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
  rows?: number
  maxLength?: number
  showCount?: boolean
}

export function Textarea({
  label,
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  hint,
  required = false,
  rows = 4,
  maxLength,
  showCount = false,
}: Props) {
  const textareaId = id ?? (label ? `textarea-${label}` : undefined)
  const isOver = maxLength !== undefined && value.length > maxLength

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={[styles.textarea, error ? styles.textareaError : ''].filter(Boolean).join(' ')}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        maxLength={maxLength}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
      />
      <div className={styles.footer}>
        <span>
          {error && (
            <p id={`${textareaId}-error`} className={styles.errorText} role="alert">
              {error}
            </p>
          )}
          {!error && hint && (
            <p id={`${textareaId}-hint`} className={styles.hintText}>
              {hint}
            </p>
          )}
        </span>
        {showCount && maxLength !== undefined && (
          <span className={[styles.count, isOver ? styles.countOver : ''].filter(Boolean).join(' ')} aria-live="polite">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}

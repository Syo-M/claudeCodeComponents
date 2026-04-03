// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Input.module.css'

type Props = {
  label?: string
  id?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'url'
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
  autoFocus?: boolean
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  hint,
  required = false,
  autoFocus = false,
  onKeyDown,
}: Props) {
  const inputId = id ?? (label ? `input-${label}` : undefined)

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={[styles.input, error ? styles.inputError : ''].filter(Boolean).join(' ')}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
      />
      {error && (
        <p id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={`${inputId}-hint`} className={styles.hintText}>
          {hint}
        </p>
      )}
    </div>
  )
}

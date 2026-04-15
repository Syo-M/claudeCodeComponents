// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './NumberInput.module.css'

type Props = {
  label?: string
  id?: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
  placeholder?: string
}

export function NumberInput({
  label,
  id,
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  error,
  hint,
  required = false,
  placeholder,
}: Props) {
  const inputId = id ?? (label ? `number-input-${label}` : undefined)

  const atMin = min !== undefined && value <= min
  const atMax = max !== undefined && value >= max

  const handleDecrement = () => {
    const next = value - step
    if (min !== undefined && next < min) return
    onChange(Math.round(next * 1e10) / 1e10)
  }

  const handleIncrement = () => {
    const next = value + step
    if (max !== undefined && next > max) return
    onChange(Math.round(next * 1e10) / 1e10)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const parsed = parseFloat(raw)
    if (!isNaN(parsed)) {
      onChange(parsed)
    } else if (raw === '' || raw === '-') {
      // 入力途中（空 or マイナス記号だけ）は無視
    }
  }

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <div className={styles.inputRow}>
        <button
          type="button"
          className={[styles.stepButton, styles.stepButtonMinus, error ? styles.stepButtonError : ''].filter(Boolean).join(' ')}
          onClick={handleDecrement}
          disabled={disabled || atMin}
          aria-label="値を減らす"
          tabIndex={-1}
        >
          −
        </button>
        <input
          id={inputId}
          type="text"
          inputMode="numeric"
          className={[styles.input, error ? styles.inputError : ''].filter(Boolean).join(' ')}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        />
        <button
          type="button"
          className={[styles.stepButton, styles.stepButtonPlus, error ? styles.stepButtonError : ''].filter(Boolean).join(' ')}
          onClick={handleIncrement}
          disabled={disabled || atMax}
          aria-label="値を増やす"
          tabIndex={-1}
        >
          ＋
        </button>
      </div>
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

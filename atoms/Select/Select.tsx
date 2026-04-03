// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Select.module.css'

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export type SelectGroup = {
  label: string
  options: SelectOption[]
}

type Props = {
  label?: string
  id?: string
  options: (SelectOption | SelectGroup)[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
}

function isGroup(item: SelectOption | SelectGroup): item is SelectGroup {
  return 'options' in item
}

export function Select({
  label,
  id,
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  hint,
  required = false,
}: Props) {
  const inputId = id ?? (label ? `select-${label}` : undefined)

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={inputId}
          className={[styles.select, error ? styles.selectError : ''].filter(Boolean).join(' ')}
          value={value}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        >
          {placeholder && (
            <option value="" disabled>{placeholder}</option>
          )}
          {options.map((item, i) =>
            isGroup(item) ? (
              <optgroup key={i} label={item.label}>
                {item.options.map(opt => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option key={item.value} value={item.value} disabled={item.disabled}>
                {item.label}
              </option>
            )
          )}
        </select>
        {/* カスタム矢印アイコン */}
        <span className={styles.arrow} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {error && <p id={`${inputId}-error`} className={styles.errorText} role="alert">{error}</p>}
      {!error && hint && <p id={`${inputId}-hint`} className={styles.hintText}>{hint}</p>}
    </div>
  )
}

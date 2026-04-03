// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Checkbox.module.css'

type Props = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
  disabled?: boolean
  error?: string
  hint?: string
  indeterminate?: boolean
}

export function Checkbox({
  label,
  checked,
  onChange,
  id,
  disabled = false,
  error,
  hint,
  indeterminate = false,
}: Props) {
  const inputId = id ?? `checkbox-${label}`

  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={inputId}
        className={[styles.label, disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
      >
        <input
          id={inputId}
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          disabled={disabled}
          aria-invalid={!!error}
          ref={el => {
            if (el) el.indeterminate = indeterminate
          }}
        />
        <span className={[styles.box, error ? styles.boxError : ''].filter(Boolean).join(' ')} aria-hidden="true" />
        <span className={styles.text}>{label}</span>
      </label>
      {error && <p className={styles.errorText} role="alert">{error}</p>}
      {!error && hint && <p className={styles.hintText}>{hint}</p>}
    </div>
  )
}

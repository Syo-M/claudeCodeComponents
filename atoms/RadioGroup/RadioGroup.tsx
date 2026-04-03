// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './RadioGroup.module.css'

export type RadioOption = {
  value: string
  label: string
  hint?: string
  disabled?: boolean
}

type Props = {
  name: string
  legend?: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  /** 横並び表示（デフォルト: 縦） */
  inline?: boolean
}

export function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  inline = false,
}: Props) {
  return (
    <fieldset className={styles.fieldset}>
      {legend && <legend className={styles.legend}>{legend}</legend>}
      <div className={[styles.group, inline ? styles.inline : ''].filter(Boolean).join(' ')}>
        {options.map(opt => {
          const id = `${name}-${opt.value}`
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className={[styles.label, opt.disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                disabled={opt.disabled}
                className={styles.input}
                aria-describedby={opt.hint ? `${id}-hint` : undefined}
              />
              <span className={[styles.dot, error ? styles.dotError : ''].filter(Boolean).join(' ')} aria-hidden="true" />
              <span className={styles.textWrapper}>
                <span className={styles.text}>{opt.label}</span>
                {opt.hint && (
                  <span id={`${id}-hint`} className={styles.hint}>{opt.hint}</span>
                )}
              </span>
            </label>
          )
        })}
      </div>
      {error && <p className={styles.errorText} role="alert">{error}</p>}
    </fieldset>
  )
}

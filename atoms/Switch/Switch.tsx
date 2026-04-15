// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Switch.module.css'

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  id?: string
  disabled?: boolean
  size?: 'sm' | 'md'
}

export function Switch({
  checked,
  onChange,
  label,
  id,
  disabled = false,
  size = 'md',
}: Props) {
  const inputId = id ?? (label ? `switch-${label}` : undefined)

  return (
    <label
      className={[styles.wrapper, disabled ? styles.wrapperDisabled : ''].filter(Boolean).join(' ')}
      aria-disabled={disabled}
    >
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
      />
      {label && <span className={styles.label}>{label}</span>}
      <span
        className={[
          styles.track,
          size === 'sm' ? styles.trackSm : styles.trackMd,
          checked ? styles.trackChecked : '',
        ].filter(Boolean).join(' ')}
        aria-hidden="true"
      >
        <span
          className={[
            styles.thumb,
            size === 'sm' ? styles.thumbSm : styles.thumbMd,
            checked ? (size === 'sm' ? styles.thumbCheckedSm : styles.thumbCheckedMd) : '',
          ].filter(Boolean).join(' ')}
        />
      </span>
    </label>
  )
}

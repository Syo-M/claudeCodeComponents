// Next.js で使う場合は先頭に 'use client' を追加すること

import type { ReactNode } from 'react'
import styles from './SearchInput.module.css'

type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  onSearch?: () => void
  disabled?: boolean
  id?: string
  label?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = '検索…',
  onSearch,
  disabled = false,
  id,
  label,
}: Props) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputRow}>
        <button
          type="button"
          className={styles.searchButton}
          onClick={onSearch}
          disabled={disabled}
          aria-label="検索"
          tabIndex={onSearch ? 0 : -1}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <input
          id={id}
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={label ? undefined : placeholder}
        />

        {value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => onChange('')}
            disabled={disabled}
            aria-label="入力をクリア"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

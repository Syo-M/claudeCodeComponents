// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Chip.module.css'

export type ChipVariant = 'selectable' | 'deletable' | 'static'

type BaseProps = {
  label: string
  variant?: ChipVariant
  className?: string
}

type SelectableProps = BaseProps & {
  variant: 'selectable'
  selected: boolean
  onSelect: () => void
}

type DeletableProps = BaseProps & {
  variant: 'deletable'
  onDelete: () => void
  /** ラベル部分をクリックしたときのコールバック（省略時はテキストのみ） */
  onLabelClick?: () => void
}

type StaticProps = BaseProps & {
  variant?: 'static'
}

type Props = SelectableProps | DeletableProps | StaticProps

export function Chip(props: Props) {
  const { label, variant = 'static', className } = props

  if (variant === 'selectable') {
    const { selected, onSelect } = props as SelectableProps
    return (
      <button
        type="button"
        className={[styles.chip, styles.selectable, selected ? styles.selected : '', className].filter(Boolean).join(' ')}
        onClick={onSelect}
        aria-pressed={selected}
      >
        {label}
      </button>
    )
  }

  if (variant === 'deletable') {
    const { onDelete, onLabelClick } = props as DeletableProps
    return (
      <span className={[styles.chip, styles.deletable, className].filter(Boolean).join(' ')}>
        {onLabelClick ? (
          <button
            type="button"
            className={[styles.deletableLabel, styles.deletableLabelBtn].filter(Boolean).join(' ')}
            onClick={onLabelClick}
            title={`「${label}」を復元`}
          >
            {label}
          </button>
        ) : (
          <span className={styles.deletableLabel}>{label}</span>
        )}
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={onDelete}
          aria-label={`「${label}」を削除`}
        >
          ×
        </button>
      </span>
    )
  }

  // static
  return (
    <span className={[styles.chip, styles.static, className].filter(Boolean).join(' ')}>
      {label}
    </span>
  )
}

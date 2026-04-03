// Next.js で使う場合は先頭に 'use client' を追加すること

import { Chip } from '../../atoms/Chip/Chip'
import styles from './ChipGroup.module.css'

export type ChipOption = {
  id: number
  label: string
}

type Props = {
  label: string
  options: ChipOption[]
  selectedIds: number[]
  onToggle: (id: number) => void
}

export function ChipGroup({ label, options, selectedIds, onToggle }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles.chips}>
        {options.map(option => (
          <Chip
            key={option.id}
            label={option.label}
            variant="selectable"
            selected={selectedIds.includes(option.id)}
            onSelect={() => onToggle(option.id)}
          />
        ))}
      </div>
    </section>
  )
}

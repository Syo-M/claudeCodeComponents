// Next.js で使う場合は先頭に 'use client' を追加すること

import { Chip } from '../../atoms/Chip/Chip'
import styles from './FavoritesBar.module.css'

// ── 型定義 ─────────────────────────────────────────

export type Favorite = {
  id: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selection: Record<string, any>
  createdAt: string
}

type Props = {
  favorites: Favorite[]
  onRestore: (favorite: Favorite) => void
  onDelete: (id: string) => void
}

// ── コンポーネント ────────────────────────────────────

export function FavoritesBar({ favorites, onRestore, onDelete }: Props) {
  if (favorites.length === 0) return null

  return (
    <section className={styles.bar}>
      <span className={styles.label}>お気に入り</span>
      <div className={styles.list}>
        {favorites.map(fav => (
          <Chip
            key={fav.id}
            label={fav.name}
            variant="deletable"
            onLabelClick={() => onRestore(fav)}
            onDelete={() => onDelete(fav.id)}
          />
        ))}
      </div>
    </section>
  )
}

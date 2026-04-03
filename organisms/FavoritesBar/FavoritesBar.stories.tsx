import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FavoritesBar, type Favorite } from './FavoritesBar'

const meta: Meta<typeof FavoritesBar> = {
  title: 'Organisms/FavoritesBar',
  component: FavoritesBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Chip(deletable) を並べたお気に入り一覧バー Organism。useFavorites フックとセットで使用。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FavoritesBar>

const sampleFavorites: Favorite[] = [
  { id: '1', name: 'ポートレート基本', selection: {}, createdAt: new Date().toISOString() },
  { id: '2', name: '風景写真セット', selection: {}, createdAt: new Date().toISOString() },
  { id: '3', name: 'プロフィール写真', selection: {}, createdAt: new Date().toISOString() },
]

export const インタラクティブ: Story = {
  render: () => {
    const [favorites, setFavorites] = useState(sampleFavorites)
    const [restored, setRestored] = useState<string | null>(null)
    return (
      <div>
        <FavoritesBar
          favorites={favorites}
          onRestore={(fav) => setRestored(`「${fav.name}」を復元`)}
          onDelete={(id) => setFavorites(prev => prev.filter(f => f.id !== id))}
        />
        {restored && (
          <p style={{ padding: '12px 32px', color: '#2E7D52', fontSize: '14px' }}>✓ {restored}</p>
        )}
      </div>
    )
  },
}

export const 複数: Story = {
  args: { favorites: sampleFavorites, onRestore: () => {}, onDelete: () => {} },
}

export const 空: Story = {
  args: { favorites: [], onRestore: () => {}, onDelete: () => {} },
}

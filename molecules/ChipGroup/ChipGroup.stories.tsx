import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ChipGroup } from './ChipGroup'

const meta: Meta<typeof ChipGroup> = {
  title: 'Molecules/ChipGroup',
  component: ChipGroup,
  parameters: {
    docs: {
      description: {
        component: 'ラベル付きの選択可能チップグループ Molecule。Chip atom を内包。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '600px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ChipGroup>

const sampleOptions = [
  { id: 1, label: 'ポートレート' },
  { id: 2, label: '風景' },
  { id: 3, label: 'スナップ' },
  { id: 4, label: '夜景' },
  { id: 5, label: 'マクロ' },
]

export const インタラクティブ: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    return (
      <ChipGroup
        label="ジャンル"
        options={sampleOptions}
        selectedIds={selectedIds}
        onToggle={(id) =>
          setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
          )
        }
      />
    )
  },
}

export const 選択済みあり: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([1, 3])
    return (
      <ChipGroup
        label="ジャンル"
        options={sampleOptions}
        selectedIds={selectedIds}
        onToggle={(id) =>
          setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
          )
        }
      />
    )
  },
}

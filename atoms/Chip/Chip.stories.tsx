import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Chip } from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'チップ Atom。selectable（選択トグル）・deletable（削除ボタン付き）・static（表示のみ）の3バリアント。',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['selectable', 'deletable', 'static'] },
    selected: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Selectable: Story = {
  args: { label: '選択可能', variant: 'selectable', selected: false },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? false)
    return (
      <div style={{ padding: '16px' }}>
        <Chip key={String(args.selected)} {...args} selected={selected} onSelect={() => setSelected(s => !s)} />
      </div>
    )
  },
}

export const Deletable: Story = {
  args: { label: '削除できます', variant: 'deletable' },
  render: (args) => (
    <div style={{ padding: '16px' }}>
      <Chip {...args} onDelete={() => alert('削除')} />
    </div>
  ),
}

export const Static: Story = {
  args: { label: '表示のみ', variant: 'static' },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export const 全バリアント: Story = {
  render: () => {
    const [selected, setSelected] = useState(false)
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '16px' }}>
        <Chip label="選択中" variant="selectable" selected={true} onSelect={() => {}} />
        <Chip label="未選択" variant="selectable" selected={false} onSelect={() => {}} />
        <Chip label="トグル" variant="selectable" selected={selected} onSelect={() => setSelected(s => !s)} />
        <Chip label="削除付き" variant="deletable" onDelete={() => {}} />
        <Chip label="静的" variant="static" />
      </div>
    )
  },
}

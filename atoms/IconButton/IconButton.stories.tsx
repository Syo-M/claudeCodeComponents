import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { IconButton } from './IconButton'

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: { component: 'アイコンのみのボタン。3バリアント・3サイズ・トグル状態に対応。シャッフル・スキップ・お気に入りなど状態切替ボタンに最適。' },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'ghost', 'filled'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: { children: '⚙️', 'aria-label': '設定', variant: 'default' },
}

export const Ghost: Story = {
  args: { children: '🔍', 'aria-label': '検索', variant: 'ghost' },
}

export const Filled: Story = {
  args: { children: '📌', 'aria-label': 'ピン留め', variant: 'filled' },
}

export const 全バリアント: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', padding: '16px' }}>
      <IconButton variant="default" aria-label="default">⚙️</IconButton>
      <IconButton variant="ghost" aria-label="ghost">🔍</IconButton>
      <IconButton variant="filled" aria-label="filled">📌</IconButton>
    </div>
  ),
}

export const 全サイズ: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <IconButton size="sm" aria-label="小">⚙️</IconButton>
      <IconButton size="md" aria-label="中">⚙️</IconButton>
      <IconButton size="lg" aria-label="大">⚙️</IconButton>
    </div>
  ),
}

export const トグル: Story = {
  render: () => {
    const [active, setActive] = useState(false)
    return (
      <div style={{ display: 'flex', gap: '12px', padding: '16px', alignItems: 'center' }}>
        <IconButton variant="default" active={active} onClick={() => setActive(!active)} aria-label="シャッフル">
          🔀
        </IconButton>
        <span style={{ fontSize: '14px', color: '#666' }}>{active ? 'ON' : 'OFF'}</span>
      </div>
    )
  },
}

export const トグル全バリアント: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', padding: '16px' }}>
      <IconButton variant="default" active aria-label="default active">🔀</IconButton>
      <IconButton variant="ghost" active aria-label="ghost active">❤️</IconButton>
      <IconButton variant="filled" active aria-label="filled active">📌</IconButton>
    </div>
  ),
}

export const 無効: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', padding: '16px' }}>
      <IconButton variant="default" disabled aria-label="無効1">⚙️</IconButton>
      <IconButton variant="ghost" disabled aria-label="無効2">🔍</IconButton>
      <IconButton variant="filled" disabled aria-label="無効3">📌</IconButton>
    </div>
  ),
}

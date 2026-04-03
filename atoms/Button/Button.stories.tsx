import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: { component: '汎用ボタン。5バリアント・4サイズ・loading・fullWidth に対応。' },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger', 'link'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon'] },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'プライマリ', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'セカンダリ', variant: 'secondary' } }
export const Ghost: Story = { args: { children: 'ゴースト', variant: 'ghost' } }
export const Danger: Story = { args: { children: '削除', variant: 'danger' } }
export const Link: Story = { args: { children: 'リンク風', variant: 'link' } }

export const 全バリアント: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '16px' }}>
      <Button variant="primary">プライマリ</Button>
      <Button variant="secondary">セカンダリ</Button>
      <Button variant="ghost">ゴースト</Button>
      <Button variant="danger">削除</Button>
      <Button variant="link">リンク</Button>
    </div>
  ),
}

export const 全サイズ: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" size="icon" aria-label="設定">⚙️</Button>
    </div>
  ),
}

export const ローディング: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    const handleClick = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }
    return (
      <div style={{ display: 'flex', gap: '12px', padding: '16px' }}>
        <Button variant="primary" isLoading={loading} onClick={handleClick}>
          {loading ? '送信中...' : '送信する'}
        </Button>
        <Button variant="secondary" isLoading={loading}>セカンダリ</Button>
      </div>
    )
  },
}

export const フル幅: Story = {
  render: () => (
    <div style={{ padding: '16px', maxWidth: '360px' }}>
      <Button variant="primary" fullWidth>フル幅ボタン</Button>
    </div>
  ),
}

export const 送信ボタン: Story = {
  render: () => (
    <div style={{ padding: '16px', maxWidth: '360px' }}>
      <Button type="submit" variant="primary" fullWidth size="lg">フォームを送信</Button>
    </div>
  ),
}

export const アイコンボタン: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', padding: '16px' }}>
      <Button variant="ghost" size="icon" aria-label="編集">✏️</Button>
      <Button variant="ghost" size="icon" aria-label="コピー">📋</Button>
      <Button variant="danger" size="icon" aria-label="削除">🗑️</Button>
    </div>
  ),
}

export const 無効: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', padding: '16px' }}>
      <Button variant="primary" disabled>無効</Button>
      <Button variant="secondary" disabled>無効</Button>
      <Button variant="ghost" disabled>無効</Button>
    </div>
  ),
}

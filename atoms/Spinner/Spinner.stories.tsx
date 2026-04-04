import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          '読み込みインジケーター。3サイズ・3カラーに対応。`prefers-reduced-motion` でアニメーション停止。',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['current', 'accent', 'white'] },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

// ── 基本 ──
export const デフォルト: Story = {
  args: { size: 'md', color: 'current' },
}

// ── 3サイズ ──
export const 全サイズ: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '16px' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

// ── 3カラー ──
export const カラー_current: Story = {
  args: { size: 'md', color: 'current' },
  decorators: [
    (Story) => (
      <div style={{ color: '#e67e22', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
}

export const カラー_accent: Story = {
  args: { size: 'md', color: 'accent' },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
}

export const カラー_white: Story = {
  args: { size: 'md', color: 'white' },
  decorators: [
    (Story) => (
      <div style={{ background: '#333', padding: '16px', display: 'inline-block', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
}

export const 全カラー: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '16px' }}>
      <Spinner size="md" color="current" />
      <Spinner size="md" color="accent" />
      <div style={{ background: '#333', padding: '8px', borderRadius: '4px' }}>
        <Spinner size="md" color="white" />
      </div>
    </div>
  ),
}

// ── ボタン内使用例 ──
export const ボタン内使用例: Story = {
  render: () => (
    <button
      disabled
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 20px',
        background: 'var(--color-accent)',
        color: 'var(--color-accent-text)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--font-size-md)',
        cursor: 'not-allowed',
        opacity: 0.8,
      }}
    >
      <Spinner size="sm" color="white" />
      送信中...
    </button>
  ),
}

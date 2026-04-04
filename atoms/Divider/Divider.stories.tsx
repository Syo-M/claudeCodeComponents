import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          '区切り線 Atom。水平・垂直、ラベルあり・なしに対応。`role="separator"` と `aria-orientation` でアクセシビリティに対応。',
      },
    },
  },
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

// ── horizontal ──
export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', width: '100%' }}>
        <p style={{ margin: '0 0 12px' }}>上のコンテンツ</p>
        <Story />
        <p style={{ margin: '12px 0 0' }}>下のコンテンツ</p>
      </div>
    ),
  ],
}

// ── vertical ──
export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', height: '40px' }}>
        <span>左のコンテンツ</span>
        <Story />
        <span>右のコンテンツ</span>
      </div>
    ),
  ],
}

// ── ラベルあり「または」 ──
export const ラベルあり_または: Story = {
  args: { orientation: 'horizontal', label: 'または' },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', width: '100%', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

// ── ラベルあり（他のテキスト例） ──
export const ラベルあり_その他: Story = {
  render: () => (
    <div style={{ padding: '16px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Divider label="または" />
      <Divider label="AND" />
      <Divider label="2024年12月" />
    </div>
  ),
}

// ── ラベルなし ──
export const ラベルなし: Story = {
  args: { orientation: 'horizontal' },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', width: '100%', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

// ── 縦並びと横並びの組み合わせ例 ──
export const 使用例_ナビゲーション: Story = {
  render: () => (
    <nav
      aria-label="メニュー例"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--font-size-sm)',
      }}
    >
      <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>ホーム</a>
      <Divider orientation="vertical" />
      <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>設定</a>
      <Divider orientation="vertical" />
      <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>ヘルプ</a>
    </nav>
  ),
}

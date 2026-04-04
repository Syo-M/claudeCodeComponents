import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'ユーザーアバター。画像あり・頭文字フォールバック・4サイズに対応。',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    src: { control: 'text' },
    alt: { control: 'text' },
    name: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

// ── 基本 ──
export const 画像あり: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'ユーザーアイコン',
    size: 'md',
  },
}

export const 頭文字フォールバック: Story = {
  args: {
    name: '田中太郎',
    size: 'md',
  },
}

// ── 4サイズ ──
export const 全サイズ_画像あり: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
      <Avatar src="https://i.pravatar.cc/150?img=5" alt="ユーザー" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=5" alt="ユーザー" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=5" alt="ユーザー" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=5" alt="ユーザー" size="xl" />
    </div>
  ),
}

export const 全サイズ_頭文字: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
      <Avatar name="山田" size="sm" />
      <Avatar name="山田" size="md" />
      <Avatar name="山田" size="lg" />
      <Avatar name="山田" size="xl" />
    </div>
  ),
}

// ── 長い名前（1文字目のみ表示） ──
export const 長い名前: Story = {
  args: {
    name: 'アレクサンドロス大王',
    size: 'lg',
  },
}

// ── 様々な名前 ──
export const 複数ユーザー: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px' }}>
      <Avatar name="田中" size="md" />
      <Avatar name="佐藤" size="md" />
      <Avatar name="鈴木" size="md" />
      <Avatar name="Alice" size="md" />
      <Avatar name="Bob" size="md" />
    </div>
  ),
}

// ── src未指定かつnameも未指定 ──
export const フォールバック_名前なし: Story = {
  args: {
    size: 'md',
  },
}

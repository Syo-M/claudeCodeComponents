import type { Meta, StoryObj } from '@storybook/react'
import { TagBadge } from './TagBadge'

const meta: Meta<typeof TagBadge> = {
  title: 'Atoms/TagBadge',
  component: TagBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '動的な色を持つタグバッジ Atom。Notion・GitHub のようなカラー付きタグや任意の CSS カラー文字列に対応する。' +
          '既存の `Badge` とは異なり、バリアント enum ではなく色文字列で動的に背景・文字色を決定する。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof TagBadge>

export const Default: Story = {
  args: { label: 'タグ', color: 'default' },
}

export const Notionカラー一覧: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {(['default','gray','brown','orange','yellow','green','blue','purple','pink','red'] as const).map(c => (
        <TagBadge key={c} label={c} color={c} />
      ))}
    </div>
  ),
}

export const 任意CSSカラー: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <TagBadge label="React"       color="#61dafb" />
      <TagBadge label="TypeScript"  color="#3178c6" />
      <TagBadge label="Next.js"     color="#000000" />
      <TagBadge label="Astro"       color="#ff5d01" />
      <TagBadge label="Tailwind"    color="#06b6d4" />
    </div>
  ),
}

export const カード内タグ例: Story = {
  render: () => (
    <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '280px' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>Notion Visualizer</p>
      <p style={{ margin: '0 0 12px', fontSize: '0.85rem', color: '#666' }}>
        Notion データベースを可視化するダッシュボード
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        <TagBadge label="Next.js" color="blue" />
        <TagBadge label="TypeScript" color="blue" />
        <TagBadge label="Clerk" color="purple" />
        <TagBadge label="Notion API" color="default" />
      </div>
    </div>
  ),
}

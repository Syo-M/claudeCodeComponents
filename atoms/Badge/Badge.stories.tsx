import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'ステータス・カテゴリなどを示す小さなラベル Atom。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { children: 'デフォルト' } }
export const Success: Story = { args: { children: '成功', variant: 'success' } }
export const Warning: Story = { args: { children: '注意', variant: 'warning' } }
export const Error: Story = { args: { children: 'エラー', variant: 'error' } }
export const Info: Story = { args: { children: '情報', variant: 'info' } }

export const 全バリアント: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge>デフォルト</Badge>
      <Badge variant="success">成功</Badge>
      <Badge variant="warning">注意</Badge>
      <Badge variant="error">エラー</Badge>
      <Badge variant="info">情報</Badge>
    </div>
  ),
}

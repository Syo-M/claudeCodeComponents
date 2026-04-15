import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: 'パンくずリスト Atom。nav/ol でセマンティックに実装。現在ページは aria-current="page" 付き。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const 基本2階層: Story = {
  args: {
    items: [
      { label: 'ホーム', href: '/' },
      { label: '設定' },
    ],
  },
}

export const 深い階層4階層: Story = {
  args: {
    items: [
      { label: 'ホーム', href: '/' },
      { label: 'カテゴリ', href: '/category' },
      { label: 'サブカテゴリ', href: '/category/sub' },
      { label: '詳細ページ' },
    ],
  },
}

export const カスタムセパレーター: Story = {
  args: {
    items: [
      { label: 'ホーム', href: '/' },
      { label: 'プロジェクト', href: '/projects' },
      { label: 'デザインシステム', href: '/projects/design' },
      { label: 'コンポーネント' },
    ],
    separator: '›',
  },
}

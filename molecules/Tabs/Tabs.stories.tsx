import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'コンテンツ切替用のタブコンポーネント。line（アンダーライン型）と contained（塗りつぶし型）の2バリアントを持つ。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px', minWidth: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Tabs>

const tabItems = [
  { id: 'overview', label: '概要', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>概要の内容です。</p> },
  { id: 'details', label: '詳細', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>詳細の内容です。</p> },
  { id: 'settings', label: '設定', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>設定の内容です。</p> },
]

export const Lineバリアント: Story = {
  render: () => <Tabs items={tabItems} variant="line" />,
}

export const Containedバリアント: Story = {
  render: () => <Tabs items={tabItems} variant="contained" />,
}

export const 多タブ5つ: Story = {
  render: () => (
    <Tabs
      variant="line"
      items={[
        { id: 'tab1', label: 'タブ 1', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>タブ1の内容です。</p> },
        { id: 'tab2', label: 'タブ 2', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>タブ2の内容です。</p> },
        { id: 'tab3', label: 'タブ 3', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>タブ3の内容です。</p> },
        { id: 'tab4', label: 'タブ 4', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>タブ4の内容です。</p> },
        { id: 'tab5', label: 'タブ 5', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>タブ5の内容です。</p> },
      ]}
    />
  ),
}

export const Disabledタブあり: Story = {
  render: () => (
    <Tabs
      variant="line"
      items={[
        { id: 'overview', label: '概要', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>概要の内容です。</p> },
        { id: 'details', label: '詳細（無効）', disabled: true, content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>詳細の内容です。</p> },
        { id: 'settings', label: '設定', content: <p style={{ color: 'var(--color-text-sub)', margin: 0 }}>設定の内容です。</p> },
      ]}
    />
  ),
}

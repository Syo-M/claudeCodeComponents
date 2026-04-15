import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '折りたたみ/展開できる UI コンポーネント。FAQ・設定グループで頻出。allowMultiple で複数パネルの同時展開を制御できる。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px', maxWidth: '600px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Accordion>

const accordionItems = [
  { id: 'q1', title: 'よくある質問 1', content: <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>回答内容が入ります。</p> },
  { id: 'q2', title: 'よくある質問 2', defaultOpen: true, content: <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>別の回答内容が入ります。</p> },
  { id: 'q3', title: 'よくある質問 3', content: <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>さらに別の回答内容が入ります。</p> },
]

export const 基本1つのみ展開: Story = {
  render: () => <Accordion items={accordionItems} allowMultiple={false} />,
}

export const 複数同時展開: Story = {
  render: () => <Accordion items={accordionItems} allowMultiple={true} />,
}

export const デフォルト展開済み: Story = {
  render: () => (
    <Accordion
      allowMultiple={false}
      items={[
        { id: 'q1', title: 'よくある質問 1', defaultOpen: true, content: <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>回答内容が入ります。</p> },
        { id: 'q2', title: 'よくある質問 2', content: <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>別の回答内容が入ります。</p> },
        { id: 'q3', title: 'よくある質問 3', content: <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>さらに別の回答内容が入ります。</p> },
      ]}
    />
  ),
}

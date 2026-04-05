import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SortSelector } from './SortSelector'

const meta: Meta<typeof SortSelector> = {
  title: 'Molecules/SortSelector',
  component: SortSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ソート・表示切替に使う横並びボタングループ Molecule。' +
          'RadioGroup よりコンパクトで視覚的に目立つ切替 UI を提供する。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof SortSelector>

export const Default: Story = {
  render: () => {
    const [sort, setSort] = useState('date-desc')
    return (
      <SortSelector
        value={sort}
        onChange={setSort}
        options={[
          { value: 'date-desc', label: '日付が新しい順' },
          { value: 'date-asc',  label: '日付が古い順' },
          { value: 'name-asc',  label: '名前順' },
        ]}
      />
    )
  },
}

export const 二択: Story = {
  render: () => {
    const [view, setView] = useState('grid')
    return (
      <SortSelector
        value={view}
        onChange={setView}
        options={[
          { value: 'grid', label: 'グリッド' },
          { value: 'list', label: 'リスト' },
        ]}
      />
    )
  },
}

export const タブ切替風: Story = {
  render: () => {
    const [tab, setTab] = useState('all')
    return (
      <SortSelector
        value={tab}
        onChange={setTab}
        options={[
          { value: 'all',      label: 'すべて' },
          { value: 'active',   label: '進行中' },
          { value: 'done',     label: '完了' },
          { value: 'archived', label: 'アーカイブ' },
        ]}
      />
    )
  },
}

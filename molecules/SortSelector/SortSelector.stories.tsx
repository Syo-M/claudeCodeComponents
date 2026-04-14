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
          'ソート・表示切替に使う横並びボタングループ Molecule。RadioGroup よりコンパクトで視覚的に目立つ切替 UI を提供する。',
      },
    },
  },
  argTypes: {
    value: { control: 'text' },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof SortSelector>

const sortOptions = [
  { value: 'date-desc', label: '日付が新しい順' },
  { value: 'date-asc',  label: '日付が古い順' },
  { value: 'name-asc',  label: '名前順' },
]

export const Default: Story = {
  args: { value: 'date-desc' },
  render: (args) => {
    const [sort, setSort] = useState(args.value ?? 'date-desc')
    return (
      <SortSelector
        key={args.value}
        value={sort}
        onChange={setSort}
        options={sortOptions}
      />
    )
  },
}

export const 二択: Story = {
  args: { value: 'grid' },
  render: (args) => {
    const [view, setView] = useState(args.value ?? 'grid')
    return (
      <SortSelector
        key={args.value}
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
  args: { value: 'all' },
  render: (args) => {
    const [tab, setTab] = useState(args.value ?? 'all')
    return (
      <SortSelector
        key={args.value}
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

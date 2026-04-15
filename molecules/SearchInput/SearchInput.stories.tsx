import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SearchInput } from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '検索入力コンポーネント。虫眼鏡アイコン・クリアボタンを内包した Molecule。Enterキー送信は日本語IME対応のため実装していない。',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const 基本: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return (
      <div style={{ width: 320 }}>
        <SearchInput
          key={String(args.value)}
          {...args}
          value={value}
          onChange={setValue}
          onSearch={() => alert(`検索: "${value}"`)}
        />
      </div>
    )
  },
  args: {
    placeholder: '検索…',
  },
}

export const ラベルあり: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return (
      <div style={{ width: 320 }}>
        <SearchInput
          key={String(args.value)}
          {...args}
          value={value}
          onChange={setValue}
          onSearch={() => alert(`検索: "${value}"`)}
        />
      </div>
    )
  },
  args: {
    label: 'キーワード',
    id: 'search-with-label',
    placeholder: 'タイトルを入力…',
  },
}

export const 入力済み状態: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 'React コンポーネント')
    return (
      <div style={{ width: 320 }}>
        <SearchInput
          key={String(args.value)}
          {...args}
          value={value}
          onChange={setValue}
          onSearch={() => alert(`検索: "${value}"`)}
        />
      </div>
    )
  },
  args: {
    value: 'React コンポーネント',
    placeholder: '検索…',
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return (
      <div style={{ width: 320 }}>
        <SearchInput
          key={String(args.value)}
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    placeholder: '検索…',
    disabled: true,
  },
}

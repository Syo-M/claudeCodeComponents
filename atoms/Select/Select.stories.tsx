import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    docs: {
      description: { component: 'セレクトボックス Atom。グループ化・プレースホルダー・エラー・ヒントに対応。' },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Select>

const prefectures = [
  { value: 'osaka', label: '大阪府' },
  { value: 'tokyo', label: '東京都' },
  { value: 'kyoto', label: '京都府' },
  { value: 'aichi', label: '愛知県' },
  { value: 'fukuoka', label: '福岡県' },
]

export const 基本: Story = {
  args: {
    label: '都道府県',
    placeholder: '選択してください',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <Select {...args} options={prefectures} value={value} onChange={setValue} />
  },
}

export const 必須: Story = {
  args: {
    label: '都道府県',
    placeholder: '選択してください',
    required: true,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <Select {...args} options={prefectures} value={value} onChange={setValue} />
  },
}

export const グループ付き: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="地域"
        options={[
          { label: '近畿', options: [{ value: 'osaka', label: '大阪府' }, { value: 'kyoto', label: '京都府' }] },
          { label: '関東', options: [{ value: 'tokyo', label: '東京都' }, { value: 'kanagawa', label: '神奈川県' }] },
          { label: '九州', options: [{ value: 'fukuoka', label: '福岡県' }, { value: 'kumamoto', label: '熊本県' }] },
        ]}
        value={value}
        onChange={setValue}
        placeholder="選択してください"
      />
    )
  },
}

export const エラー: Story = {
  args: {
    label: '都道府県',
    error: '選択してください',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <Select {...args} options={prefectures} value={value} onChange={setValue} />
  },
}

export const ヒント付き: Story = {
  args: {
    label: 'タイムゾーン',
    hint: '後から変更できます',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        options={[{ value: 'jst', label: 'Asia/Tokyo (JST)' }, { value: 'utc', label: 'UTC' }]}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const 無効: Story = {
  args: {
    label: '変更不可',
    disabled: true,
  },
  render: (args) => (
    <Select {...args} options={prefectures} value="osaka" onChange={() => {}} />
  ),
}

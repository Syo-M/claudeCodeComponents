import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: '複数行テキスト入力 Atom。ラベル・エラー・ヒントテキスト・文字数カウント付き。',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    showCount: { control: 'boolean' },
    rows: { control: 'number' },
    maxLength: { control: 'number' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const 通常: Story = {
  args: {
    label: 'コメント',
    placeholder: 'テキストを入力してください',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Textarea key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const エラーあり: Story = {
  args: {
    label: '説明',
    value: '短い',
    error: '10文字以上で入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Textarea key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const ヒントあり: Story = {
  args: {
    label: '自己紹介',
    placeholder: '自己紹介を入力してください',
    hint: '200文字以内で入力してください',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Textarea key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const 文字数カウント: Story = {
  args: {
    label: 'ひとこと',
    placeholder: '140文字以内で入力してください',
    maxLength: 140,
    showCount: true,
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Textarea key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const 必須: Story = {
  args: {
    label: 'お問い合わせ内容',
    placeholder: 'お問い合わせ内容を入力してください',
    required: true,
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Textarea key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const Disabled: Story = {
  args: {
    label: '編集不可',
    value: 'この内容は編集できません。',
    disabled: true,
  },
  render: (args) => <Textarea {...args} onChange={() => {}} />,
}

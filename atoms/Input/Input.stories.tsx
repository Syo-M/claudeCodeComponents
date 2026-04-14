import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'テキスト入力 Atom。ラベル・エラー・ヒントテキスト付き。min-height 44px でタッチ操作対応。',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Input>

export const 基本: Story = {
  args: {
    label: '名前',
    placeholder: '入力してください',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Input key={args.value} {...args} value={value} onChange={setValue} />
  },
}

export const 必須: Story = {
  args: {
    label: 'メールアドレス',
    type: 'email',
    placeholder: 'example@mail.com',
    required: true,
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Input {...args} value={value} onChange={setValue} />
  },
}

export const エラー状態: Story = {
  args: {
    label: '名前',
    value: 'a',
    error: '2文字以上で入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Input key={args.value} {...args} value={value} onChange={setValue} />
  },
}

export const ヒントテキスト: Story = {
  args: {
    label: 'パスワード',
    type: 'password',
    hint: '8文字以上で入力してください',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Input {...args} value={value} onChange={setValue} />
  },
}

export const 無効状態: Story = {
  args: {
    label: '編集不可',
    value: '固定値',
    disabled: true,
  },
  render: (args) => <Input {...args} onChange={() => {}} />,
}

export const ラベルなし: Story = {
  args: {
    placeholder: 'ラベルなしの入力欄',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '')
    return <Input {...args} value={value} onChange={setValue} />
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof PasswordInput> = {
  title: 'Molecules/PasswordInput',
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          'パスワードの表示/非表示トグル付き入力欄。目のアイコンボタンをクリックすることでパスワードの表示状態を切り替えられる。',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const デフォルト: Story = {
  args: {
    placeholder: 'パスワードを入力',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <PasswordInput {...args} value={value} onChange={setValue} />
  },
}

export const ラベルあり: Story = {
  args: {
    label: 'パスワード',
    placeholder: '8文字以上',
    required: true,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <PasswordInput id="password-with-label" {...args} value={value} onChange={setValue} />
  },
}

export const エラーあり: Story = {
  args: {
    label: 'パスワード',
    error: 'パスワードは8文字以上で入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState('short')
    return <PasswordInput id="password-error" {...args} value={value} onChange={setValue} />
  },
}

export const Disabled: Story = {
  args: {
    label: 'パスワード（変更不可）',
    disabled: true,
  },
  render: (args) => (
    <PasswordInput id="password-disabled" {...args} value="disabled-password" onChange={() => {}} />
  ),
}

export const 新規パスワード: Story = {
  args: {
    label: '新しいパスワード',
    placeholder: '新しいパスワードを入力',
    required: true,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <PasswordInput id="new-password" {...args} value={value} onChange={setValue} autoComplete="new-password" />
  },
}

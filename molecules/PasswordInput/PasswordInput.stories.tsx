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
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const デフォルト: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="パスワードを入力"
      />
    )
  },
}

export const ラベルあり: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <PasswordInput
        label="パスワード"
        id="password-with-label"
        value={value}
        onChange={setValue}
        placeholder="8文字以上"
        required
      />
    )
  },
}

export const ラベルなし: Story = {
  render: () => {
    const [value, setValue] = useState('password123')
    return (
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="パスワードを入力"
      />
    )
  },
}

export const エラーあり: Story = {
  render: () => {
    const [value, setValue] = useState('short')
    return (
      <PasswordInput
        label="パスワード"
        id="password-error"
        value={value}
        onChange={setValue}
        error="パスワードは8文字以上で入力してください"
      />
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <PasswordInput
      label="パスワード（変更不可）"
      id="password-disabled"
      value="disabled-password"
      onChange={() => {}}
      disabled
    />
  ),
}

export const 新規パスワード: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <PasswordInput
        label="新しいパスワード"
        id="new-password"
        value={value}
        onChange={setValue}
        placeholder="新しいパスワードを入力"
        autoComplete="new-password"
        required
      />
    )
  },
}

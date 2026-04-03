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
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Input>

export const 基本: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <Input label="名前" value={value} onChange={setValue} placeholder="入力してください" />
  },
}

export const 必須: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <Input label="メールアドレス" type="email" value={value} onChange={setValue} required placeholder="example@mail.com" />
  },
}

export const エラー状態: Story = {
  render: () => (
    <Input label="名前" value="a" onChange={() => {}} error="2文字以上で入力してください" />
  ),
}

export const ヒントテキスト: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <Input label="パスワード" type="password" value={value} onChange={setValue} hint="8文字以上で入力してください" />
  },
}

export const 無効状態: Story = {
  render: () => (
    <Input label="編集不可" value="固定値" onChange={() => {}} disabled />
  ),
}

export const ラベルなし: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <Input value={value} onChange={setValue} placeholder="ラベルなしの入力欄" />
  },
}

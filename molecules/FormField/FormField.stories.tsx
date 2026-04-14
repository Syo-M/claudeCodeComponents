import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormField } from './FormField'

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component:
          'label + 任意の入力要素 + error + hint を縦に並べるラッパー。children に Input・Select・Checkbox など任意のフォーム要素を渡して使う。',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    required: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof FormField>

/** インラインスタイルで最小限の input を再現するヘルパー */
function SampleInput({
  id,
  value,
  onChange,
  placeholder,
  disabled,
  hasError,
}: {
  id?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  disabled?: boolean
  hasError?: boolean
}) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={hasError}
      style={{
        width: '100%',
        padding: '0 12px',
        height: '44px',
        fontSize: 'var(--font-size-md)',
        fontFamily: 'inherit',
        border: `1px solid ${hasError ? 'var(--color-error)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-md)',
        background: disabled ? 'var(--color-muted)' : 'var(--color-surface-raised)',
        color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text)',
        outline: 'none',
        boxSizing: 'border-box',
        cursor: disabled ? 'not-allowed' : 'text',
      }}
    />
  )
}

export const 通常: Story = {
  args: {
    label: '名前',
    htmlFor: 'name-normal',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <FormField {...args}>
        <SampleInput id={args.htmlFor} value={value} onChange={setValue} placeholder="山田 太郎" />
      </FormField>
    )
  },
}

export const エラーあり: Story = {
  args: {
    label: 'ユーザー名',
    htmlFor: 'username-error',
    error: '2文字以上で入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState('a')
    return (
      <FormField {...args}>
        <SampleInput id={args.htmlFor} value={value} onChange={setValue} hasError={!!args.error} />
      </FormField>
    )
  },
}

export const ヒントあり: Story = {
  args: {
    label: 'パスワード',
    htmlFor: 'pw-hint',
    hint: '8文字以上、英数字を含めてください',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <FormField {...args}>
        <SampleInput id={args.htmlFor} value={value} onChange={setValue} placeholder="パスワードを入力" />
      </FormField>
    )
  },
}

export const 必須マーク: Story = {
  args: {
    label: 'メールアドレス',
    htmlFor: 'email-required',
    required: true,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <FormField {...args}>
        <SampleInput id={args.htmlFor} value={value} onChange={setValue} placeholder="example@mail.com" />
      </FormField>
    )
  },
}

export const Disabled状態のInput: Story = {
  args: {
    label: '編集不可フィールド',
    htmlFor: 'disabled-field',
    hint: 'このフィールドは編集できません',
  },
  render: (args) => (
    <FormField {...args}>
      <SampleInput id={args.htmlFor} value="変更できない値" onChange={() => {}} disabled />
    </FormField>
  ),
}

export const エラーとヒントの排他: Story = {
  args: {
    label: '確認用フィールド',
    htmlFor: 'exclusive-field',
    error: 'この値は使用できません',
    hint: 'このヒントはエラー時には表示されません',
  },
  render: (args) => {
    const [value, setValue] = useState('test')
    return (
      <FormField {...args}>
        <SampleInput id={args.htmlFor} value={value} onChange={setValue} hasError={!!args.error} />
      </FormField>
    )
  },
}

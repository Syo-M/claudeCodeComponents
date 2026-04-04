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
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormField label="名前" htmlFor="name-normal">
        <SampleInput id="name-normal" value={value} onChange={setValue} placeholder="山田 太郎" />
      </FormField>
    )
  },
}

export const エラーあり: Story = {
  render: () => {
    const [value, setValue] = useState('a')
    return (
      <FormField label="ユーザー名" htmlFor="username-error" error="2文字以上で入力してください">
        <SampleInput id="username-error" value={value} onChange={setValue} hasError />
      </FormField>
    )
  },
}

export const ヒントあり: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormField label="パスワード" htmlFor="pw-hint" hint="8文字以上、英数字を含めてください">
        <SampleInput id="pw-hint" value={value} onChange={setValue} placeholder="パスワードを入力" />
      </FormField>
    )
  },
}

export const 必須マーク: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormField label="メールアドレス" htmlFor="email-required" required>
        <SampleInput id="email-required" value={value} onChange={setValue} placeholder="example@mail.com" />
      </FormField>
    )
  },
}

export const Disabled状態のInput: Story = {
  render: () => (
    <FormField label="編集不可フィールド" htmlFor="disabled-field" hint="このフィールドは編集できません">
      <SampleInput id="disabled-field" value="変更できない値" onChange={() => {}} disabled />
    </FormField>
  ),
}

export const エラーとヒントの排他: Story = {
  render: () => {
    const [value, setValue] = useState('test')
    return (
      <FormField
        label="確認用（エラーがあるのでヒントは非表示）"
        htmlFor="exclusive-field"
        error="この値は使用できません"
        hint="このヒントはエラー時には表示されません"
      >
        <SampleInput id="exclusive-field" value={value} onChange={setValue} hasError />
      </FormField>
    )
  },
}

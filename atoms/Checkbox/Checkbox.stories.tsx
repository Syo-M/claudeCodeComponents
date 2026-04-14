import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: { component: 'カスタムデザインのチェックボックス。通常・エラー・中間・無効状態に対応。' },
    },
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const 基本: Story = {
  args: {
    label: '利用規約に同意する',
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Checkbox key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const チェック済み: Story = {
  args: { label: 'チェック済み', checked: true },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? true)
    return <Checkbox key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const 中間状態: Story = {
  args: { label: '一部選択中', checked: false, indeterminate: true },
  render: (args) => <Checkbox {...args} onChange={() => {}} />,
}

export const エラー: Story = {
  args: { label: '同意が必要です', checked: false, error: '同意してください' },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Checkbox key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const ヒント付き: Story = {
  args: {
    label: 'メールマガジンを受け取る',
    checked: false,
    hint: 'いつでも解除できます',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Checkbox key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const 無効: Story = {
  args: { label: '変更不可', checked: true, disabled: true },
  render: (args) => <Checkbox {...args} onChange={() => {}} />,
}

export const 複数チェックボックス: Story = {
  render: () => {
    const [values, setValues] = useState({ a: false, b: true, c: false })
    const toggle = (key: keyof typeof values) =>
      setValues(prev => ({ ...prev, [key]: !prev[key] }))
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox label="React" checked={values.a} onChange={() => toggle('a')} />
        <Checkbox label="Next.js" checked={values.b} onChange={() => toggle('b')} />
        <Checkbox label="Astro" checked={values.c} onChange={() => toggle('c')} />
      </div>
    )
  },
}

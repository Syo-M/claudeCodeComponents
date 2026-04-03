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
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const 基本: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return <Checkbox label="利用規約に同意する" checked={checked} onChange={setChecked} />
  },
}

export const チェック済み: Story = {
  render: () => <Checkbox label="チェック済み" checked={true} onChange={() => {}} />,
}

export const 中間状態: Story = {
  render: () => <Checkbox label="一部選択中" checked={false} onChange={() => {}} indeterminate={true} />,
}

export const エラー: Story = {
  render: () => <Checkbox label="同意が必要です" checked={false} onChange={() => {}} error="同意してください" />,
}

export const ヒント付き: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return <Checkbox label="メールマガジンを受け取る" checked={checked} onChange={setChecked} hint="いつでも解除できます" />
  },
}

export const 無効: Story = {
  render: () => <Checkbox label="変更不可" checked={true} onChange={() => {}} disabled />,
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

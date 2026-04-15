import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NumberInput } from './NumberInput'

const meta: Meta<typeof NumberInput> = {
  title: 'Atoms/NumberInput',
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component: '数値入力 Atom。＋/－ボタン付き、min/max による操作制限、小数点対応。',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    error: { control: 'text' },
    hint: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof NumberInput>

export const デフォルト: Story = {
  args: {
    label: '数量',
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    hint: '0〜100の範囲で入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0)
    return <NumberInput key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const 最小最大制限: Story = {
  args: {
    label: '年齢',
    value: 20,
    min: 18,
    max: 65,
    step: 1,
    hint: '18〜65の範囲で入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 20)
    return <NumberInput key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const 小数点step: Story = {
  args: {
    label: '価格（USD）',
    value: 1.0,
    min: 0,
    max: 10,
    step: 0.1,
    hint: '0.1単位で調整できます',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 1.0)
    return <NumberInput key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const エラーあり: Story = {
  args: {
    label: '在庫数',
    value: -1,
    min: 0,
    error: '0以上の値を入力してください',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? -1)
    return <NumberInput key={String(args.value)} {...args} value={value} onChange={setValue} />
  },
}

export const Disabled: Story = {
  args: {
    label: '固定値',
    value: 42,
    disabled: true,
    hint: '変更できません',
  },
  render: (args) => <NumberInput {...args} onChange={() => {}} />,
}

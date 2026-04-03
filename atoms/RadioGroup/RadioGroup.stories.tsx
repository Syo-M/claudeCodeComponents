import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: { component: 'ラジオボタングループ Atom。縦・横並び、ヒント付き、エラー状態に対応。' },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const planOptions = [
  { value: 'free', label: '無料プラン', hint: '月3件まで利用可能' },
  { value: 'pro', label: 'Proプラン', hint: '無制限・¥980/月' },
  { value: 'team', label: 'チームプラン', hint: '最大10名・¥4,800/月' },
]

export const 縦並び: Story = {
  render: () => {
    const [value, setValue] = useState('free')
    return <RadioGroup name="plan" legend="プランを選択" options={planOptions} value={value} onChange={setValue} />
  },
}

export const 横並び: Story = {
  render: () => {
    const [value, setValue] = useState('male')
    return (
      <RadioGroup
        name="gender"
        legend="性別"
        options={[
          { value: 'male', label: '男性' },
          { value: 'female', label: '女性' },
          { value: 'other', label: 'その他' },
        ]}
        value={value}
        onChange={setValue}
        inline
      />
    )
  },
}

export const エラー: Story = {
  render: () => (
    <RadioGroup name="plan-err" legend="プランを選択" options={planOptions} value="" onChange={() => {}} error="選択してください" />
  ),
}

export const 一部無効: Story = {
  render: () => {
    const [value, setValue] = useState('free')
    return (
      <RadioGroup
        name="plan-disabled"
        legend="プランを選択"
        options={[
          { value: 'free', label: '無料プラン' },
          { value: 'pro', label: 'Proプラン（準備中）', disabled: true },
          { value: 'team', label: 'チームプラン（準備中）', disabled: true },
        ]}
        value={value}
        onChange={setValue}
      />
    )
  },
}

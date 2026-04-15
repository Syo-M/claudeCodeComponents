import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'トグルスイッチ Atom。カスタム UI + ネイティブ checkbox による ARIA 対応実装。',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Switch>

export const デフォルト: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Switch key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const ラベルあり: Story = {
  args: {
    checked: false,
    label: '通知を受け取る',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Switch key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const smサイズ: Story = {
  args: {
    checked: false,
    label: 'コンパクト',
    size: 'sm',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Switch key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const ON状態: Story = {
  args: {
    checked: true,
    label: 'ダークモード',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? true)
    return <Switch key={String(args.checked)} {...args} checked={checked} onChange={setChecked} />
  },
}

export const Disabled: Story = {
  args: {
    checked: false,
    label: '変更不可',
    disabled: true,
  },
  render: (args) => <Switch {...args} onChange={() => {}} />,
}

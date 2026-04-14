import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: { component: 'レンジスライダー。進捗バー付きの range input。シークバー・音量調整・設定値の調整に使える。' },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    color: { control: 'color' },
    trackColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '16px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => {
    const [val, setVal] = useState(args.value ?? 40)
    return (
      <div>
        <Slider key={args.value} {...args} value={val} onChange={setVal} aria-label="スライダー" />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>値: {val}</p>
      </div>
    )
  },
}

export const シークバー: Story = {
  args: {
    value: 73,
    min: 0,
    max: 240,
    step: 1,
  },
  render: (args) => {
    const [sec, setSec] = useState(args.value ?? 73)
    const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
    return (
      <div style={{ maxWidth: '400px' }}>
        <Slider key={args.value} {...args} value={sec} onChange={setSec} aria-label="シーク" />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#888', marginTop: '4px' }}>
          <span>{fmt(sec)}</span>
          <span>{fmt(args.max ?? 240)}</span>
        </div>
      </div>
    )
  },
}

export const カスタムカラー: Story = {
  render: () => {
    const [val, setVal] = useState(60)
    return (
      <div>
        <Slider value={val} onChange={setVal} color="#e74c3c" aria-label="赤" />
        <div style={{ height: '12px' }} />
        <Slider value={val} onChange={setVal} color="#2ecc71" aria-label="緑" />
        <div style={{ height: '12px' }} />
        <Slider value={val} onChange={setVal} color="#3498db" aria-label="青" />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>値: {val}</p>
      </div>
    )
  },
}

export const 無効: Story = {
  args: {
    value: 50,
    disabled: true,
  },
  render: (args) => <Slider {...args} onChange={() => {}} aria-label="無効" />,
}

export const 小数ステップ: Story = {
  args: {
    value: 0.5,
    min: 0,
    max: 1,
    step: 0.01,
  },
  render: (args) => {
    const [val, setVal] = useState(args.value ?? 0.5)
    return (
      <div>
        <Slider key={args.value} {...args} value={val} onChange={setVal} aria-label="透明度" />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>透明度: {val.toFixed(2)}</p>
      </div>
    )
  },
}

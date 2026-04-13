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
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState(40)
    return (
      <div style={{ padding: '16px', maxWidth: '360px' }}>
        <Slider value={val} onChange={setVal} aria-label="デフォルト" />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>値: {val}</p>
      </div>
    )
  },
}

export const シークバー: Story = {
  render: () => {
    const [sec, setSec] = useState(73)
    const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
    return (
      <div style={{ padding: '16px', maxWidth: '400px' }}>
        <Slider value={sec} min={0} max={240} step={1} onChange={setSec} aria-label="シーク" />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#888', marginTop: '4px' }}>
          <span>{fmt(sec)}</span>
          <span>{fmt(240)}</span>
        </div>
      </div>
    )
  },
}

export const カスタムカラー: Story = {
  render: () => {
    const [val, setVal] = useState(60)
    return (
      <div style={{ padding: '16px', maxWidth: '360px' }}>
        <Slider value={val} onChange={setVal} color="#e74c3c" aria-label="赤" />
        <div style={{ height: '12px' }} />
        <Slider value={val} onChange={setVal} color="#2ecc71" aria-label="緑" />
        <div style={{ height: '12px' }} />
        <Slider value={val} onChange={setVal} color="#3498db" aria-label="青" />
      </div>
    )
  },
}

export const 無効: Story = {
  render: () => (
    <div style={{ padding: '16px', maxWidth: '360px' }}>
      <Slider value={50} onChange={() => {}} disabled aria-label="無効" />
    </div>
  ),
}

export const 小数ステップ: Story = {
  render: () => {
    const [val, setVal] = useState(0.5)
    return (
      <div style={{ padding: '16px', maxWidth: '360px' }}>
        <Slider value={val} min={0} max={1} step={0.01} onChange={setVal} aria-label="透明度" />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>透明度: {val.toFixed(2)}</p>
      </div>
    )
  },
}

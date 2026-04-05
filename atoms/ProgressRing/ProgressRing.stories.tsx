import type { Meta, StoryObj } from '@storybook/react'
import { ProgressRing } from './ProgressRing'

const meta: Meta<typeof ProgressRing> = {
  title: 'Atoms/ProgressRing',
  component: ProgressRing,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SVG を使った円形プログレスインジケーター Atom。' +
          '`progress`（0〜1）・`size`・`color` などを Props で指定できる。' +
          '`children` を渡すと中央に任意コンテンツを表示できる。',
      },
    },
  },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    color: { control: 'color' },
    trackColor: { control: 'color' },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ProgressRing>

export const Default: Story = {
  args: { progress: 0.6, size: 80, strokeWidth: 8 },
}

export const 中央テキスト付き: Story = {
  args: {
    progress: 0.75,
    size: 100,
    strokeWidth: 8,
    children: <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>75%</span>,
  },
}

export const タイマー風: Story = {
  args: {
    progress: 0.4,
    size: 128,
    strokeWidth: 8,
    color: '#a07060',
    children: <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#a07060' }}>24:12</span>,
  },
}

export const 全サイズ: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <ProgressRing progress={0.5} size={40}  strokeWidth={4} />
      <ProgressRing progress={0.5} size={64}  strokeWidth={6} />
      <ProgressRing progress={0.5} size={96}  strokeWidth={8} />
      <ProgressRing progress={0.5} size={128} strokeWidth={10} />
    </div>
  ),
}

export const 各進捗値: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {[0, 0.25, 0.5, 0.75, 1].map((p) => (
        <ProgressRing key={p} progress={p} size={72} strokeWidth={7}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{Math.round(p * 100)}%</span>
        </ProgressRing>
      ))}
    </div>
  ),
}

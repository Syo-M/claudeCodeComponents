import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PlayButton } from './PlayButton'

const meta: Meta<typeof PlayButton> = {
  title: 'Atoms/PlayButton',
  component: PlayButton,
  parameters: {
    docs: {
      description: { component: '再生/一時停止トグルボタン。3サイズ対応。音楽・動画プレイヤーの中心的なコントロール。' },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isPlaying: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof PlayButton>

export const 停止中: Story = {
  args: { isPlaying: false, onClick: () => {} },
}

export const 再生中: Story = {
  args: { isPlaying: true, onClick: () => {} },
}

export const インタラクティブ: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false)
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
        <PlayButton isPlaying={playing} onClick={() => setPlaying(!playing)} />
        <span style={{ fontSize: '14px', color: '#666' }}>{playing ? '再生中' : '停止中'}</span>
      </div>
    )
  },
}

export const 全サイズ: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false)
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
        <PlayButton size="sm" isPlaying={playing} onClick={() => setPlaying(!playing)} />
        <PlayButton size="md" isPlaying={playing} onClick={() => setPlaying(!playing)} />
        <PlayButton size="lg" isPlaying={playing} onClick={() => setPlaying(!playing)} />
      </div>
    )
  },
}

export const 無効: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
      <PlayButton isPlaying={false} onClick={() => {}} disabled />
      <PlayButton isPlaying={true} onClick={() => {}} disabled />
    </div>
  ),
}

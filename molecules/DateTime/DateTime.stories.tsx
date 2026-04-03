import type { Meta, StoryObj } from '@storybook/react'
import { DateTime } from './DateTime'

const meta: Meta<typeof DateTime> = {
  title: 'Molecules/DateTime',
  component: DateTime,
  parameters: {
    docs: {
      description: {
        component: 'リアルタイムで更新される日付・時刻表示 Molecule。1秒ごとに自動更新。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof DateTime>

export const 日本語: Story = {
  args: { locale: 'ja-JP', showSeconds: true },
}

export const 秒なし: Story = {
  args: { locale: 'ja-JP', showSeconds: false },
}

export const 英語: Story = {
  args: { locale: 'en-US', showSeconds: true },
}

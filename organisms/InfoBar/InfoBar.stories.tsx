import type { Meta, StoryObj } from '@storybook/react'
import { InfoBar } from './InfoBar'

const meta: Meta<typeof InfoBar> = {
  title: 'Organisms/InfoBar',
  component: InfoBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'DateTime + WeatherDisplay を組み合わせた情報バー Organism。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof InfoBar>

export const 大阪: Story = { args: {} }
export const 東京: Story = { args: { latitude: 35.6895, longitude: 139.6917, locationLabel: '東京' } }
export const 秒なし: Story = { args: { showSeconds: false } }

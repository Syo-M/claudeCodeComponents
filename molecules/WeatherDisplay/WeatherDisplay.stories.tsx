import type { Meta, StoryObj } from '@storybook/react'
import { WeatherDisplay } from './WeatherDisplay'

const meta: Meta<typeof WeatherDisplay> = {
  title: 'Molecules/WeatherDisplay',
  component: WeatherDisplay,
  parameters: {
    docs: {
      description: {
        component: 'Open-Meteo API で今日の天気を取得して表示する Molecule。APIキー不要。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof WeatherDisplay>

export const 大阪: Story = { args: {} }
export const 東京: Story = { args: { latitude: 35.6895, longitude: 139.6917, locationLabel: '東京' } }
export const 札幌: Story = { args: { latitude: 43.0642, longitude: 141.3469, locationLabel: '札幌' } }

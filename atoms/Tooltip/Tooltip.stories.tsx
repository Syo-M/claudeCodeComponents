import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const triggerStyle: React.CSSProperties = {
  padding: '8px 16px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  background: '#fff',
  cursor: 'default',
  fontSize: '14px',
}

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'ホバー時にツールチップを表示する Atom。CSS hover で制御。placement で表示位置を切り替え可能。',
      },
    },
  },
  argTypes: {
    content: { control: 'text' },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const 上: Story = {
  args: {
    content: 'ツールチップのテキスト',
    placement: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <button style={triggerStyle}>ホバーしてください</button>
    </Tooltip>
  ),
}

export const 下: Story = {
  args: {
    content: '下に表示されます',
    placement: 'bottom',
  },
  render: (args) => (
    <Tooltip {...args}>
      <button style={triggerStyle}>ホバーしてください</button>
    </Tooltip>
  ),
}

export const 左: Story = {
  args: {
    content: '左に表示されます',
    placement: 'left',
  },
  render: (args) => (
    <Tooltip {...args}>
      <button style={triggerStyle}>ホバーしてください</button>
    </Tooltip>
  ),
}

export const 右: Story = {
  args: {
    content: '右に表示されます',
    placement: 'right',
  },
  render: (args) => (
    <Tooltip {...args}>
      <button style={triggerStyle}>ホバーしてください</button>
    </Tooltip>
  ),
}

export const Disabled: Story = {
  args: {
    content: 'このツールチップは表示されません',
    placement: 'top',
    disabled: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <button style={triggerStyle}>ホバーしても何も出ません</button>
    </Tooltip>
  ),
}

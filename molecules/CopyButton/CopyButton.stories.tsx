import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from './CopyButton'

const meta: Meta<typeof CopyButton> = {
  title: 'Molecules/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'テキストをクリップボードにコピーし、一定時間「コピー済み」フィードバックを表示する Molecule。' +
          'PromptPreview・シェアURL・コードスニペットコピーなどに使う。',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    duration: { control: 'number' },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {
  args: {
    text: 'サンプルテキスト',
    label: 'コピー',
    copiedLabel: 'コピー済み',
  },
}

export const Small: Story = {
  args: {
    text: 'small copy',
    size: 'sm',
  },
}

export const 無効状態: Story = {
  args: {
    text: '',
    disabled: true,
  },
}

export const プロンプトコピー: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px', fontSize: '0.85rem', color: '#444' }}>
        short hair, standing pose, blue sky background, natural lighting, 4k, photorealistic
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CopyButton text="short hair, standing pose, blue sky background, natural lighting, 4k, photorealistic" />
      </div>
    </div>
  ),
}

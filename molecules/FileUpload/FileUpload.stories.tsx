import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'Molecules/FileUpload',
  component: FileUpload,
  parameters: {
    docs: {
      description: {
        component: 'ドラッグ＆ドロップ対応のファイル入力コンポーネント。クリックまたはドラッグでファイルを選択できる。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px', maxWidth: '480px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const 基本: Story = {
  render: () => (
    <FileUpload onFiles={(files) => console.log('選択されたファイル:', files.map(f => f.name))} />
  ),
}

export const 複数ファイル: Story = {
  render: () => (
    <FileUpload
      multiple
      label="複数のファイルをドラッグ＆ドロップ、またはクリックして選択"
      onFiles={(files) => console.log('選択されたファイル:', files.map(f => f.name))}
    />
  ),
}

export const 画像のみ: Story = {
  render: () => (
    <FileUpload
      accept="image/*"
      onFiles={(files) => console.log('選択された画像:', files.map(f => f.name))}
    />
  ),
}

export const サイズ制限あり: Story = {
  render: () => (
    <FileUpload
      maxSizeMB={1}
      onFiles={(files) => console.log('選択されたファイル:', files.map(f => f.name))}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <FileUpload
      disabled
      onFiles={() => {}}
    />
  ),
}

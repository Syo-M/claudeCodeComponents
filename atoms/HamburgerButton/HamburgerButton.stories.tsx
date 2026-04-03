import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { HamburgerButton } from './HamburgerButton'

const meta: Meta<typeof HamburgerButton> = {
  title: 'Atoms/HamburgerButton',
  component: HamburgerButton,
  parameters: {
    docs: {
      description: { component: 'ドロワーメニュー用ハンバーガーボタン。クリックで3本線 ↔ × にアニメーション。aria-expanded 対応。' },
    },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof HamburgerButton>

export const インタラクティブ: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(o => !o)} />
        <span style={{ fontSize: '14px', color: '#8C8078' }}>
          {isOpen ? 'メニュー開いています' : 'メニュー閉じています'}
        </span>
      </div>
    )
  },
}

export const 閉じた状態: Story = {
  args: { isOpen: false, onClick: () => {} },
}

export const 開いた状態: Story = {
  args: { isOpen: true, onClick: () => {} },
}

export const サイズ比較: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ textAlign: 'center' }}>
          <HamburgerButton isOpen={open1} onClick={() => setOpen1(o => !o)} size={36} />
          <div style={{ fontSize: '12px', color: '#8C8078', marginTop: '4px' }}>36px</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <HamburgerButton isOpen={open2} onClick={() => setOpen2(o => !o)} size={44} />
          <div style={{ fontSize: '12px', color: '#8C8078', marginTop: '4px' }}>44px（デフォルト）</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <HamburgerButton isOpen={open3} onClick={() => setOpen3(o => !o)} size={56} />
          <div style={{ fontSize: '12px', color: '#8C8078', marginTop: '4px' }}>56px</div>
        </div>
      </div>
    )
  },
}

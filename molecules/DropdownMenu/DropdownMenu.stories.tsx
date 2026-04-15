import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenu } from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          '汎用ドロップダウンメニュー。任意のトリガー要素と複数のメニューアイテムを受け取り、クリックやキーボードで開閉できる。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

const TriggerButton = ({ label = 'メニューを開く' }) => (
  <button
    style={{
      padding: '8px 16px',
      background: 'var(--color-accent)',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
    }}
  >
    {label} ▾
  </button>
)

const baseItems = [
  { id: 'edit', label: '編集', onClick: () => alert('編集') },
  { id: 'copy', label: 'コピー', onClick: () => alert('コピー') },
  { id: 'share', label: '共有', onClick: () => alert('共有') },
]

export const 基本: Story = {
  render: () => (
    <DropdownMenu
      trigger={<TriggerButton />}
      items={baseItems}
    />
  ),
}

export const 右寄せ: Story = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <DropdownMenu
        trigger={<TriggerButton label="右寄せメニュー" />}
        items={baseItems}
        align="right"
      />
    </div>
  ),
}

export const Dangerアイテムあり: Story = {
  render: () => (
    <DropdownMenu
      trigger={<TriggerButton label="操作" />}
      items={[
        { id: 'edit', label: '編集', onClick: () => alert('編集') },
        { id: 'archive', label: 'アーカイブ', onClick: () => alert('アーカイブ') },
        { id: 'delete', label: '削除', onClick: () => alert('削除'), variant: 'danger' },
      ]}
    />
  ),
}

export const アイコンあり: Story = {
  render: () => (
    <DropdownMenu
      trigger={<TriggerButton label="アイコン付き" />}
      items={[
        {
          id: 'edit',
          label: '編集',
          icon: (
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M11 2l3 3-9 9H2v-3L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          ),
          onClick: () => alert('編集'),
        },
        {
          id: 'copy',
          label: 'コピー',
          icon: (
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          ),
          onClick: () => alert('コピー'),
        },
        {
          id: 'delete',
          label: '削除',
          icon: (
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          onClick: () => alert('削除'),
          variant: 'danger' as const,
        },
        {
          id: 'disabled',
          label: '無効なアイテム',
          icon: (
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
          onClick: () => alert('無効'),
          disabled: true,
        },
      ]}
    />
  ),
}

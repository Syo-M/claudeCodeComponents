import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '折りたたみ可能なサイドナビゲーション。アイコン＋ラベルのメニュー項目、サブメニュー、ロゴエリアを持つ。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

function HomeIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
}

function FolderIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20}><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
}

function SettingsIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20}><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
}

function UserIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20}><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
}

const navItems = [
  { id: 'home', label: 'ホーム', icon: <HomeIcon />, href: '#', active: true },
  {
    id: 'projects', label: 'プロジェクト', icon: <FolderIcon />,
    children: [
      { id: 'active', label: '進行中', href: '#' },
      { id: 'done', label: '完了', href: '#' },
      { id: 'archived', label: 'アーカイブ', href: '#' },
    ]
  },
  { id: 'users', label: 'ユーザー管理', icon: <UserIcon />, href: '#' },
  { id: 'settings', label: '設定', icon: <SettingsIcon />, href: '#' },
]

export const 展開: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '400px', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
      <Sidebar
        items={navItems}
        logo={<span style={{ fontWeight: 600, fontSize: '16px' }}>MyApp</span>}
      />
      <div style={{ flex: 1, padding: '24px', color: 'var(--color-text-sub)', fontSize: '14px' }}>
        コンテンツエリア
      </div>
    </div>
  ),
}

export const 折りたたみ: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '400px', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
      <Sidebar
        items={navItems}
        collapsed
        logo={<span style={{ fontWeight: 600 }}>MyApp</span>}
      />
      <div style={{ flex: 1, padding: '24px', color: 'var(--color-text-sub)', fontSize: '14px' }}>
        コンテンツエリア（アイコンにホバーすると名前が表示されます）
      </div>
    </div>
  ),
}

export const インタラクティブ: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div style={{ display: 'flex', height: '480px', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
        <Sidebar
          items={navItems}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          logo={<span style={{ fontWeight: 600, fontSize: '16px' }}>MyApp</span>}
          footer={
            <div style={{ fontSize: '12px', color: 'var(--color-text-disabled)' }}>
              v1.0.0
            </div>
          }
        />
        <div style={{ flex: 1, padding: '24px', color: 'var(--color-text-sub)', fontSize: '14px' }}>
          ← 矢印ボタンでサイドバーを折りたたむことができます
        </div>
      </div>
    )
  },
}

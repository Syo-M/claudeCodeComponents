import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from './PageHeader'

const meta: Meta<typeof PageHeader> = {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'アプリのページ上部ヘッダー。ブランド名・ナビゲーション・右端アクションを組み合わせる Organism。フレームワーク非依存の通常 <a> タグを使用。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeader>

/** ブランド名のみ */
export const ブランドのみ: Story = {
  args: {
    brand: 'MyApp',
  },
}

/** ナビゲーションあり */
export const ナビあり: Story = {
  args: {
    brand: 'MyApp',
    nav: [
      { label: 'ダッシュボード', href: '/', active: true },
      { label: 'レポート', href: '/reports' },
      { label: '設定', href: '/settings' },
    ],
  },
}

/** 右端アクション（UserMenu 風ダミーボタン）あり */
export const アクションあり: Story = {
  args: {
    brand: 'MyApp',
    actions: (
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '9999px',
          border: '1.5px solid #DED0C0',
          background: '#FFFFFF',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
          color: '#1C1917',
        }}
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#A47864',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 700,
          }}
        >
          山
        </span>
        山田 太郎
      </button>
    ),
  },
}

/** 全オプション組み合わせ（ナビ + アクション） */
export const 全オプション: Story = {
  args: {
    brand: 'MyApp',
    brandHref: '/',
    nav: [
      { label: 'ダッシュボード', href: '/', active: true },
      { label: 'レポート', href: '/reports' },
      { label: 'プロジェクト', href: '/projects' },
      { label: '設定', href: '/settings' },
    ],
    actions: (
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '9999px',
          border: '1.5px solid #DED0C0',
          background: '#FFFFFF',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
          color: '#1C1917',
        }}
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#A47864',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 700,
          }}
        >
          山
        </span>
        山田 太郎
      </button>
    ),
  },
}

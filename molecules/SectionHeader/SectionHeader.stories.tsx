import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from './SectionHeader'

const meta: Meta<typeof SectionHeader> = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  parameters: {
    docs: {
      description: {
        component:
          'セクションタイトル・サブタイトル・右側アクションボタン領域の組み合わせ。h1〜h4 の見出しレベルに対応。',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SectionHeader>

// タイトルのみ
export const タイトルのみ: Story = {
  args: {
    title: 'セクションタイトル',
  },
}

// サブタイトルあり
export const サブタイトルあり: Story = {
  args: {
    title: 'プロジェクト一覧',
    subtitle: '進行中のプロジェクトをまとめて確認できます',
  },
}

// アクションボタンあり
export const アクションあり: Story = {
  args: {
    title: 'メンバー',
    subtitle: 'このプロジェクトに参加しているメンバー',
    action: (
      <button
        style={{
          padding: '6px 14px',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          color: 'var(--color-text)',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        + メンバーを追加
      </button>
    ),
  },
}

// divider あり
export const ディバイダーあり: Story = {
  args: {
    title: '設定',
    subtitle: 'アカウントの各種設定を変更します',
    divider: true,
  },
}

// level: h1
export const LevelH1: Story = {
  name: 'level: h1',
  args: {
    title: 'ページタイトル（h1）',
    level: 1,
  },
}

// level: h2
export const LevelH2: Story = {
  name: 'level: h2（デフォルト）',
  args: {
    title: 'セクション見出し（h2）',
    level: 2,
  },
}

// level: h3
export const LevelH3: Story = {
  name: 'level: h3',
  args: {
    title: 'サブセクション（h3）',
    level: 3,
  },
}

// level: h4
export const LevelH4: Story = {
  name: 'level: h4',
  args: {
    title: '小見出し（h4）',
    level: 4,
  },
}

// 全オプション組み合わせ
export const 全オプション: Story = {
  args: {
    title: '最近のアクティビティ',
    subtitle: '過去7日間のアクティビティを表示しています',
    level: 2,
    divider: true,
    action: (
      <button
        style={{
          padding: '6px 14px',
          borderRadius: '8px',
          border: 'none',
          background: 'var(--color-accent)',
          color: 'var(--color-accent-text)',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 700,
        }}
      >
        すべて見る
      </button>
    ),
  },
}

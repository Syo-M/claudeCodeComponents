import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: 'データが0件のときに表示する空状態UI。アイコン・タイトル・説明・CTAをセットで表示。',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', maxWidth: '480px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof EmptyState>

// タイトルのみ
export const タイトルのみ: Story = {
  args: {
    title: 'データがありません',
  },
}

// 説明文あり
export const 説明文あり: Story = {
  args: {
    title: 'まだアイテムがありません',
    description: 'アイテムを追加すると、ここに一覧が表示されます。',
  },
}

// アクションボタンあり
export const アクションボタンあり: Story = {
  args: {
    title: 'タスクがありません',
    description: '新しいタスクを作成して始めましょう。',
    action: (
      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          background: 'var(--color-accent)',
          color: 'var(--color-accent-text)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '14px',
        }}
      >
        + タスクを追加
      </button>
    ),
  },
}

// カスタムアイコン
export const カスタムアイコン: Story = {
  args: {
    icon: <span style={{ fontSize: '24px' }}>📭</span>,
    title: 'メッセージがありません',
    description: '受信したメッセージはここに表示されます。',
  },
}

// size: sm
export const サイズSm: Story = {
  name: 'size: sm',
  args: {
    title: '結果がありません',
    description: '条件を変えて再検索してください。',
    size: 'sm',
  },
}

// size: md（デフォルト）
export const サイズMd: Story = {
  name: 'size: md（デフォルト）',
  args: {
    title: 'データがありません',
    description: '新しいデータを追加してください。',
    size: 'md',
  },
}

// size: lg
export const サイズLg: Story = {
  name: 'size: lg',
  args: {
    title: 'コンテンツがありません',
    description: 'コンテンツを作成すると、ここに表示されます。まず最初のアイテムを追加してみましょう。',
    action: (
      <button
        style={{
          padding: '10px 24px',
          borderRadius: '8px',
          border: 'none',
          background: 'var(--color-accent)',
          color: 'var(--color-accent-text)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '16px',
        }}
      >
        作成する
      </button>
    ),
    size: 'lg',
  },
}

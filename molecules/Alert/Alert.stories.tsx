import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ページ内に埋め込むインライン通知バナー。info / success / warning / error の4バリアントを持つ。Toast とは異なり、ページコンテンツの一部として表示する。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: '情報',
    children: '新しいバージョンがリリースされました。設定から更新できます。',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: '保存しました',
    children: '変更内容が正常に保存されました。',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: '注意',
    children: 'この操作は元に戻せません。実行前に内容を確認してください。',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'エラーが発生しました',
    children: 'ファイルの読み込みに失敗しました。もう一度お試しください。',
  },
}

export const タイトルなし: Story = {
  args: {
    variant: 'info',
    children: 'タイトルなしで本文のみ表示するパターンです。',
  },
}

export const 閉じるボタンあり: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true)
    return (
      <div style={{ width: 480 }}>
        {visible ? (
          <Alert
            {...args}
            onClose={() => setVisible(false)}
          />
        ) : (
          <button
            type="button"
            onClick={() => setVisible(true)}
            style={{
              padding: '8px 16px',
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-sub)',
            }}
          >
            アラートを再表示
          </button>
        )}
      </div>
    )
  },
  args: {
    variant: 'warning',
    title: '閉じることができます',
    children: '右端の × ボタンをクリックするとアラートが非表示になります。',
  },
}

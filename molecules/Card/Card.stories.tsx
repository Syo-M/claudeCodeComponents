import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '汎用カードコンポーネント。default / outlined / elevated の3バリアントと、sm / md / lg / none のパディング制御を持つ。Card.Header / Card.Body / Card.Footer の複合コンポーネントパターンにも対応。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const デフォルト: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    children: 'カードのコンテンツがここに入ります。テキスト、画像、その他の要素を自由に配置できます。',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: '枠線を強調したアウトラインスタイルのカードです。',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: 'ドロップシャドウで浮き上がって見える Elevated スタイルのカードです。',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
}

export const クリッカブル: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <Card {...args} onClick={() => alert('カードがクリックされました')}>
        <p style={{ margin: 0, color: 'var(--color-text)' }}>
          クリックできるカードです。ホバー時にシャドウと移動のアニメーションがつきます。
        </p>
        <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--color-text-sub)' }}>
          button タグとしてレンダリングされ、キーボード操作にも対応しています。
        </p>
      </Card>
    </div>
  ),
  args: {
    variant: 'default',
    padding: 'md',
  },
}

export const 複合コンポーネント使用例: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Card variant="default" padding="none">
        <Card.Header
          action={
            <button
              type="button"
              style={{
                padding: '4px 12px',
                background: 'var(--color-accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              編集
            </button>
          }
        >
          プロジェクト設定
        </Card.Header>
        <Card.Body>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-sub)', lineHeight: 1.6 }}>
            Header + Body + Footer を組み合わせた複合コンポーネントの使用例です。
            各セクションが適切な余白と区切り線で分割されます。
          </p>
        </Card.Body>
        <Card.Footer>最終更新: 2026年4月15日</Card.Footer>
      </Card>
    </div>
  ),
}

export const PaddingNone: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card variant="default" padding="none">
        <div
          style={{
            background: 'var(--color-muted)',
            height: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-sub)',
            fontSize: 14,
          }}
        >
          画像エリア（padding: none）
        </div>
        <div style={{ padding: 'var(--space-4)' }}>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text)' }}>
            padding="none" にすると内部パディングは各子要素で制御できます。
          </p>
        </div>
      </Card>
    </div>
  ),
}

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'オーバーレイ付きのモーダルダイアログ。ESCキーやオーバーレイクリックで閉じられる。タイトル・ボディ・フッターの3エリアで構成され、size prop で横幅を切り替えられる。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

/* ── ラッパー：開閉ボタン付きのデモ用コンポーネント ── */
function ModalDemo({
  buttonLabel = 'モーダルを開く',
  ...props
}: Omit<React.ComponentProps<typeof Modal>, 'isOpen' | 'onClose'> & {
  buttonLabel?: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '10px 20px',
          background: 'var(--color-accent)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        {buttonLabel}
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)} {...props} />
    </>
  )
}

/* ── フッターボタン ── */
const FooterButtons = ({ onClose }: { onClose?: () => void }) => (
  <>
    <button
      onClick={onClose}
      style={{
        padding: '9px 20px',
        background: 'transparent',
        color: 'var(--color-text-sub)',
        border: '1.5px solid var(--color-border)',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
      }}
    >
      キャンセル
    </button>
    <button
      style={{
        padding: '9px 20px',
        background: 'var(--color-accent)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
      }}
    >
      確認する
    </button>
  </>
)

/* ── Stories ── */

export const デフォルト: Story = {
  render: () => (
    <ModalDemo title="モーダルタイトル">
      <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>
        これはモーダルの本文テキストです。スクロールが必要な場合は自動的に縦スクロールが有効になります。
      </p>
    </ModalDemo>
  ),
}

export const サイズSm: Story = {
  render: () => (
    <ModalDemo title="小さいモーダル（sm）" size="sm" buttonLabel="sm を開く">
      <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>
        max-width: 400px のモーダルです。確認ダイアログなど簡潔な用途に適しています。
      </p>
    </ModalDemo>
  ),
}

export const サイズMd: Story = {
  render: () => (
    <ModalDemo title="標準モーダル（md）" size="md" buttonLabel="md を開く">
      <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>
        max-width: 560px のモーダルです（デフォルト）。フォームや一般的なコンテンツに使います。
      </p>
    </ModalDemo>
  ),
}

export const サイズLg: Story = {
  render: () => (
    <ModalDemo title="大きいモーダル（lg）" size="lg" buttonLabel="lg を開く">
      <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>
        max-width: 720px のモーダルです。テーブルや詳細表示など、横幅が必要な場合に使います。
      </p>
    </ModalDemo>
  ),
}

export const フッターあり: Story = {
  render: () => {
    function Demo() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '10px 20px',
              background: 'var(--color-accent)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            フッターありを開く
          </button>
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="変更を保存しますか？"
            footer={<FooterButtons onClose={() => setOpen(false)} />}
          >
            <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>
              この操作は取り消せません。本当に実行してよいかご確認ください。
            </p>
          </Modal>
        </>
      )
    }
    return <Demo />
  },
}

export const タイトルなし: Story = {
  render: () => (
    <ModalDemo buttonLabel="タイトルなしを開く">
      <p style={{ margin: 0, color: 'var(--color-text-sub)' }}>
        title prop を省略した場合、ヘッダーは × ボタンのみになります。
      </p>
    </ModalDemo>
  ),
}

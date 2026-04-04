import type { Meta, StoryObj } from '@storybook/react'
import { useDisclosure } from './useDisclosure'

// ── スタイル定数 ───────────────────────────────────────

const buttonBase: React.CSSProperties = {
  padding: '0.5rem 1.25rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '0.875rem',
}

// ── デモコンポーネント ──────────────────────────────────

/** open / close / toggle ボタンで isOpen を操作するデモ */
function DisclosureDemo({ initialState }: { initialState?: boolean }) {
  const { isOpen, open, close, toggle } = useDisclosure(initialState)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* 状態表示 */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1rem',
          background: '#F3F4F6',
          borderRadius: '8px',
          marginBottom: '1.5rem',
        }}
      >
        <span style={{ color: '#555' }}>isOpen:</span>
        <strong
          style={{
            color: isOpen ? '#16A34A' : '#DC2626',
            fontSize: '1.125rem',
          }}
        >
          {isOpen ? 'true' : 'false'}
        </strong>
        <span
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: isOpen ? '#16A34A' : '#DC2626',
            display: 'inline-block',
          }}
        />
      </div>

      {/* コントロールボタン */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={open}
          style={{ ...buttonBase, background: '#3B5BDB', color: '#fff' }}
        >
          open()
        </button>
        <button
          onClick={close}
          style={{ ...buttonBase, background: '#E5E7EB', color: '#374151' }}
        >
          close()
        </button>
        <button
          onClick={toggle}
          style={{ ...buttonBase, background: '#7C3AED', color: '#fff' }}
        >
          toggle()
        </button>
      </div>

      {/* 簡易モーダル風表示 */}
      {isOpen && (
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.25rem',
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '8px',
            maxWidth: '360px',
          }}
        >
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1E40AF' }}>
            コンテンツが表示されています
          </p>
          <p style={{ margin: '0.5rem 0 0', color: '#3B82F6', fontSize: '0.875rem' }}>
            close() を呼ぶと非表示になります。
          </p>
          <button
            onClick={close}
            style={{
              ...buttonBase,
              marginTop: '0.75rem',
              background: '#1E40AF',
              color: '#fff',
            }}
          >
            閉じる
          </button>
        </div>
      )}
    </div>
  )
}

// ── Meta ───────────────────────────────────────────────

const meta = {
  title: 'hooks/useDisclosure',
  component: DisclosureDemo,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    initialState: {
      control: 'boolean',
      description: '初期の開閉状態',
    },
  },
} satisfies Meta<typeof DisclosureDemo>

export default meta
type Story = StoryObj<typeof meta>

// ── Stories ────────────────────────────────────────────

/** 初期状態: 閉じている（デフォルト） */
export const Default: Story = {
  args: { initialState: false },
}

/** 初期状態: 開いている */
export const InitiallyOpen: Story = {
  args: { initialState: true },
}

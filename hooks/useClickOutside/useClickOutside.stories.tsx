import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { useClickOutside } from './useClickOutside'

// ── デモコンポーネント ──────────────────────────────────

/**
 * ボックスの外をクリックすると閉じるドロップダウン的なデモ。
 */
function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: '1rem', color: '#555' }}>
        「開く」ボタンをクリックするとボックスが表示されます。
        ボックスの外側をクリックすると自動的に閉じます。
      </p>

      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.5rem 1.25rem',
          background: '#3B5BDB',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '1rem',
        }}
      >
        開く
      </button>

      {isOpen && (
        <div
          ref={ref}
          style={{
            padding: '1.5rem',
            background: '#fff',
            border: '2px solid #3B5BDB',
            borderRadius: '8px',
            maxWidth: '320px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          }}
        >
          <p style={{ margin: 0, fontWeight: 'bold', color: '#222' }}>
            ドロップダウン / モーダル風ボックス
          </p>
          <p style={{ margin: '0.5rem 0 0', color: '#666', fontSize: '0.875rem' }}>
            このボックスの外側をクリックすると閉じます。
          </p>
        </div>
      )}

      <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.875rem' }}>
        状態: <strong>{isOpen ? '開いている' : '閉じている'}</strong>
      </p>
    </div>
  )
}

// ── Meta ───────────────────────────────────────────────

const meta = {
  title: 'hooks/useClickOutside',
  component: ClickOutsideDemo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ClickOutsideDemo>

export default meta
type Story = StoryObj<typeof meta>

// ── Stories ────────────────────────────────────────────

/** 外側クリックで閉じるドロップダウンのデモ */
export const Default: Story = {}

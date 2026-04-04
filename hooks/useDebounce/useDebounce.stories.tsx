import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { useDebounce } from './useDebounce'

// ── デモコンポーネント ──────────────────────────────────

/** テキスト入力とデバウンス値を並べて表示するデモ */
function DebounceDemo({ delay }: { delay?: number }) {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, delay)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '480px' }}>
      <p style={{ color: '#555', marginBottom: '1.25rem', lineHeight: 1.6 }}>
        テキストを入力してください。入力値はすぐ反映されますが、
        デバウンス値は <strong>{delay ?? 300}ms</strong> 後に更新されます。
      </p>

      {/* テキスト入力 */}
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="ここに入力..."
        style={{
          width: '100%',
          padding: '0.625rem 0.875rem',
          border: '1.5px solid #D1D5DB',
          borderRadius: '6px',
          fontSize: '1rem',
          outline: 'none',
          boxSizing: 'border-box',
          marginBottom: '1.5rem',
        }}
      />

      {/* 値の比較表示 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <ValueRow
          label="入力値"
          value={inputValue}
          color="#3B5BDB"
          badge="即時"
        />
        <ValueRow
          label={`デバウンス値（${delay ?? 300}ms 後）`}
          value={debouncedValue}
          color="#7C3AED"
          badge={`${delay ?? 300}ms`}
        />
      </div>

      {/* 一致インジケーター */}
      <div
        style={{
          marginTop: '1.25rem',
          padding: '0.625rem 1rem',
          background: inputValue === debouncedValue ? '#F0FDF4' : '#FFF7ED',
          border: `1px solid ${inputValue === debouncedValue ? '#BBF7D0' : '#FED7AA'}`,
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: inputValue === debouncedValue ? '#15803D' : '#C2410C',
        }}
      >
        {inputValue === debouncedValue
          ? '入力値とデバウンス値が一致しています（待機完了）'
          : 'デバウンス中... 入力が止まるまで待ちます'}
      </div>
    </div>
  )
}

/** 値を1行で表示するサブコンポーネント */
function ValueRow({
  label,
  value,
  color,
  badge,
}: {
  label: string
  value: string
  color: string
  badge: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.625rem 0.875rem',
        background: '#F9FAFB',
        borderRadius: '6px',
        border: '1px solid #E5E7EB',
      }}
    >
      <span
        style={{
          fontSize: '0.75rem',
          padding: '0.125rem 0.5rem',
          background: color,
          color: '#fff',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {badge}
      </span>
      <span style={{ color: '#555', fontSize: '0.875rem', flexShrink: 0 }}>
        {label}:
      </span>
      <strong style={{ color: '#111', minWidth: '4ch' }}>
        {value === '' ? <span style={{ color: '#9CA3AF' }}>（空）</span> : value}
      </strong>
    </div>
  )
}

// ── Meta ───────────────────────────────────────────────

const meta = {
  title: 'hooks/useDebounce',
  component: DebounceDemo,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    delay: {
      control: { type: 'range', min: 100, max: 2000, step: 100 },
      description: 'デバウンスの遅延時間（ミリ秒）',
    },
  },
} satisfies Meta<typeof DebounceDemo>

export default meta
type Story = StoryObj<typeof meta>

// ── Stories ────────────────────────────────────────────

/** デフォルトの遅延時間（300ms） */
export const Default: Story = {
  args: { delay: 300 },
}

/** 遅延時間を長めに設定（1000ms） */
export const SlowDebounce: Story = {
  args: { delay: 1000 },
}

/** 遅延時間を短めに設定（100ms） */
export const FastDebounce: Story = {
  args: { delay: 100 },
}

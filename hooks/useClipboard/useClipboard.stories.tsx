import type { Meta, StoryObj } from '@storybook/react'
import { useClipboard } from './useClipboard'

/* ── デモ用コンポーネント ── */
function ClipboardDemo({ duration }: { duration?: number }) {
  const { copied, copy } = useClipboard({ duration })
  const text = 'short hair, standing, blue sky, natural lighting, 4k'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '340px' }}>
      <div style={{ padding: '10px 12px', background: '#f5f5f5', borderRadius: '6px', fontSize: '0.85rem', color: '#444', fontFamily: 'monospace' }}>
        {text}
      </div>
      <button
        type="button"
        onClick={() => copy(text)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '6px 14px', border: '1px solid',
          borderColor: copied ? '#2e7d52' : '#ccc',
          borderRadius: '6px',
          background: copied ? 'rgba(46,125,82,0.1)' : '#fff',
          color: copied ? '#2e7d52' : '#555',
          fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
        }}
      >
        {copied ? '✓ コピー済み' : '⎘ コピー'}
      </button>
    </div>
  )
}

const meta: Meta = {
  title: 'Hooks/useClipboard',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'テキストをクリップボードにコピーし、一定時間 `copied` フラグを true にするカスタムフック。\n\n' +
          '**シグネチャ:**\n```ts\nconst { copied, copy } = useClipboard({ duration?: number })\n```',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <ClipboardDemo />,
}

export const 長めのフィードバック時間: Story = {
  render: () => <ClipboardDemo duration={5000} />,
}

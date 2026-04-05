import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { useSwipe } from './useSwipe'

/* ── デモ用コンポーネント ── */
const ITEMS = ['☀️ 晴れ 28°', '🌤 曇り 22°', '🌧 雨 18°', '⛅ くもり 20°']

function SliderDemo() {
  const [index, setIndex] = useState(0)
  const [log, setLog]     = useState<string[]>([])

  const addLog = (dir: string) => setLog(prev => [`→ ${dir}`, ...prev].slice(0, 5))

  const { handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp, handleMouseLeave } =
    useSwipe({
      onSwipe: (dir) => {
        addLog(dir)
        if (dir === 'left')  setIndex(i => (i + 1) % ITEMS.length)
        if (dir === 'right') setIndex(i => (i - 1 + ITEMS.length) % ITEMS.length)
      },
    })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>← ドラッグ / スワイプ →</p>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '180px', height: '80px',
          background: '#f5f5f5', borderRadius: '10px',
          border: '1px solid #ddd',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', fontWeight: 600, cursor: 'grab', userSelect: 'none',
        }}
      >
        {ITEMS[index]}
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        {ITEMS.map((_, i) => (
          <span
            key={i}
            style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: i === index ? '#a07060' : '#ddd',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#999', minHeight: '60px' }}>
        {log.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Hooks/useSwipe',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'タッチ（スマホスワイプ）とマウスドラッグを統一して検知するカスタムフック。\n\n' +
          '**シグネチャ:**\n```ts\nconst { handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp, handleMouseLeave } =\n  useSwipe({ threshold?: number, axis?: \'horizontal\' | \'vertical\' | \'both\', onSwipe })\n```',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export default meta
type Story = StoryObj

export const スライダーデモ: Story = {
  render: () => <SliderDemo />,
}

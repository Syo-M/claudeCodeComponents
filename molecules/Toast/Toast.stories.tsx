import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastContainer, useToast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '通知トーストコンポーネント。success / error / warning / info の4バリアントを持ち、自動クローズに対応する。`useToast` フックと `ToastContainer` をセットで使うと複数Toast を管理できる。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    duration: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

/* ── 閉じる処理のダミー ── */
const noop = () => {}

/* ── 単体バリアント Stories ── */

export const Success: Story = {
  args: {
    id: 'demo-success',
    message: '保存しました',
    variant: 'success',
    duration: 0,
    onClose: noop,
  },
}

export const Error: Story = {
  args: {
    id: 'demo-error',
    message: '保存に失敗しました。もう一度お試しください。',
    variant: 'error',
    duration: 0,
    onClose: noop,
  },
}

export const Warning: Story = {
  args: {
    id: 'demo-warning',
    message: 'セッションの有効期限が近づいています',
    variant: 'warning',
    duration: 0,
    onClose: noop,
  },
}

export const Info: Story = {
  args: {
    id: 'demo-info',
    message: '新しいバージョンが利用可能です',
    variant: 'info',
    duration: 0,
    onClose: noop,
  },
}

/* ── インタラクティブデモ（useToast 使用） ── */

export const インタラクティブデモ: Story = {
  render: () => {
    function Demo() {
      const { toasts, show, close } = useToast()

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'flex-start',
          }}
        >
          <p style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--color-text-sub)' }}>
            ボタンをクリックして通知を表示できます
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {/* success */}
            <button
              onClick={() => show('ファイルを保存しました', 'success')}
              style={buttonStyle('#2E7D52')}
            >
              ✓ 成功
            </button>

            {/* error */}
            <button
              onClick={() => show('エラーが発生しました', 'error')}
              style={buttonStyle('#C0392B')}
            >
              ✕ エラー
            </button>

            {/* warning */}
            <button
              onClick={() => show('残り容量が少なくなっています', 'warning')}
              style={buttonStyle('#B58B00')}
            >
              ! 警告
            </button>

            {/* info */}
            <button
              onClick={() => show('アップデートが利用可能です', 'info')}
              style={buttonStyle('#2B7BB8')}
            >
              i 情報
            </button>

            {/* 自動閉じなし */}
            <button
              onClick={() => show('この通知は手動で閉じてください', 'info', 0)}
              style={buttonStyle('#8C8078')}
            >
              持続する通知
            </button>
          </div>

          {/* ToastContainer は画面右下に fixed 表示 */}
          <ToastContainer toasts={toasts} onClose={close} />
        </div>
      )
    }
    return <Demo />
  },
}

function buttonStyle(bg: string): React.CSSProperties {
  return {
    padding: '8px 16px',
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
  }
}

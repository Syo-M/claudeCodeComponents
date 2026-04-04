import type { Meta, StoryObj } from '@storybook/react'
import { ErrorMessage } from './ErrorMessage'

const meta: Meta<typeof ErrorMessage> = {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    docs: {
      description: {
        component:
          'エラーメッセージ表示 Atom。`role="alert"` でスクリーンリーダーに即時読み上げされる。フォームのバリデーションエラー等に使用。',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    id: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof ErrorMessage>

// ── 短いメッセージ ──
export const 短いメッセージ: Story = {
  args: {
    children: 'このフィールドは必須です。',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', maxWidth: '480px' }}>
        <Story />
      </div>
    ),
  ],
}

// ── 長いメッセージ ──
export const 長いメッセージ: Story = {
  args: {
    children:
      'メールアドレスの形式が正しくありません。「example@domain.com」のような形式で入力してください。半角英数字・記号のみ使用できます。',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', maxWidth: '480px' }}>
        <Story />
      </div>
    ),
  ],
}

// ── 複数エラー ──
export const 複数エラー: Story = {
  render: () => (
    <div style={{ padding: '16px', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <ErrorMessage>名前を入力してください。</ErrorMessage>
      <ErrorMessage>メールアドレスの形式が正しくありません。</ErrorMessage>
      <ErrorMessage>パスワードは8文字以上で入力してください。</ErrorMessage>
    </div>
  ),
}

// ── フォームとの連携例 ──
export const フォームとの連携例: Story = {
  render: () => (
    <div style={{ padding: '16px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label
        htmlFor="email-input"
        style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}
      >
        メールアドレス
      </label>
      <input
        id="email-input"
        type="email"
        aria-describedby="email-error"
        aria-invalid="true"
        defaultValue="不正な値"
        style={{
          padding: '8px 12px',
          border: '1px solid var(--color-error)',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-md)',
        }}
      />
      <ErrorMessage id="email-error">
        メールアドレスの形式が正しくありません。
      </ErrorMessage>
    </div>
  ),
}

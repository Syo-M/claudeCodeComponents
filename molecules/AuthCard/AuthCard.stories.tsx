import type { Meta, StoryObj } from '@storybook/react'
import { AuthCard } from './AuthCard'

const meta: Meta<typeof AuthCard> = {
  title: 'Molecules/AuthCard',
  component: AuthCard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '認証ページ（ログイン・新規登録・メール確認など）で使うカードレイアウト。ブランドラベル・タイトル・サブタイトル・ステップインジケーターを内包し、children にフォームや操作UIを渡して使う。',
      },
    },
  },
  argTypes: {
    brand: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    totalSteps: { control: { type: 'number', min: 2, max: 5 } },
    currentStep: { control: { type: 'number', min: 1, max: 5 } },
  },
}

export default meta
type Story = StoryObj<typeof AuthCard>

const SampleForm = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-sub)' }}>
        メールアドレス
      </label>
      <input
        type="email"
        placeholder="example@mail.com"
        style={{
          padding: '0 16px',
          height: '44px',
          fontSize: '14px',
          border: '1.5px solid var(--color-border)',
          borderRadius: '8px',
          outline: 'none',
        }}
      />
    </div>
    <button
      style={{
        height: '44px',
        background: 'var(--color-accent)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
      }}
    >
      次へ
    </button>
  </div>
)

export const ログイン: Story = {
  args: {
    brand: 'My App',
    title: 'ログイン',
    subtitle: 'アカウントにサインインしてください',
    children: <SampleForm />,
  },
}

export const 新規登録ステップ1: Story = {
  args: {
    brand: 'My App',
    title: '新規登録',
    subtitle: 'メールアドレスとパスワードを設定してください',
    totalSteps: 2,
    currentStep: 1,
    children: <SampleForm />,
  },
}

export const 新規登録ステップ2: Story = {
  args: {
    brand: 'My App',
    title: 'メール確認',
    subtitle: 'example@mail.com に送信した6桁のコードを入力してください',
    totalSteps: 2,
    currentStep: 2,
    children: <SampleForm />,
  },
}

export const ブランドなし: Story = {
  args: {
    title: 'パスワードリセット',
    subtitle: 'メールアドレスを入力してください',
    children: <SampleForm />,
  },
}

export const ステップ3段階: Story = {
  args: {
    brand: 'My App',
    title: '追加情報',
    subtitle: 'プロフィールを設定してください',
    totalSteps: 3,
    currentStep: 2,
    children: <SampleForm />,
  },
}

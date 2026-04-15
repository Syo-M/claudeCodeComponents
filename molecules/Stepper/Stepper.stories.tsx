import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Stepper } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: 'フォームウィザード用のステップ進捗インジケーター。currentStep prop で現在のステップを制御する。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px', maxWidth: '600px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Stepper>

const steps = [
  { id: '1', label: 'アカウント', description: 'メールとパスワード' },
  { id: '2', label: 'プロフィール', description: '基本情報の入力' },
  { id: '3', label: '確認', description: '入力内容のチェック' },
  { id: '4', label: '完了' },
]

export const インタラクティブHorizontal: Story = {
  render: () => {
    const [step, setStep] = useState(0)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Stepper steps={steps} currentStep={step} variant="horizontal" />
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            style={{ padding: '8px 16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'var(--color-surface-raised)', color: 'var(--color-text)', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}
          >
            前へ
          </button>
          <button
            onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
            disabled={step === steps.length - 1}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '6px', background: 'var(--color-accent)', color: '#fff', cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer', opacity: step === steps.length - 1 ? 0.4 : 1 }}
          >
            次へ
          </button>
        </div>
      </div>
    )
  },
}

export const インタラクティブVertical: Story = {
  render: () => {
    const [step, setStep] = useState(1)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Stepper steps={steps} currentStep={step} variant="vertical" />
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            style={{ padding: '8px 16px', border: '1px solid var(--color-border)', borderRadius: '6px', background: 'var(--color-surface-raised)', color: 'var(--color-text)', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}
          >
            前へ
          </button>
          <button
            onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
            disabled={step === steps.length - 1}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '6px', background: 'var(--color-accent)', color: '#fff', cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer', opacity: step === steps.length - 1 ? 0.4 : 1 }}
          >
            次へ
          </button>
        </div>
      </div>
    )
  },
}

export const 完了状態: Story = {
  render: () => (
    <Stepper steps={steps} currentStep={steps.length - 1} variant="horizontal" />
  ),
}

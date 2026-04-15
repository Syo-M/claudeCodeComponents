// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Stepper.module.css'

type StepStatus = 'completed' | 'active' | 'upcoming'

type StepItem = {
  id: string
  label: string
  description?: string
}

type Props = {
  steps: StepItem[]
  currentStep: number // 0始まりインデックス
  variant?: 'horizontal' | 'vertical'
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width={16} height={16}>
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Stepper({ steps, currentStep, variant = 'horizontal' }: Props) {
  return (
    <ol
      className={[styles.stepper, styles[variant]].filter(Boolean).join(' ')}
      aria-label="ステップ"
    >
      {steps.map((step, idx) => {
        const status: StepStatus =
          idx < currentStep ? 'completed' : idx === currentStep ? 'active' : 'upcoming'

        return (
          <li key={step.id} className={[styles.step, styles[status]].filter(Boolean).join(' ')}>
            <div className={styles.indicatorWrapper}>
              <div className={styles.indicator} aria-hidden="true">
                {status === 'completed' ? <CheckIcon /> : <span>{idx + 1}</span>}
              </div>
              {idx < steps.length - 1 && (
                <div className={[styles.connector, status === 'completed' ? styles.connectorDone : ''].filter(Boolean).join(' ')} aria-hidden="true" />
              )}
            </div>
            <div className={styles.labelGroup}>
              <span
                className={styles.label}
                aria-current={status === 'active' ? 'step' : undefined}
              >
                {step.label}
              </span>
              {step.description && (
                <span className={styles.description}>{step.description}</span>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

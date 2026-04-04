// Next.js で使う場合は先頭に 'use client' を追加すること

import type { ReactNode } from 'react'
import styles from './FormField.module.css'

type Props = {
  /** フィールドのラベルテキスト（必須） */
  label: string
  /** label の for 属性（内包する入力要素の id と合わせる） */
  htmlFor?: string
  /** エラーメッセージ。指定するとヒントは非表示になる */
  error?: string
  /** ヒントテキスト。エラーがある場合は非表示 */
  hint?: string
  /** true の場合、ラベル横に * を表示する */
  required?: boolean
  /** 任意のフォーム要素（Input, Select, Checkbox など） */
  children: ReactNode
}

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  children,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>

      {/* 入力要素 */}
      <div className={styles.fieldBody}>{children}</div>

      {/* エラーがある場合はエラーを表示（ヒントは非表示） */}
      {error && (
        <p className={styles.errorText} role="alert">
          {error}
        </p>
      )}

      {/* エラーがない場合のみヒントを表示 */}
      {!error && hint && (
        <p className={styles.hintText}>{hint}</p>
      )}
    </div>
  )
}

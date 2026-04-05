// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './SortSelector.module.css'

export type SortOption<T extends string = string> = {
  value: T
  label: string
}

type Props<T extends string = string> = {
  /** ソートオプション一覧 */
  options: SortOption<T>[]
  /** 現在選択中の値 */
  value: T
  /** 選択変更コールバック */
  onChange: (value: T) => void
  className?: string
}

/**
 * SortSelector – ソート・表示切替に使う横並びボタングループ Molecule。
 * ラジオボタンの UI バリアントとして機能し、RadioGroup より視覚的に目立つ切替 UI を提供する。
 * MkDataList（イベント一覧のソート切替）などで使用。
 */
export function SortSelector<T extends string = string>({
  options,
  value,
  onChange,
  className,
}: Props<T>) {
  return (
    <div
      role="group"
      className={[styles.group, className].filter(Boolean).join(' ')}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={opt.value === value}
          className={[styles.btn, opt.value === value ? styles.active : ''].filter(Boolean).join(' ')}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

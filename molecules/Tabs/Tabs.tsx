// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useRef } from 'react'
import styles from './Tabs.module.css'

type TabItem = {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

type Props = {
  items: TabItem[]
  defaultId?: string
  variant?: 'line' | 'contained'
}

export function Tabs({ items, defaultId, variant = 'line' }: Props) {
  const [activeId, setActiveId] = useState(defaultId ?? items[0]?.id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const active = items.find((i) => i.id === activeId)

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    // 矢印キーでタブ移動（左←、右→）IME対応のため Enter は使わない
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      let next = idx + 1
      while (next < items.length && items[next].disabled) next++
      if (next < items.length) {
        setActiveId(items[next].id)
        tabRefs.current[next]?.focus()
      }
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      let prev = idx - 1
      while (prev >= 0 && items[prev].disabled) prev--
      if (prev >= 0) {
        setActiveId(items[prev].id)
        tabRefs.current[prev]?.focus()
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div
        role="tablist"
        className={[styles.tabList, styles[variant]].filter(Boolean).join(' ')}
      >
        {items.map((item, idx) => (
          <button
            key={item.id}
            ref={(el) => { tabRefs.current[idx] = el }}
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={item.id === activeId}
            aria-controls={`panel-${item.id}`}
            disabled={item.disabled}
            tabIndex={item.id === activeId ? 0 : -1}
            className={[
              styles.tab,
              item.id === activeId ? styles.active : '',
              item.disabled ? styles.disabled : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => !item.disabled && setActiveId(item.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {active && (
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className={styles.panel}
        >
          {active.content}
        </div>
      )}
    </div>
  )
}

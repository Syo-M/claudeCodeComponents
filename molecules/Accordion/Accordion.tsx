// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState } from 'react'
import styles from './Accordion.module.css'

type AccordionItem = {
  id: string
  title: string
  content: React.ReactNode
  defaultOpen?: boolean
}

type Props = {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: Props) {
  const [openIds, setOpenIds] = useState<string[]>(
    items.filter((i) => i.defaultOpen).map((i) => i.id)
  )

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id)
      if (isOpen) {
        return prev.filter((i) => i !== id)
      }
      if (allowMultiple) {
        return [...prev, id]
      }
      return [id]
    })
  }

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={`trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                className={styles.trigger}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <svg
                  className={[styles.chevron, isOpen ? styles.chevronOpen : ''].filter(Boolean).join(' ')}
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={`panel-${item.id}`}
              role="region"
              aria-labelledby={`trigger-${item.id}`}
              className={[styles.panelWrapper, isOpen ? styles.panelWrapperOpen : ''].filter(Boolean).join(' ')}
            >
              <div className={styles.panelInner}>
                <div className={styles.panelContent}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Next.js で使う場合は先頭に 'use client' を追加すること

import { useEffect, useId } from 'react'
import styles from './Modal.module.css'

type ModalSize = 'sm' | 'md' | 'lg'

type Props = {
  /** モーダルの開閉状態 */
  isOpen: boolean
  /** 閉じる処理 */
  onClose: () => void
  /** ヘッダーに表示するタイトル */
  title?: string
  /** モーダル本文 */
  children: React.ReactNode
  /** フッター（ボタン等）。渡した場合のみ表示 */
  footer?: React.ReactNode
  /** 幅のサイズ（sm: 400px / md: 560px / lg: 720px） */
  size?: ModalSize
  /** オーバーレイクリックで閉じるか（デフォルト: true） */
  closeOnOverlayClick?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
}: Props) {
  const titleId = useId()

  // ESC キーで閉じる
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // スクロールロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose()
    }
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      aria-hidden="false"
    >
      <div
        className={`${styles.dialog} ${styles[size]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className={styles.header}>
          {title && (
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          )}
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="閉じる"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 5L5 15M5 5l10 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ボディ */}
        <div className={styles.body}>{children}</div>

        {/* フッター */}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  )
}

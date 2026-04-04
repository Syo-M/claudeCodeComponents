// Next.js で使う場合は先頭に 'use client' を追加すること

import { useRef, useState, useEffect } from 'react'
import styles from './UserMenu.module.css'

type Props = {
  /** 表示名 */
  displayName: string
  /** メールアドレス */
  email: string
  /** アバター画像URL（未指定時は表示名の頭文字を表示） */
  avatarUrl?: string
  /** サインアウト処理 */
  onSignOut: () => void
  /** アカウント設定を開く処理（未指定時はメニュー項目を非表示） */
  onOpenSettings?: () => void
}

export function UserMenu({ displayName, email, avatarUrl, onSignOut, onOpenSettings }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const initial = displayName.charAt(0).toUpperCase()

  // クリック外で閉じる
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {/* トリガーボタン */}
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="ユーザーメニューを開く"
      >
        <span className={styles.avatar}>
          {avatarUrl ? (
            <img src={avatarUrl} alt={displayName} width={32} height={32} />
          ) : (
            initial
          )}
        </span>
        <span className={styles.triggerName}>{displayName}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ドロップダウン */}
      {isOpen && (
        <div className={styles.dropdown} role="menu">
          {/* ユーザー情報 */}
          <div className={styles.userInfo}>
            <span className={styles.userInfoAvatar}>
              {avatarUrl ? (
                <img src={avatarUrl} alt={displayName} width={40} height={40} />
              ) : (
                initial
              )}
            </span>
            <div className={styles.userInfoText}>
              <span className={styles.userInfoName}>{displayName}</span>
              <span className={styles.userInfoEmail}>{email}</span>
            </div>
          </div>

          {/* メニュー */}
          <nav className={styles.menu} aria-label="ユーザーメニュー">
            {onOpenSettings && (
              <button
                className={styles.menuItem}
                role="menuitem"
                onClick={() => { onOpenSettings(); setIsOpen(false) }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 13c0-3 2.686-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                アカウント設定
              </button>
            )}

            {onOpenSettings && <div className={styles.menuDivider} role="separator" />}

            <button
              className={`${styles.menuItem} ${styles.menuItemDanger}`}
              role="menuitem"
              onClick={() => { onSignOut(); setIsOpen(false) }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3M10 11l3-3-3-3M13 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              サインアウト
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

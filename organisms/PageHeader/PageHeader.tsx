// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './PageHeader.module.css'

type NavItem = {
  /** ナビゲーションリンクのラベル */
  label: string
  /** リンク先URL */
  href: string
  /** アクティブ状態かどうか */
  active?: boolean
}

type Props = {
  /** ブランド名テキスト（必須） */
  brand: string
  /** ブランドリンク先URL */
  brandHref?: string
  /** ナビゲーションリンクの配列 */
  nav?: NavItem[]
  /** 右端に配置するUI（UserMenuなど） */
  actions?: React.ReactNode
}

export function PageHeader({ brand, brandHref = '/', nav, actions }: Props) {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        {/* ブランドロゴ・名称 */}
        <a href={brandHref} className={styles.brand} aria-label={`${brand} - ホームへ`}>
          {brand}
        </a>

        {/* ナビゲーション */}
        {nav && nav.length > 0 && (
          <nav className={styles.nav} aria-label="メインナビゲーション">
            <ul className={styles.navList} role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${item.active ? styles.navLinkActive : ''}`}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* 右端アクション */}
        {actions && (
          <div className={styles.actions}>
            {actions}
          </div>
        )}
      </div>
    </header>
  )
}

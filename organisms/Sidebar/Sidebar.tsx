// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState } from 'react'
import styles from './Sidebar.module.css'

type SubItem = {
  id: string
  label: string
  href?: string
  active?: boolean
}

type NavItem = {
  id: string
  label: string
  icon?: React.ReactNode
  href?: string
  active?: boolean
  children?: SubItem[]
}

type Props = {
  items: NavItem[]
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  logo?: React.ReactNode
  footer?: React.ReactNode
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width={16} height={16}>
      <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width={16} height={16}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Sidebar({ items, collapsed = false, onCollapse, logo, footer }: Props) {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([])

  const toggleSubMenu = (id: string) => {
    setOpenSubMenus(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <aside
      className={[styles.sidebar, collapsed ? styles.collapsed : ''].filter(Boolean).join(' ')}
      aria-label="サイドバーナビゲーション"
    >
      {(logo || onCollapse) && (
        <div className={styles.header}>
          {!collapsed && logo && <div className={styles.logo}>{logo}</div>}
          {onCollapse && (
            <button
              className={[styles.collapseBtn, collapsed ? styles.collapseBtnCollapsed : ''].filter(Boolean).join(' ')}
              onClick={() => onCollapse(!collapsed)}
              aria-label={collapsed ? 'サイドバーを展開' : 'サイドバーを折りたたむ'}
            >
              <ChevronLeft />
            </button>
          )}
        </div>
      )}

      <nav className={styles.nav}>
        <ul className={styles.list} role="list">
          {items.map(item => {
            const hasChildren = (item.children?.length ?? 0) > 0
            const isOpen = openSubMenus.includes(item.id)

            return (
              <li key={item.id} className={styles.listItem}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={[styles.navItem, item.active ? styles.active : ''].filter(Boolean).join(' ')}
                    aria-current={item.active ? 'page' : undefined}
                    title={collapsed ? item.label : undefined}
                  >
                    {item.icon && <span className={styles.navIcon} aria-hidden="true">{item.icon}</span>}
                    {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={[styles.navItem, item.active ? styles.active : ''].filter(Boolean).join(' ')}
                    onClick={hasChildren && !collapsed ? () => toggleSubMenu(item.id) : undefined}
                    aria-current={item.active ? 'page' : undefined}
                    aria-expanded={hasChildren && !collapsed ? isOpen : undefined}
                    title={collapsed ? item.label : undefined}
                  >
                    {item.icon && <span className={styles.navIcon} aria-hidden="true">{item.icon}</span>}
                    {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
                    {!collapsed && hasChildren && (
                      <span className={[styles.chevron, isOpen ? styles.chevronOpen : ''].filter(Boolean).join(' ')}>
                        <ChevronDown />
                      </span>
                    )}
                  </button>
                )}

                {!collapsed && hasChildren && isOpen && (
                  <ul className={styles.subList} role="list">
                    {item.children!.map(child => (
                      <li key={child.id}>
                        <a
                          href={child.href ?? '#'}
                          className={[styles.subItem, child.active ? styles.subItemActive : ''].filter(Boolean).join(' ')}
                          aria-current={child.active ? 'page' : undefined}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {footer && !collapsed && <div className={styles.footer}>{footer}</div>}
    </aside>
  )
}

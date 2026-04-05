// Next.js で使う場合は先頭に 'use client' を追加すること

import { TagBadge } from '../../atoms/TagBadge/TagBadge'
import styles from './ProjectCard.module.css'

export type ProjectLink = {
  label: string
  href: string
  /** 外部リンクとして target="_blank" を付けるか。デフォルト: true */
  external?: boolean
}

type Props = {
  /** プロジェクト名（必須） */
  name: string
  /** 説明文（必須） */
  description: string
  /** 技術スタックタグ。TagBadge の color と合わせて指定可能 */
  techs: string[]
  /** アクションリンク（GitHub / デモ URL など） */
  links?: ProjectLink[]
  /** カードのステータスバッジ（'development' | 'active' | 'archived'） */
  status?: 'development' | 'active' | 'archived'
  className?: string
}

const STATUS_MAP = {
  development: { label: '開発中',    color: 'orange' },
  active:      { label: '公開中',    color: 'green'  },
  archived:    { label: 'アーカイブ', color: 'gray'   },
} as const

/**
 * ProjectCard – プロジェクト・アプリを紹介するカード Organism。
 * ポートフォリオ・ショーケースページで使う。
 * TagBadge でテック一覧、ProjectLink でアクションリンクを表示する。
 */
export function ProjectCard({
  name,
  description,
  techs,
  links = [],
  status,
  className,
}: Props) {
  const statusInfo = status ? STATUS_MAP[status] : null

  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      {/* ヘッダー：タイトル + ステータス */}
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        {statusInfo && (
          <TagBadge label={statusInfo.label} color={statusInfo.color} />
        )}
      </div>

      {/* 説明 */}
      <p className={styles.description}>{description}</p>

      {/* 技術スタック */}
      {techs.length > 0 && (
        <div className={styles.techs}>
          {techs.map((tech) => (
            <TagBadge key={tech} label={tech} color="blue" />
          ))}
        </div>
      )}

      {/* リンク群 */}
      {links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              {...(link.external !== false
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
              {link.external !== false && (
                <span className={styles.externalIcon} aria-hidden="true">↗</span>
              )}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

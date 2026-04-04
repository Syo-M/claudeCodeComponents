// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Avatar.module.css'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

type Props = {
  /** 画像URL。指定がない場合は name の頭文字を表示 */
  src?: string
  /** 画像の代替テキスト。未指定時は aria-hidden="true" を付与 */
  alt?: string
  /** 頭文字フォールバック用の名前 */
  name?: string
  /** アバターのサイズ（sm=24px / md=32px / lg=40px / xl=56px） */
  size?: AvatarSize
}

/** name の最初の文字を大文字で返すヘルパー */
function getInitial(name?: string): string {
  if (!name) return '?'
  return name.charAt(0).toUpperCase()
}

export function Avatar({ src, alt, name, size = 'md' }: Props) {
  const hasAlt = alt !== undefined && alt !== ''

  if (src) {
    return (
      <img
        src={src}
        alt={hasAlt ? alt : undefined}
        aria-hidden={hasAlt ? undefined : 'true'}
        className={[styles.avatar, styles[size]].join(' ')}
      />
    )
  }

  return (
    <span
      className={[styles.avatar, styles[size], styles.fallback].join(' ')}
      aria-hidden={hasAlt ? undefined : 'true'}
      aria-label={hasAlt ? alt : undefined}
      role={hasAlt ? 'img' : undefined}
    >
      {getInitial(name)}
    </span>
  )
}
